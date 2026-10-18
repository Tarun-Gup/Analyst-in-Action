---
title: "Build a Power BI Action Center That Goes Beyond Dashboards"
layout: post.njk
date: 2026-10-19
description: "What happens after Power BI detects a problem? Build an Action Center using Power Automate, Power Apps, and Dataverse to turn KPI exceptions into tracked investigations, clear ownership, and follow-through"
featuredImage: /assets/images/build-power-bi-action-center-that-goes-beyond-dashboards/cover.png
tags:
  - posts
  - Power BI
  - Architecture
  - Best Practices
  - Tools
---
A warning light on your car's dashboard tells you something is wrong. But it takes a service request, a mechanic, and a bit of follow-through to actually fix it.

Power BI isn't that different. It can tell us when a customer is falling behind target or a KPI needs attention. But who picks it up? Who investigates? And how do we know anything happened afterwards?

That's the idea behind the **Action Center** we're going to build. We'll connect Power BI, Power Automate, and Power Apps to turn detected problems into actions people can own, investigate, and follow through on. Because spotting a problem is only useful if something happens next.

<div class="blog-toc">
  <h3>In this blog</h3>

  <ul>
    <li>Why not every red KPI deserves an action?</li>
    <li>Building an Action Center around Power BI</li>
    <li>Connecting investigation, ownership, and context</li>
    <li>Keeping exceptions from becoming endless tasks</li>
  </ul>
</div>

---

## Not Every Red Number Deserves an Action

The easiest way to build an Action Center would be to take every KPI that crosses a threshold and turn it into a task. It would also be a pretty good way to make people stop using it.

A number falling below target doesn't necessarily mean someone needs to intervene. Imagine a customer whose performance drops 12% below target for a single day, then returns to normal. Creating a task every time that happens would quickly fill our Action Center with noise. But if the same customer remains below target for several reporting cycles, that might be worth investigating.

<div class="exception-mini">
  <div class="exception-mini__item">
    <span class="exception-mini__icon">○</span>
    <div class="exception-mini__text">
      <strong>Temporary deviation</strong>
      <span>Recovers after a short dip</span>
    </div>
    <span class="exception-mini__result">Monitor</span>
  </div>

  <div class="exception-mini__item exception-mini__item--action">
    <span class="exception-mini__icon">!</span>
    <div class="exception-mini__text">
      <strong>Persistent deviation</strong>
      <span>Remains below target</span>
    </div>
    <span class="exception-mini__result">Evaluate ↗</span>
  </div>
</div>

For this implementation, I'd qualify an exception using three conditions: **the deviation is meaningful, someone can take responsibility for it, and there's a clear next action.** The threshold tells us where to look, but the business context determines whether something deserves attention.

This distinction matters for the architecture we're about to build. **Power BI identifies exceptions based on agreed business rules. The Action Center manages what happens after they're detected.** It shouldn't automatically assume that every deviation requires a new task, or that a KPI returning to normal means the investigation is complete.

## Making Power BI Tell Us What Needs Attention

Here's where the semantic model becomes useful beyond powering reports. If we've already defined our KPIs and business rules in Power BI, why rebuild the same logic somewhere else? We can query the model directly and use the results to identify what needs attention.

Let's take a simple example: customers whose performance falls more than 10% below target. Using the **Run a query against a dataset** action in Power Automate, we can execute a DAX query against our published semantic model.


<div class="ac-architecture">
  <div class="ac-architecture__node ac-architecture__node--bi">
    <span class="ac-architecture__glyph" aria-hidden="true">◈</span>
    <div class="ac-architecture__copy">
      <strong>Power BI</strong>
      <span>Detect exceptions</span>
    </div>
  </div>

  <span class="ac-architecture__link" aria-hidden="true"></span>

  <div class="ac-architecture__node ac-architecture__node--flow">
    <span class="ac-architecture__glyph" aria-hidden="true">⤳</span>
    <div class="ac-architecture__copy">
      <strong>Power Automate</strong>
      <span>Query &amp; upsert</span>
    </div>
  </div>

  <span class="ac-architecture__link" aria-hidden="true"></span>

  <div class="ac-architecture__node ac-architecture__node--data">
    <span class="ac-architecture__glyph" aria-hidden="true">▤</span>
    <div class="ac-architecture__copy">
      <strong>Dataverse</strong>
      <span>Persist records</span>
    </div>
  </div>
</div>






