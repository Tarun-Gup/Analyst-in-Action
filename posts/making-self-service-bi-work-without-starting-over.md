---
title: "Making Self-Service BI Work Without Starting Over"
layout: post.njk
date: 2026-09-20
description: "You've spent years building your Power BI environment. Now the business wants more self-service. Where do you actually start without undoing what already works?"
featuredImage: /assets/images/making-self-service-bi-work-without-starting-over/cover.png
tags:
  - posts
  - Power BI
  - Architecture
  - Best Practices
---
Self-service BI sounds straightforward until you look at the Power BI report stack you've built over the years. Multiple reports, overlapping KPIs, different semantic models, and business users still coming back for new variations. Somehow, every new analytical need seems to lead to another dashboard.

It's like a traffic jam where everyone is being sent down the same road. Instead of building more roads, perhaps we need to understand where people want to go and give them different routes. That's how I've started thinking about self-service BI.

In my recent BI Bits edition,[*The Definition of Self-Service BI Needs an Update*](https://www.linkedin.com/pulse/definition-self-service-bi-needs-update-tarun-gupta-zsxae), I explored why giving users more ways to build reports isn't enough. But what does that mean for an established BI environment? If I were to rethink self-service across an existing Power BI report stack today, what would I actually do differently?

<div class="blog-toc">

  <h3>Inside this article</h3>

  <ul>
    <li>How did we end up with so many reports?</li>
    <li>Deciding what to keep, redirect, or enable</li>
    <li>3 analytical products and 3 traps to avoid</li>
    <li>Who owns what in a self-service environment?</li>
    <li>How do we stop the report stack from growing back?</li>
    <li>How do we know self-service is actually working?</li>
  </ul>

</div>

---

## Start With the Portfolio, Not the Technology

Most reporting portfolios don't become difficult to maintain because someone made one big architectural mistake. They grow gradually.

A regional variation becomes a separate report, a new requirement introduces another KPI calculation, and a quick solution built for one team eventually becomes something the business depends on. Each decision may have made sense at the time, but years later, we're maintaining the combined result.

That's why I'd start by understanding the existing report stack before deciding what self-service capabilities to introduce. Power BI Admin tools and usage data can help map reports, semantic models, dependencies, and consumption patterns.

But I'd also want to understand what users do after opening a report. Are they making decisions from it, exporting data to finish their analysis, or requesting changes because the existing solution doesn't give them enough flexibility?

<div class="maintenance-principle">

  <div class="maintenance-principle__context">

    <span class="maintenance-principle__label">
      WHAT USAGE TELLS US
    </span>

    <p>
      Usage metrics tell us what happens inside Power BI.
    </p>

  </div>

  <div class="maintenance-principle__shift">

    <span class="maintenance-principle__quote" aria-hidden="true">“</span>

    <div class="maintenance-principle__content">

      <span class="maintenance-principle__label">
        WHAT WE NEED TO UNDERSTAND
      </span>

      <p>
        Understanding self-service starts with what users do
        after opening the report.
      </p>

    </div>

  </div>

</div>

I'd then organise the portfolio around **analytical products**, connecting related reports and semantic models to the business needs they serve. A shared product registry and asset inventory would give us a starting point for identifying overlap, ownership gaps, and opportunities to reuse what already exists.

**The point isn't to document every asset for the sake of it. It's to understand where our existing BI investment can support more business needs without continuously expanding the report stack.**

## Decide What Needs to Change, Not Just What Needs to Stay

The tempting next step is to look for duplicate reports, check usage numbers, and start building a list of what to consolidate or retire. I probably would have approached it that way earlier in my career. 

But I've learned that two reports showing similar KPIs aren't necessarily solving the same business problem, and a report with limited usage isn't automatically one the business can live without. I'd approach this differently now. For each analytical product, I'd sit down with the business owner and understand why its reports exist in their current form. 

<div class="investigation-brief">

  <div class="investigation-brief__header">

    <div class="investigation-brief__eyebrow">
      <span class="investigation-brief__line"></span>
      THE INVESTIGATION
    </div>

    <div class="investigation-brief__title">
      Three questions worth asking
    </div>

  </div>

  <div class="investigation-brief__questions">

    <div class="investigation-brief__question investigation-brief__question--one">

      <span class="investigation-brief__number">01</span>

      <div class="investigation-brief__content">
        <span class="investigation-brief__category">REGIONAL NEEDS</span>
        <p>Why was a separate regional version needed?</p>
      </div>

    </div>

    <div class="investigation-brief__question investigation-brief__question--two">

      <span class="investigation-brief__number">02</span>

      <div class="investigation-brief__content">
        <span class="investigation-brief__category">ANALYTICAL FREEDOM</span>
        <p>Why are users exporting data instead of working within the report?</p>
      </div>

    </div>

    <div class="investigation-brief__question investigation-brief__question--three">

      <span class="investigation-brief__number">03</span>

      <div class="investigation-brief__content">
        <span class="investigation-brief__category">RECURRING REQUESTS</span>
        <p>Why does the same team keep requesting small variations?</p>
      </div>

    </div>

  </div>

  <div class="investigation-brief__footer">
    <span>THE OBJECTIVE</span>
    <strong>Understand the need before changing the solution.</strong>
  </div>

</div>

Those conversations often reveal that **the problem isn't the number of reports, but the way we're trying to meet different needs through reports alone.**

This is where I'd apply the **KEEP / REDIRECT / ENABLE** approach from BI Bits. Some reports should stay, some requirements could be redirected towards controlled exports or alerts, and others might be better served by enabling users to explore approved semantic models themselves. 

<div class="portfolio-decision-card">

  <div class="portfolio-decision-label">
    FROM ASSESSMENT TO DECISION
  </div>

  <div class="portfolio-decision-heading">
    <span>Keep.</span>
    <span>Redirect.</span>
    <span>Enable.</span>
  </div>

  <p>
    Not every report needs to disappear.
    Not every request needs another report.
    And not every analytical need should depend on the BI team.
  </p>

</div>

## From Portfolio Assessment to Implementation

This is where I'd avoid turning the assessment into a long list of reports to rebuild or retire. I'd select a small implementation wave across a few analytical products, each with a different problem to solve. The idea is to make meaningful changes within the existing BI delivery cycle, not launch a separate transformation programme that competes with everything else the team is already maintaining.

<div class="implementation-overview">

  <div class="implementation-overview__item">
    <span class="implementation-overview__number">PRODUCT ABC</span>
    <h3>Consolidate</h3>
    <p>3 regional reports. Similar KPIs. Different business needs?</p>
  </div>

  <div class="implementation-overview__item">
    <span class="implementation-overview__number">PRODUCT DEF</span>
    <h3>Enable</h3>
    <p>Regular Excel exports. A need for more flexible analysis.</p>
  </div>

  <div class="implementation-overview__item">
    <span class="implementation-overview__number">PRODUCT GHI</span>
    <h3>Automate</h3>
    <p>Daily dashboard checks. An opportunity to deliver exceptions.</p>
  </div>

</div>

For **Product ABC**, where three regional reports share similar KPIs, consolidation might look like the obvious next step. But I've learned not to confuse similar-looking reports with genuinely duplicated logic. I'd compare business definitions, semantic models, RLS, and downstream dependencies before deciding what can be brought together. 

<div class="implementation-trap implementation-trap--abc">
  <div class="implementation-trap__header">
    <span class="implementation-trap__badge">01</span>
    <span class="implementation-trap__label">THE IMPLEMENTATION TRAP</span>
  </div>

  <p class="implementation-trap__statement">
    Consolidating reports before understanding why they became separate in the first place.
  </p>

  <p class="implementation-trap__consequence">
    We could end up with one report that's harder to maintain and still doesn't meet everyone's needs.
  </p>
</div>

For **Product DEF**, where users regularly export data to Excel, I'd first understand what happens after the export. If they need filtered records, controlled extraction might be enough. If they're building recurring calculations and views, access to an approved semantic model could be more useful.

<div class="implementation-trap implementation-trap--def">
  <div class="implementation-trap__header">
    <span class="implementation-trap__badge">02</span>
    <span class="implementation-trap__label">THE IMPLEMENTATION TRAP</span>
  </div>

  <p class="implementation-trap__statement">
    Treating Build permissions as the self-service solution.
  </p>

  <p class="implementation-trap__consequence">
    Once users build on a shared model, we also need clear ownership, approved KPIs, access rules, and expectations around refreshes, changes, and support. Otherwise, we're simply moving the maintenance problem outside the BI team's immediate visibility.
  </p>
</div>

For **Product GHI**, where users open a dashboard every morning to check exceptions, I'd test whether alerts could remove that routine. But I'd run the new experience alongside the report and validate it through real business cycles. 

<div class="implementation-trap implementation-trap--ghi">
  <div class="implementation-trap__header">
    <span class="implementation-trap__badge">03</span>
    <span class="implementation-trap__label">THE IMPLEMENTATION TRAP</span>
  </div>

  <p class="implementation-trap__statement">
    Assuming that automating the notification means we've improved the process.
  </p>

  <p class="implementation-trap__consequence">
    If alerts miss important exceptions, reach the wrong people, or leave users without a way to investigate, we've made the experience less reliable rather than more useful.
  </p>
</div>

I'd manage all three changes through the normal Jira or Azure DevOps backlog and release process, with an agreed business outcome, affected dependencies, and a validation point before retiring or replacing anything. The analytical product inventory should be updated as part of that delivery process, not through a separate documentation exercise.

<div class="implementation-takeaway">

  <div class="implementation-takeaway__eyebrow">
    <span class="implementation-takeaway__line"></span>
    <span>THE FIRST-WAVE LESSON</span>
  </div>

  <p>
    Don't just prove that three solutions work.
    Learn what it takes to <em>develop</em>,
    <em>validate</em>, and <em>support</em> them
    before scaling across the portfolio
  </p>

  <span class="implementation-takeaway__footer">
    3 PRODUCTS. ONE REPEATABLE APPROACH
  </span>

</div>

## What Actually Changes for the Business and the BI Team?

One thing I've learned is that giving business users more flexibility doesn't automatically reduce the BI team's workload. If every business-created report eventually becomes something developers are expected to troubleshoot and maintain, we've simply added another reporting layer. 

<div class="ownership-insight">
  <span class="ownership-insight__quote" aria-hidden="true">“</span>

  <p>
    Self-service only changes the way we work when
    <strong>both sides understand what they can expect from each other.</strong>
  </p>

  <span class="ownership-insight__accent" aria-hidden="true"></span>
</div>

I'd make those responsibilities clear as part of the rollout, not leave users to discover them when something breaks:

<div class="ownership-map">

  <div class="ownership-map__row ownership-map__row--business">
    <div class="ownership-map__role">
      <span class="ownership-map__number">01</span>
      <div>
        <h3>Business users</h3>
        <span class="ownership-map__hint">Local analysis</span>
      </div>
    </div>

    <p>
      Explore approved data, create team-specific analysis,
      and maintain their local reporting needs
    </p>
  </div>

  <div class="ownership-map__row ownership-map__row--owner">
    <div class="ownership-map__role">
      <span class="ownership-map__number">02</span>
      <div>
        <h3>Analytical product owners</h3>
        <span class="ownership-map__hint">Shared requirements</span>
      </div>
    </div>

    <p>
      Prioritise shared requirements and decide when local analysis
      should become an officially supported capability
    </p>
  </div>

  <div class="ownership-map__row ownership-map__row--developer">
    <div class="ownership-map__role">
      <span class="ownership-map__number">03</span>
      <div>
        <h3>BI developers</h3>
        <span class="ownership-map__hint">Supported solutions</span>
      </div>
    </div>

    <p>
      Maintain shared KPIs, semantic models, security,
      performance, and centrally supported solutions
    </p>
  </div>

</div>

But documenting responsibilities isn't enough. I'd introduce the new approach through short, product-specific sessions with business users: show them what they can already do independently, where to find approved data, how to request access, and when a requirement should come back to the product owner. I'd also give them a clear route to request support or propose that a useful local solution becomes part of the official product.

That last point matters. A report created by one sales team might eventually be used across several regions. Once people start depending on it, ownership and support expectations need to change. 

<div class="ownership-transition">

  <div class="ownership-transition__stage">
    <span class="ownership-transition__step">01</span>
    <div>
      <span class="ownership-transition__title">Local team analysis</span>
      <span class="ownership-transition__detail">Created for a specific need</span>
    </div>
  </div>

  <span class="ownership-transition__arrow" aria-hidden="true">→</span>

  <div class="ownership-transition__stage">
    <span class="ownership-transition__step">02</span>
    <div>
      <span class="ownership-transition__title">Wider business adoption</span>
      <span class="ownership-transition__detail">Used beyond the original team</span>
    </div>
  </div>

  <span class="ownership-transition__arrow" aria-hidden="true">→</span>

  <div class="ownership-transition__stage ownership-transition__stage--final">
    <span class="ownership-transition__step">03</span>
    <div>
      <span class="ownership-transition__title">Officially supported capability</span>
      <span class="ownership-transition__detail">Ownership and support agreed</span>
    </div>
  </div>

</div>

**I'd rather make that transition deliberate than wait until the original creator leaves and everyone assumes the BI team owns the report.** For me, the shift is about giving the business more room to work independently while making the BI team's responsibilities clearer and not simply transferring report development from one group to another.

## Make Self-Service Part of the Normal BI Workflow

The real test comes after the first implementation wave, when business requests start coming in again. It's easy to agree on a better approach during a portfolio review and then fall back into the familiar routine: a user requests a dashboard, we discuss the requirements, and development begins. 

<div class="ownership-insight">
  <span class="ownership-insight__quote" aria-hidden="true">“</span>

  <p>
    Unless we change that routine,
    <strong>the report stack will eventually grow back into the same problem.</strong>
  </p>

  <span class="ownership-insight__accent" aria-hidden="true"></span>
</div>

I'd introduce a few checks into the existing Jira or Azure DevOps intake process. Before accepting a new development request, the analytical product owner and BI team should assess how the business need can be supported using what we've already built.

<div class="intake-framework">

  <div class="intake-framework__header">
    <span class="intake-framework__eyebrow">REQUEST INTAKE</span>
    <h3>Before We Build</h3>
    <p>5 checks to make before adding another reporting asset.</p>
  </div>

  <div class="intake-framework__labels" aria-hidden="true">
    <span>WHAT WE'D CHECK</span>
    <span>WHAT WE'D DO</span>
  </div>

  <div class="intake-framework__row">
    <div class="intake-framework__question">
      <span class="intake-framework__number">01</span>
      <p>Is the requirement already covered by an existing solution?</p>
    </div>
    <div class="intake-framework__answer">
      <span class="intake-framework__action">REUSE</span>
      <p>Reuse it or address what's preventing the user from using it.</p>
    </div>
  </div>

  <div class="intake-framework__row">
    <div class="intake-framework__question">
      <span class="intake-framework__number">02</span>
      <p>Does the user need flexibility beyond the current report?</p>
    </div>
    <div class="intake-framework__answer">
      <span class="intake-framework__action">ENABLE</span>
      <p>Assess controlled exports or self-service through an approved semantic model.</p>
    </div>
  </div>

  <div class="intake-framework__row">
    <div class="intake-framework__question">
      <span class="intake-framework__number">03</span>
      <p>Does the requirement introduce shared KPIs or business logic?</p>
    </div>
    <div class="intake-framework__answer">
      <span class="intake-framework__action">EXTEND</span>
      <p>Extend the existing analytical product rather than recreate the logic elsewhere.</p>
    </div>
  </div>

  <div class="intake-framework__row">
    <div class="intake-framework__question">
      <span class="intake-framework__number">04</span>
      <p>Is a new reporting experience genuinely needed?</p>
    </div>
    <div class="intake-framework__answer">
      <span class="intake-framework__action">BUILD</span>
      <p>Build it within the relevant analytical product.</p>
    </div>
  </div>

  <div class="intake-framework__row intake-framework__row--new">
    <div class="intake-framework__question">
      <span class="intake-framework__number">05</span>
      <p>Does it represent a distinct analytical responsibility?</p>
    </div>
    <div class="intake-framework__answer">
      <span class="intake-framework__action">ASSESS</span>
      <p>Assess whether a new analytical product and owner are justified.</p>
    </div>
  </div>

</div>

I wouldn't expect business users to navigate the report portfolio or understand which semantic model supports which dashboard. 

<div class="request-translation">

  <div class="request-translation__business">
    <span class="request-translation__label">THE BUSINESS BRINGS</span>
    <p>
      The problem, the intended users, and what they need to do with the information.
    </p>
  </div>

  <div class="request-translation__arrow" aria-hidden="true">→</div>

  <div class="request-translation__bi">
    <span class="request-translation__label">THE BI TEAM DETERMINES</span>
    <p>
      The right analytical solution, rather than simply delivering the format
      that was requested.
    </p>
  </div>

</div>

Any new assets should then enter the product inventory through the normal development and release process. For me, this is where self-service starts becoming sustainable. Not because we've introduced another approval process, but because we're making better decisions about what deserves development effort before adding something new to maintain.

## How Would I Know It's Actually Working?

A successful rollout doesn't necessarily mean successful self-service. You can retire reports, publish reusable semantic models, and enable more users without making much difference to how the business operates. 

<div class="ownership-insight">
  <span class="ownership-insight__quote" aria-hidden="true">“</span>

  <p>
    The real test is whether the same work now takes
    <strong>less effort from both the business and the BI team.</strong>
  </p>

  <span class="ownership-insight__accent" aria-hidden="true"></span>
</div>

Start with a baseline before implementation, then measure each analytical product against the problem it was meant to solve:

<div class="measurement-framework">

  <div class="measurement-framework__header">
    <span class="measurement-framework__eyebrow">MEASURING THE OUTCOME</span>
    <h3>3 Products. 3 Different Measures of Success.</h3>
  </div>

  <div class="measurement-framework__products">

    <!-- ABC -->

    <div class="measurement-framework__item measurement-framework__item--abc">

      <div class="measurement-framework__product">
        <span class="measurement-framework__code">ABC</span>
        <h4>Report consolidation</h4>
      </div>

      <div class="measurement-framework__metric">
        <span class="measurement-framework__label">WHAT TO MEASURE</span>
        <p>Duplicated KPI logic, reconciliation issues, and maintenance hours</p>
      </div>

      <div class="measurement-framework__outcome">
        <span class="measurement-framework__label">WHAT SUCCESS LOOKS LIKE</span>
        <p>Less effort keeping regional solutions aligned, without losing necessary functionality.</p>
      </div>

    </div>

    <!-- DEF -->

    <div class="measurement-framework__item measurement-framework__item--def">

      <div class="measurement-framework__product">
        <span class="measurement-framework__code">DEF</span>
        <h4>Self-service analysis</h4>
      </div>

      <div class="measurement-framework__metric">
        <span class="measurement-framework__label">WHAT TO MEASURE</span>
        <p>Repeat export requests, manual extracts, and recurring report enhancements</p>
      </div>

      <div class="measurement-framework__outcome">
        <span class="measurement-framework__label">WHAT SUCCESS LOOKS LIKE</span>
        <p>Users complete their analysis without repeatedly returning to BI for small changes.</p>
      </div>

    </div>

    <!-- GHI -->

    <div class="measurement-framework__item measurement-framework__item--ghi">

      <div class="measurement-framework__product">
        <span class="measurement-framework__code">GHI</span>
        <h4>Alerts and workflows</h4>
      </div>

      <div class="measurement-framework__metric">
        <span class="measurement-framework__label">WHAT TO MEASURE</span>
        <p>Routine report checks, missed exceptions, and actions taken</p>
      </div>

      <div class="measurement-framework__outcome">
        <span class="measurement-framework__label">WHAT SUCCESS LOOKS LIKE</span>
        <p>Less time spent looking for problems, without missing the ones that matter.</p>
      </div>

    </div>

  </div>

</div>

Review these outcomes after a few real business cycles, not immediately after deployment. A drop in report views might signal poor adoption for one product and a successful shift towards alerts for another. That's why portfolio-wide usage figures alone can be misleading: **the same metric can tell a completely different story depending on what the analytical product was designed to achieve.**

<div class="implementation-takeaway">

  <div class="implementation-takeaway__eyebrow">
    <span class="implementation-takeaway__line"></span>
    <span>THE MEASURE OF SUCCESS</span>
  </div>

  <p>
    Don't measure self-service by how much you've enabled.
    Measure how much <em>unnecessary work</em>
    you've eliminated.
  </p>

  <span class="implementation-takeaway__footer">
    LESS DEPENDENCY. LESS REWORK. MORE VALUE.
  </span>

</div>

---
## Closing Thoughts

Having worked on enterprise BI environments for years, I've seen how easily a reporting portfolio grows while nobody really questions whether the way we're delivering analytics still makes sense. 

We keep improving dashboards, adding requirements, and building new solutions, but rarely find the time to revisit what we've already created. Eventually, maintaining that portfolio starts taking time away from improving it.

For me, being an **Analyst in Action** is about recognising when the next step isn't to build something new, but to challenge how we're solving the problem in the first place. Earlier in my career, another dashboard request would have sent me straight into Power BI. 

Today, I'm more interested in whether we can meet that need through something we've already built. **Because sometimes the most valuable BI work is making sure the business doesn't need to come back to us for the same thing again.**