<div class="aia-code">

  <div class="aia-code__header">
    <div class="aia-code__meta">
      <span class="aia-code__indicator"></span>
      <span class="aia-code__language">DAX QUERY</span>
      <span class="aia-code__separator"></span>
      <span class="aia-code__filename">Detect below-target customers</span>
    </div>

    <button
      class="aia-code__copy"
      type="button"
      onclick="copyAiaCode(this)"
      aria-label="Copy DAX query"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect x="8" y="8" width="13" height="13" rx="2"></rect>
        <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"></path>
      </svg>
      <span class="aia-code__copy-label">Copy</span>
    </button>
  </div>

  <pre class="aia-code__pre"><code><span class="aia-code__comment">-- Returns customers performing more than 10% below target.
-- Excludes blank actuals and non-positive targets.
-- Outputs the customer ID, actual performance, and target.</span>

<span class="aia-code__keyword">EVALUATE</span>
<span class="aia-code__keyword">VAR</span> _Customers =
    <span class="aia-code__fn">ADDCOLUMNS</span>(
        <span class="aia-code__fn">VALUES</span>(<span class="aia-code__str">'Customer'</span>[CustomerID]),
        <span class="aia-code__str">"Actual"</span>, [Actual Performance],
        <span class="aia-code__str">"Target"</span>, [Performance Target]
    )
<span class="aia-code__keyword">RETURN</span>
    <span class="aia-code__fn">SELECTCOLUMNS</span>(
        <span class="aia-code__fn">FILTER</span>(
            _Customers,
            <span class="aia-code__keyword">NOT</span> <span class="aia-code__fn">ISBLANK</span>([Actual]) &amp;&amp;
            [Target] &gt; 0 &amp;&amp;
            [Actual] &lt; [Target] * 0.9
        ),
        <span class="aia-code__str">"EntityID"</span>, <span class="aia-code__str">'Customer'</span>[CustomerID],
        <span class="aia-code__str">"Actual"</span>, [Actual],
        <span class="aia-code__str">"Target"</span>, [Target]
    )</code></pre>

</div>



The query returns only customers meeting our condition. But we don't want Power Automate to treat every returned row as a brand-new task. We need a way to recognise the same exception across multiple runs.

### From Query Results to Actionable Records

I'd start with a small Dataverse table called `Exceptions`. Alongside the customer identifier and KPI values, it needs a few fields that allow us to manage the exception over time.


<div class="aia-schema">
  <div class="aia-schema__header">
    <div class="aia-schema__identity">
      <span class="aia-schema__indicator"></span>
      <strong>Exceptions</strong>
      <span class="aia-schema__subtitle">Dataverse · Table schema</span>
    </div>
    <span class="aia-schema__count">05 FIELDS</span>
  </div>

  <div class="aia-schema__scroll">
    <table class="aia-schema__table">
      <thead>
        <tr>
          <th>FIELD</th>
          <th>PURPOSE</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>ExceptionKey</code></td>
          <td>Uniquely identifies the customer and exception type</td>
        </tr>
        <tr>
          <td><code>EntityID</code> <span class="aia-schema__slash">/</span> <code>ExceptionType</code></td>
          <td>Identifies what triggered the exception</td>
        </tr>
        <tr>
          <td><code>Actual</code> <span class="aia-schema__slash">/</span> <code>Target</code></td>
          <td>Preserves the latest detected values</td>
        </tr>
        <tr>
          <td><code>FirstDetected</code> <span class="aia-schema__slash">/</span> <code>LastDetected</code></td>
          <td>Tracks when the issue first appeared and was last observed</td>
        </tr>
        <tr>
          <td><code>Status</code> <span class="aia-schema__slash">/</span> <code>AssignedTo</code></td>
          <td>Captures the human side of the workflow</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


For our example, the exception key could be `CUST001|BelowTarget`. The customer identifier comes from the DAX query, while `BelowTarget` is a fixed exception type configured in the flow.

I'd schedule Power Automate to run **after a successful semantic model refresh**, execute the DAX query, and process each returned row. Using the exception key, the flow can find the corresponding Dataverse record and either create it or update its latest KPI values. We'll handle the full lifecycle, including what happens when an exception disappears, later in the article.

The important design choice is that **the automation owns the detected values, while people own the investigation**. A refresh can update `Actual`, `Target`, and `LastDetected`, but it shouldn't overwrite someone's assigned owner, comments, or resolution status. There are also a few practical things I'd watch out for:

<div class="aia-watchpoints">
  <div class="aia-watchpoint">
    <span class="aia-watchpoint__symbol" aria-hidden="true">◷</span>
    <div class="aia-watchpoint__content">
      <strong>Data freshness</strong>
      <p>Run exception detection only after a successful semantic model refresh.</p>
    </div>
  </div>

  <div class="aia-watchpoint">
    <span class="aia-watchpoint__symbol" aria-hidden="true">◇</span>
    <div class="aia-watchpoint__content">
      <strong>Data access</strong>
      <p>Ensure the flow's Power BI connection can access all relevant data.</p>
    </div>
  </div>

  <div class="aia-watchpoint">
    <span class="aia-watchpoint__symbol" aria-hidden="true">↻</span>
    <div class="aia-watchpoint__content">
      <strong>Partial failures</strong>
      <p>Retry safely without creating duplicate exception records.</p>
    </div>
  </div>
</div>


For thousands of exceptions or near-real-time detection, I'd consider moving this logic closer to the data platform rather than relying on scheduled semantic model queries. We now have something more useful than a daily export of flagged customers: **a persistent set of exceptions that can survive reporting cycles**. Next, we need to give people a practical way to work with them.

## From a List of Problems to a Place to Act

We now have our exceptions in Dataverse, with the latest KPI values and enough information to recognise them across refreshes. But a table full of exceptions isn't an Action Center yet. The missing piece is a way for someone to pick up an issue, understand what needs attention, and record what they're doing about it.

This is where I'd use **Power Apps**. We'll build a small canvas app connected to the `Exceptions` table we created earlier. Rather than designing an elaborate application, I'd focus on two screens that support the actual workflow.

### Building the Action Center

The first screen is an **exception queue**. It should immediately answer three questions: What needs attention? How urgent is it? And is anyone already handling it?

I'd show the exception type, customer, latest deviation, owner, and status, with filters for unassigned and in-progress items. Selecting a record opens the second screen, where someone can review the detected values, take ownership, and record their investigation.

<div class="aia-canvas">
  <div class="aia-canvas__layout">

    <!-- Left: Exception gallery -->
    <div class="aia-canvas__gallery">
      <div class="aia-canvas__heading">
        <strong>Exceptions</strong>
        <span>2 records</span>
      </div>

      <div class="aia-canvas__filters">
        <span class="active">All</span>
        <span>Unassigned</span>
        <span>In progress</span>
      </div>

      <div class="aia-canvas__record selected">
        <div class="aia-canvas__record-top">
          <strong>CUST001</strong>
          <span class="aia-canvas__chevron">›</span>
        </div>
        <div class="aia-canvas__record-bottom">
          <span>Below target · −12%</span>
          <span class="aia-canvas__state open">Unassigned</span>
        </div>
      </div>

      <div class="aia-canvas__record">
        <div class="aia-canvas__record-top">
          <strong>CUST002</strong>
        </div>
        <div class="aia-canvas__record-bottom">
          <span>Below target · −15%</span>
          <span class="aia-canvas__state progress">In progress</span>
        </div>
      </div>
    </div>

    <!-- Right: Exception detail form -->
    <div class="aia-canvas__detail">
      <div class="aia-canvas__detail-heading">
        <div>
          <span class="aia-canvas__eyebrow">EXCEPTION DETAILS</span>
          <strong>CUST001</strong>
        </div>
        <span class="aia-canvas__state open">Unassigned</span>
      </div>

      <div class="aia-canvas__form">
        <div class="aia-canvas__field">
          <span>Exception type</span>
          <strong>Below target</strong>
        </div>
        <div class="aia-canvas__field">
          <span>Assigned to</span>
          <strong class="muted">Not assigned</strong>
        </div>
      </div>

      <div class="aia-canvas__values">
        <div>
          <span>Actual</span>
          <strong>88</strong>
        </div>
        <div>
          <span>Target</span>
          <strong>100</strong>
        </div>
        <div>
          <span>Deviation</span>
          <strong class="negative">−12%</strong>
        </div>
      </div>

      <div class="aia-canvas__actions">
        <span class="aia-canvas__hint">Selected exception · CUST001</span>
        <span class="aia-canvas__button">Take ownership →</span>
      </div>
    </div>

  </div>
</div>


The key is that both screens work with the same Dataverse record. We aren't copying exceptions into another list or creating a separate task whenever someone clicks a button.

For example, when someone selects **Take Ownership**, we can update the record directly:


<div class="aia-code">

  <div class="aia-code__header">
    <div class="aia-code__meta">
      <span class="aia-code__indicator"></span>
      <span class="aia-code__language">POWER FX</span>
      <span class="aia-code__separator"></span>
      <span class="aia-code__filename">Take ownership of an exception</span>
    </div>

    <button
      class="aia-code__copy"
      type="button"
      onclick="copyAiaCode(this)"
      aria-label="Copy Power Fx code"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect x="8" y="8" width="13" height="13" rx="2"></rect>
        <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"></path>
      </svg>
      <span class="aia-code__copy-label">Copy</span>
    </button>
  </div>

  <pre class="aia-code__pre"><code><span class="aia-code__fn">Patch</span>(
    Exceptions,
    galExceptions.Selected,
    {
        AssignedToEmail: <span class="aia-code__fn">User</span>().Email,
        Status: <span class="aia-code__str">"In Progress"</span>
    }
)</code></pre>

</div>




Here, `AssignedToEmail` and `Status` are simple text columns in our prototype. For a production application, I'd use an appropriate user lookup and a Dataverse Choice column instead. The button is straightforward. What's more important is what happens afterwards.

Suppose our customer remains below target for another three days. Power Automate will continue updating the detected performance values, but the assigned owner and investigation status should remain untouched. Someone might already be reviewing the issue, even while the numbers continue to change.


<blockquote class="aia-pullquote">
  <span class="aia-pullquote__open">“</span>
  <p>That's the boundary I'd protect: automation updates what we know about the problem; people update what they're doing about it.</p>
  <span class="aia-pullquote__close">”</span>
</blockquote>


### Give the Investigation Somewhere to Live

Taking ownership is only the beginning. On the detail screen, I'd include a short investigation note, an optional next-action date, and a way to mark the work as resolved. These fields belong in Dataverse alongside the exception, so the next person doesn't have to reconstruct the discussion from emails or chat messages.

I'd also capture who last updated the investigation and when. If several people work with the same queue, that context becomes useful surprisingly quickly.

<div class="aia-investigation-v2">

  <!-- Top bar -->
  <div class="aia-investigation-v2__top">
    <span class="aia-investigation-v2__eyebrow">
      INVESTIGATION RECORD
    </span>
    <span class="aia-investigation-v2__saved">
      ✓ Saved
    </span>
  </div>

  <!-- Main content -->
  <div class="aia-investigation-v2__main">

    <!-- Customer identity and status -->
    <table class="aia-investigation-v2__heading-table">
      <tbody>
        <tr>
          <td class="aia-investigation-v2__identity-cell">
            <strong class="aia-investigation-v2__customer">
              CUST001
            </strong>
            <span class="aia-investigation-v2__subtitle">
              Customer performance investigation
            </span>
          </td>

          <td class="aia-investigation-v2__status-cell">
            <span class="aia-investigation-v2__status">
              In progress
            </span>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Investigation note -->
    <div class="aia-investigation-v2__note">
      <span class="aia-investigation-v2__label">
        INVESTIGATION NOTE
      </span>
      <p>
        Performance decline detected. Checking recent service
        activity to determine whether further action is needed.
      </p>
    </div>

    <!-- Next action and review date -->
    <table class="aia-investigation-v2__next-table">
      <tbody>
        <tr>
          <td class="aia-investigation-v2__action-cell">
            <span class="aia-investigation-v2__label">
              NEXT ACTION
            </span>
            <strong>
              Validate findings with account team
            </strong>
          </td>

          <td class="aia-investigation-v2__review-cell">
            <span class="aia-investigation-v2__label">
              NEXT REVIEW
            </span>
            <strong>
              20 Oct 2026
            </strong>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Record history -->
    <div class="aia-investigation-v2__footer">
      <span>Last updated by assigned owner</span>
      <span>17 Oct 2026</span>
    </div>

  </div>
</div>



One practical consideration is permissions. **Sharing the Power App doesn't automatically grant access to its Dataverse data.** We need to configure the relevant security roles and decide whether users can update every exception or only those belonging to their team.

At this point, we have a working queue, ownership, and a place to record progress. But we shouldn't try to reproduce the entire dashboard inside Power Apps. The Action Center should tell someone *what needs investigating*, while Power BI should still help them understand *why*.

## The Dashboard Is Still There. Just Not First.

Our Action Center now gives someone a place to pick up an exception, take ownership, and record their progress. But there's an obvious limitation: knowing that a customer's performance is 15% below target doesn't explain *why* it happened. And that's where Power BI comes back into the picture.

Rather than recreating charts and analysis inside Power Apps, I'd add an **Investigate in Power BI** button that takes the user directly to the relevant report page, with the customer already selected. The idea is to remove the unnecessary steps between spotting an exception and investigating it.

<div class="aia-urlbridge">

  <div class="aia-urlbridge__inner">

    <div class="aia-urlbridge__stage aia-urlbridge__stage--source">
      <span class="aia-urlbridge__label">SELECTED EXCEPTION</span>
      <div class="aia-urlbridge__value">
        <strong>CUST001</strong>
        <span class="aia-urlbridge__negative">−12% vs target</span>
      </div>
    </div>

    <div class="aia-urlbridge__link">
      <span>EntityID</span>
      <b>→</b>
    </div>

    <div class="aia-urlbridge__stage aia-urlbridge__stage--filter">
      <span class="aia-urlbridge__label">POWER BI URL FILTER</span>
      <div class="aia-urlbridge__value aia-urlbridge__code">
        CustomerID = <strong>CUST001</strong>
      </div>
    </div>

    <div class="aia-urlbridge__link">
      <span>Launch()</span>
      <b>→</b>
    </div>

    <div class="aia-urlbridge__stage aia-urlbridge__stage--result">
      <span class="aia-urlbridge__label">INVESTIGATION PAGE</span>
      <div class="aia-urlbridge__value">
        <strong>Power BI</strong>
        <span class="aia-urlbridge__positive">✓ Customer filtered</span>
      </div>
    </div>

  </div>

</div>


### Connecting the Investigation

Power BI supports URL filters, so we can pass the customer identifier from our selected Dataverse record into the report. In Power Apps, the button could look like this:

<div class="aia-code">

  <div class="aia-code__header">
    <div class="aia-code__meta">
      <span class="aia-code__indicator"></span>
      <span class="aia-code__language">POWER FX</span>
      <span class="aia-code__separator"></span>
      <span class="aia-code__filename">Investigate button · OnSelect</span>
    </div>

    <button
      class="aia-code__copy"
      type="button"
      onclick="copyAiaCode(this)"
      aria-label="Copy Power Fx code"
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <rect x="8" y="8" width="13" height="13" rx="2"></rect>
        <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"></path>
      </svg>
      <span class="aia-code__copy-label">Copy</span>
    </button>
  </div>

  <pre class="aia-code__pre"><code><span class="aia-code__fn">Launch</span>(
    varReportURL &amp;
    <span class="aia-code__str">"&amp;filter="</span> &amp;
    <span class="aia-code__fn">EncodeUrl</span>(
        <span class="aia-code__str">"Customer/CustomerID eq '"</span> &amp;
        varSelectedException.EntityID &amp;
        <span class="aia-code__str">"'"</span>
    )
)</code></pre>

</div>


Here, `varReportURL` contains the URL of our dedicated investigation page, including its existing query parameters, and `varSelectedException.EntityID` comes from the exception selected in Power Apps.

For this to work reliably, I'd pay attention to a few details. The table and column in the URL filter must match the Power BI model, users still need permission to access the report, and URL filters won't automatically recreate every slicer selection. If the base URL has no query parameters, use `?filter=` instead of `&filter=`.

<div class="aia-launchcheck">

  <div class="aia-launchcheck__intro">
    <span class="aia-launchcheck__eyebrow">IMPLEMENTATION CHECK</span>
    <strong>Before you launch</strong>
  </div>

  <div class="aia-launchcheck__items">

    <div class="aia-launchcheck__item">
      <span class="aia-launchcheck__tick">✓</span>
      <div class="aia-launchcheck__copy">
        <strong>Model reference</strong>
        <span>Match table &amp; column</span>
      </div>
    </div>

    <div class="aia-launchcheck__item">
      <span class="aia-launchcheck__tick">✓</span>
      <div class="aia-launchcheck__copy">
        <strong>Report access</strong>
        <span>Confirm user permissions</span>
      </div>
    </div>

    <div class="aia-launchcheck__item">
      <span class="aia-launchcheck__tick">✓</span>
      <div class="aia-launchcheck__copy">
        <strong>Filter scope</strong>
        <span>Other slicers aren't restored</span>
      </div>
    </div>

    <div class="aia-launchcheck__item">
      <span class="aia-launchcheck__tick">✓</span>
      <div class="aia-launchcheck__copy">
        <strong>URL syntax</strong>
        <span><code>?filter=</code> or <code>&amp;filter=</code></span>
      </div>
    </div>

  </div>

</div>


I'd also avoid hardcoding report links into individual buttons. As the solution grows, a small configuration table mapping exception types to investigation pages would make it easier to maintain. A performance exception could open one report page, while a compliance exception could open another.

### Don't Lose the Context Along the Way

A deep link is useful, but opening the right report isn't enough on its own. Imagine someone picks up an exception on Monday, but only investigates it on Thursday. By then, the semantic model might have refreshed several times, and the customer could be showing a different performance figure.

That's why I'd keep the **original detected values and detection date** available in the Action Center, alongside the latest values. Power BI can show the current analytical picture, while Dataverse preserves what originally triggered the investigation.

<div class="aia-history-strip">

  <div class="aia-history-strip__identity">
    <span class="aia-history-strip__eyebrow">PERFORMANCE EXCEPTION</span>
    <strong>CUST001</strong>
  </div>

  <div class="aia-history-strip__metric aia-history-strip__metric--original">
    <div class="aia-history-strip__metric-text">
      <span class="aia-history-strip__eyebrow">ORIGINAL DETECTION · MON</span>
      <strong>−15%</strong>
    </div>
    <span class="aia-history-strip__source">Preserved in Dataverse</span>
  </div>

  <div class="aia-history-strip__change">
    <span>→</span>
  </div>

  <div class="aia-history-strip__metric aia-history-strip__metric--current">
    <div class="aia-history-strip__metric-text">
      <span class="aia-history-strip__eyebrow">LATEST READING · THU</span>
      <strong>−8%</strong>
    </div>
    <span class="aia-history-strip__source">Refreshed in Power BI</span>
  </div>

  <div class="aia-history-strip__takeaway">
    <span class="aia-history-strip__takeaway-icon">↺</span>
    <span>
      Latest values can change.
      <strong>The original detection stays on record.</strong>
    </span>
  </div>

</div>


There's also a useful distinction here: the Action Center doesn't need to remember every filter someone applied during their analysis. It needs to preserve the exception, its ownership, and the outcome of the investigation. The experience we're aiming for is straightforward:

<div class="aia-investigation-loop">

  <div class="aia-investigation-loop__step">
    <span class="aia-investigation-loop__number">01</span>
    <div class="aia-investigation-loop__copy">
      <strong>Open exception</strong>
      <span>Action Center</span>
    </div>
  </div>

  <span class="aia-investigation-loop__arrow">→</span>

  <div class="aia-investigation-loop__step">
    <span class="aia-investigation-loop__number">02</span>
    <div class="aia-investigation-loop__copy">
      <strong>Investigate</strong>
      <span>Power BI</span>
    </div>
  </div>

  <span class="aia-investigation-loop__arrow">→</span>

  <div class="aia-investigation-loop__step">
    <span class="aia-investigation-loop__number">03</span>
    <div class="aia-investigation-loop__copy">
      <strong>Return</strong>
      <span>Same exception record</span>
    </div>
  </div>

  <span class="aia-investigation-loop__arrow">→</span>

  <div class="aia-investigation-loop__step">
    <span class="aia-investigation-loop__number">04</span>
    <div class="aia-investigation-loop__copy">
      <strong>Document outcome</strong>
      <span>Decision &amp; next action</span>
    </div>
  </div>

  <div class="aia-investigation-loop__principle">
    <span class="aia-investigation-loop__principle-mark">↳</span>
    <span>
      Preserve the decision,
      <strong>not the browsing history.</strong>
    </span>
  </div>

</div>


And that's an important shift. We're no longer expecting someone to browse dashboards hoping to notice something important. We're giving them a specific reason to open Power BI, with a starting point for their investigation. Next, we need to make sure this experience continues working when tomorrow's refresh identifies the same problems all over again.

## The Same Problem Shouldn't Become a New Task Tomorrow

We've connected detection, ownership, and investigation. But imagine our customer is still 15% below target tomorrow. Power Automate detects the same exception again. Does that mean someone should receive another task?

Of course not. And this is where the `ExceptionKey` we introduced earlier becomes important.

Instead of creating a new Dataverse record for every query result, Power Automate uses that key to recognise whether the exception already exists. I'd configure it as a **Dataverse alternate key**, so the database also enforces uniqueness rather than relying entirely on the flow to prevent duplicates. The flow can then handle four situations:

<div class="aia-decision-v2">

  <div class="aia-decision-v2__header">
    <strong>HOW THE SAME EXCEPTION IS HANDLED</strong>
    <span>Matched by <code>ExceptionKey</code></span>
  </div>

  <div class="aia-decision-v2__scroll">
    <table class="aia-decision-v2__table">
      <tbody>
        <tr>
          <td>
            <div class="aia-decision-v2__panel aia-decision-v2__panel--create">
              <span class="aia-decision-v2__scenario">01 / NEW EXCEPTION</span>
              <div class="aia-decision-v2__decision">
                <strong>Create</strong>
                <span>New record + team notification</span>
              </div>
            </div>
          </td>

          <td>
            <div class="aia-decision-v2__panel aia-decision-v2__panel--update">
              <span class="aia-decision-v2__scenario">02 / STILL DETECTED</span>
              <div class="aia-decision-v2__decision">
                <strong>Update</strong>
                <span>Refresh KPI values and LastDetected; retain ownership and progress</span>
              </div>
            </div>
          </td>
        </tr>

        <tr>
          <td>
            <div class="aia-decision-v2__panel aia-decision-v2__panel--inactive">
              <span class="aia-decision-v2__scenario">03 / NO LONGER DETECTED</span>
              <div class="aia-decision-v2__decision">
                <strong>Mark absent</strong>
                <span>Update detection state; keep the investigation open</span>
              </div>
            </div>
          </td>

          <td>
            <div class="aia-decision-v2__panel aia-decision-v2__panel--return">
              <span class="aia-decision-v2__scenario">04 / RETURNS AFTER RESOLUTION</span>
              <div class="aia-decision-v2__decision">
                <strong>Reopen / New</strong>
                <span>Reopen the record or create a new occurrence under agreed rules</span>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</div>


There's an important distinction here: **whether the problem still exists in the data and whether the work has been resolved are two different things.**

I'd represent them separately. For example, `DetectionState` could tell us whether Power BI still detects the exception, while `Status` tracks whether someone has acknowledged, investigated, or resolved it. That prevents a refreshed KPI from silently closing work that still needs attention.

### Don't Let a Failed Refresh Close Everything

There's one scenario I'd be particularly careful with. Suppose our query normally returns 50 exceptions, but tomorrow it returns none. It would be tempting to mark all 50 as cleared. But what if the semantic model hasn't refreshed, the query returned incomplete results, or the flow failed halfway through?

Before changing the detection state of exceptions that weren't returned, I'd verify that the refresh and query completed successfully and that the results represent the full intended scope. Only then should the flow compare the current results against previously detected exceptions.

For larger batches, I'd also track a processing run identifier. That makes it easier to distinguish a completed detection cycle from one that stopped halfway through.

And I'd keep notifications selective. **A new exception deserves attention, but an unchanged one doesn't need another daily email.** Reminders can be introduced for overdue or worsening issues, rather than simply because the same condition appeared again.

This is what makes the Action Center dependable across reporting cycles. The data can change every day without resetting the work people have already started.

## Did We Build Something Worth Using?

At this point, we have a working Action Center. Power BI identifies exceptions, Power Automate keeps the records updated, and Power Apps gives people somewhere to investigate and manage them.

But before rolling this out more widely, I'd want to know whether it's actually improving how the team works. I'd start with a small pilot, using one exception type and a handful of users. Not to see whether the application works technically, but to understand what changes when people start using it.

<div class="aia-scorecard">
  <div class="aia-scorecard__item">
    <span class="aia-scorecard__icon aia-scorecard__icon--green">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <circle cx="12" cy="12" r="5"/>
        <circle cx="12" cy="12" r="1"/>
      </svg>
    </span>
    <div class="aia-scorecard__copy">
      <span class="aia-scorecard__label">Exception quality</span>
      <strong class="aia-scorecard__question">Worth acting on?</strong>
      <span class="aia-scorecard__detail">Signal relevance</span>
    </div>
  </div>

  <div class="aia-scorecard__item">
    <span class="aia-scorecard__icon aia-scorecard__icon--blue">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <path d="M12 7v5l3.5 2"/>
      </svg>
    </span>
    <div class="aia-scorecard__copy">
      <span class="aia-scorecard__label">Time to ownership</span>
      <strong class="aia-scorecard__question">Picked up sooner?</strong>
      <span class="aia-scorecard__detail">Response speed</span>
    </div>
  </div>

  <div class="aia-scorecard__item">
    <span class="aia-scorecard__icon aia-scorecard__icon--gold">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M2 12s3.6-6 10-6 10 6 10 6-3.6 6-10 6S2 12 2 12z"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    </span>
    <div class="aia-scorecard__copy">
      <span class="aia-scorecard__label">Resolution visibility</span>
      <strong class="aia-scorecard__question">Where is work stuck?</strong>
      <span class="aia-scorecard__detail">Workflow clarity</span>
    </div>
  </div>

  <div class="aia-scorecard__item">
    <span class="aia-scorecard__icon aia-scorecard__icon--orange">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
        <path d="M4 7h16M4 12h10M4 17h6"/>
        <path d="m17 15 3 3-3 3"/>
      </svg>
    </span>
    <div class="aia-scorecard__copy">
      <span class="aia-scorecard__label">Manual effort</span>
      <strong class="aia-scorecard__question">Less chasing?</strong>
      <span class="aia-scorecard__detail">Time recovered</span>
    </div>
  </div>
</div>


I'd pay particular attention to the exceptions that nobody picks up. Are they being sent to the wrong team? Is the threshold too sensitive? Or is the issue simply not important enough to justify an action? Those are useful findings, because they tell us what needs to change in the detection rules or the workflow.

### Does It Really Need Its Own Application?

There's another decision worth making before scaling the solution: whether Power Apps and Dataverse are the right level of investment.

<div class="aia-fit3">

  <div class="aia-fit3__header">
    <strong>MATCH THE TOOL TO THE WORKFLOW</strong>
    <span>More workflow structure &rarr;</span>
  </div>

  <div class="aia-fit3__scroll">
    <table class="aia-fit3__table">
      <tbody>
        <tr>

          <td class="aia-fit3__option">
            <table class="aia-fit3__inner">
              <tbody>
                <tr>
                  <td class="aia-fit3__icon-col">
                    <span class="aia-fit3__icon aia-fit3__icon--green">
                      <svg viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="1.8"
                           stroke-linecap="round" stroke-linejoin="round">
                        <rect x="4" y="4" width="16" height="16" rx="3"/>
                        <path d="m7.5 9 1.5 1.5 2-2M13 9.5h4"/>
                        <path d="m7.5 15 1.5 1.5 2-2M13 15.5h4"/>
                      </svg>
                    </span>
                  </td>
                  <td class="aia-fit3__text-col">
                    <strong class="aia-fit3__name">Microsoft Lists</strong>
                    <span class="aia-fit3__sub">+ Power Automate</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="aia-fit3__description">
                    Shared queue, basic ownership, status updates and notifications.
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          <td class="aia-fit3__option">
            <table class="aia-fit3__inner">
              <tbody>
                <tr>
                  <td class="aia-fit3__icon-col">
                    <span class="aia-fit3__icon aia-fit3__icon--blue">
                      <svg viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="1.8"
                           stroke-linecap="round" stroke-linejoin="round">
                        <rect x="3" y="4" width="18" height="16" rx="3"/>
                        <path d="M3 9h18M9 9v11M13 13h4M13 16h3"/>
                      </svg>
                    </span>
                  </td>
                  <td class="aia-fit3__text-col">
                    <strong class="aia-fit3__name">Power Apps + Lists</strong>
                    <span class="aia-fit3__sub">SharePoint-backed</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="aia-fit3__description">
                    Custom interface for relatively simple data and workflow needs.
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

          <td class="aia-fit3__option">
            <table class="aia-fit3__inner">
              <tbody>
                <tr>
                  <td class="aia-fit3__icon-col">
                    <span class="aia-fit3__icon aia-fit3__icon--gold">
                      <svg viewBox="0 0 24 24" fill="none"
                           stroke="currentColor" stroke-width="1.8"
                           stroke-linecap="round" stroke-linejoin="round">
                        <ellipse cx="12" cy="5.5" rx="8" ry="3"/>
                        <path d="M4 5.5v13c0 1.7 3.6 3 8 3s8-1.3 8-3v-13"/>
                        <path d="M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3"/>
                      </svg>
                    </span>
                  </td>
                  <td class="aia-fit3__text-col">
                    <strong class="aia-fit3__name">Power Apps + Dataverse</strong>
                    <span class="aia-fit3__sub">Structured workflow</span>
                  </td>
                </tr>
                <tr>
                  <td colspan="2" class="aia-fit3__description">
                    Multi-team workflows, controlled access and investigation history.
                  </td>
                </tr>
              </tbody>
            </table>
          </td>

        </tr>
      </tbody>
    </table>
  </div>

  <table class="aia-fit3__reuse">
    <tbody>
      <tr>
        <td class="aia-fit3__reuse-icon">
          <svg viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round">
            <circle cx="6" cy="6" r="2"/>
            <circle cx="18" cy="18" r="2"/>
            <circle cx="6" cy="18" r="2"/>
            <path d="M6 8v8M8 6h5a5 5 0 0 1 5 5v5"/>
          </svg>
        </td>
        <td class="aia-fit3__reuse-copy">
          <strong>Already have a ticketing system?</strong>
          <span>Route exceptions into the existing workflow instead of building another.</span>
        </td>
        <td class="aia-fit3__reuse-end">
          <span>REUSE FIRST</span>
        </td>
      </tr>
    </tbody>
  </table>

</div>


I'd make the decision based on what the pilot reveals, not how sophisticated the solution looks. If people only need a weekly list of five issues, an Action Center might be unnecessary. If exceptions regularly move between teams, remain unresolved across reporting cycles, or require a reliable investigation history, the additional structure starts to earn its place.

<div class="aia-final-thought">
  <p>
    The question isn't how many exceptions we detected.
    It's how many important issues actually moved forward
    because someone had a clearer way to act.
  </p>
</div>

---

## Closing Thoughts

I like the idea of an Action Center, but I wouldn't rush to build one just because the technology makes it possible. In plenty of organisations, people already have too many applications to check, and adding another one might create more work than it removes.

Where I genuinely see value is when problems keep getting noticed but nobody has a clear view of what's happening afterwards. Even then, I'd first look at whether the workflow could fit into something people already use. Sometimes a well-designed notification or a simple shared list might do more good than an entire application.

And I think that's something we should challenge ourselves on more often in BI. We spend so much time thinking about what else we can build that we don't always question whether we're making someone's job simpler. **Because the goal was never to build another place to work. It was to make sure the work actually gets done.**
