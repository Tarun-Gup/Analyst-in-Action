---
title: "A Better KPI Isn't Always the Right Move"
layout: post.njk
date: 2026-08-08
description: "What happens when a trusted KPI needs to change? Explore how to challenge the request, understand the blast radius, and evolve business logic without breaking trust."
featuredImage: /assets/images/a-better-kpi-isnt-always-the-right-move/cover.png
tags:
  - posts
  - Power BI
  - Architecture
  - Best Practices
---

A better KPI isn't always a better decision. That sounds strange until you've tried changing something the business has relied on for years. 

It's a bit like renovating a house you've lived in for a long time. You can see exactly what you'd design differently today, but you're no longer working with an empty space. Other things have been built around it, people have adapted to it, and fixing one imperfection can easily create another somewhere else.

In the last [BI Bits edition](https://www.linkedin.com/pulse/kpi-longer-just-measure-tarun-gupta-l5pse), I wrote about the point where a KPI stops behaving like another measure and becomes part of how the business understands performance. This article starts where that one ended: what happens when someone now wants to change it? 

We'll look at how I investigate whether the KPI is actually the problem, how mature BI teams can test the impact before touching production, the options beyond simply replacing a measure, and where automation and AI are starting to make that process safer. Because once a KPI has reached that level of trust, **“Can we make it better?” is probably the least interesting question.**

<div class="blog-toc">

  <h3>Inside this article</h3>

  <ul>
    <li>Understanding the real impact of changing a trusted KPI</li>
    <li>Why a KPI change request may not be a KPI problem</li>
    <li>What to consider before adopting a new definition</li>
    <li>How mature BI teams test and release KPI changes safely</li>
    <li>Why preserving the reasoning matters as much as preserving the logic</li>
  </ul>

</div>

---
## Start with Blast Radius

When a mature KPI comes up for change, the first thing I want to understand is its blast radius.

I usually start from the semantic model and work outward. Is the measure referenced by other measures or calculation groups? Are multiple reports connected to the model? Has the same business logic been recreated somewhere else? Then I look beyond Power BI itself. Is the number feeding an export, a downstream dataset, a target-setting process, or something used outside the reporting environment altogether?

This is where lineage views, model dependencies, Tabular Editor, TMDL, or even a good repository search can reveal things that aren't obvious from the report where the request originated. I've had seemingly local changes become much larger once we discovered how many other objects were quietly depending on the same logic.

![](/assets/images/a-better-kpi-isnt-always-the-right-move/step-1.png)
That investigation changes the conversation. A KPI with a small footprint can often evolve without much ceremony. But once the blast radius crosses models, reports, teams, or business processes, I don't want to start by designing the new calculation. I want to know exactly what I'm putting at risk by changing the old one.

<div class="beyond-powerbi-card">

    <div class="beyond-powerbi-icon">
        🔭
    </div>

    <div class="beyond-powerbi-label">
        THINK BEYOND POWER BI
    </div>

    <h3>
        Not every dependency appears in lineage.
    </h3>

    <p>
        A KPI may also live in targets, planning, reviews, or processes outside Power BI.
    </p>

    <div class="beyond-powerbi-tags">
        <span>Dependencies</span>
        <span>Business Impact</span>
        <span>Ownership</span>
    </div>

</div>

## Before You Change the KPI, Challenge the Request

One thing I've learned to be suspicious of is a KPI request that arrives with the solution already attached:
<div class="kpi-request-list">

    <div class="kpi-request">
        <span class="kpi-request__icon">💬</span>
        <span class="kpi-request__quote">“Exclude these cases.”</span>
    </div>

    <div class="kpi-request">
        <span class="kpi-request__icon">💬</span>
        <span class="kpi-request__quote">“Calculate this market differently.”</span>
    </div>

    <div class="kpi-request">
        <span class="kpi-request__icon">💬</span>
        <span class="kpi-request__quote">“Add another condition to the measure.”</span>
    </div>

</div>
Before changing anything, I try to reproduce the problem using the existing definition. I'll isolate the records behind the unexpected result, trace them back through the semantic model and, where necessary, into the source data. Quite often that investigation takes the conversation somewhere completely different.
<div class="root-cause-card">

    <div class="root-cause-icon">
        🔎
    </div>

    <div class="root-cause-label">
        ROOT CAUSE CHECK
    </div>

    <h3>
        Is the KPI actually the problem?
    </h3>

    <p>
        Before changing the definition, rule out data quality, model behaviour, process differences, and simple misinterpretation.
    </p>

    <div class="root-cause-tags">
        <span>Data</span>
        <span>Model</span>
        <span>Process</span>
        <span>Definition</span>
    </div>

</div>
A relationship is behaving differently than expected. A source field isn't populated consistently. One region is following a different process. Or the KPI is working exactly as designed, but the business is now asking a different question from the one it was originally built to answer.

That distinction matters. If the data is wrong, fix the data. If the process is inconsistent, changing DAX only hides the inconsistency. If the business question has genuinely changed, then we have a KPI-definition discussion and the business owner needs to be part of it.

I've gone into these investigations expecting to rewrite a measure and ended up changing nothing in Power BI at all. That's why I now treat *“change the KPI”* as the starting hypothesis, not the requirement.

## A New Definition Needs More Than Approval

Once there's a genuine case for changing the KPI, agreeing on the new definition is only half the decision. The business also needs to understand what adopting it will actually change.

Putting the current and proposed definitions side by side usually makes that visible very quickly. The headline KPI might move by only 1%, but break that difference across markets, products, entities, or historical periods and a very different picture can emerge. One market might move by 15%. A team might suddenly cross its target. A trend that had been improving for months might flatten under the new definition.

![](/assets/images/a-better-kpi-isnt-always-the-right-move/step-2.png)
That's where the conversation becomes more useful. The question is no longer simply *“Is the new definition better?”* It becomes *“What do we do with the difference?”* Do we restate history so everything follows the new logic? Introduce an effective date and accept a break in the trend? Run both versions temporarily while the business adjusts? Version the KPI? Or, if the new definition is really answering a different business question, preserve the existing KPI and introduce another one?

Those choices are part of the KPI change itself. Approving the new business logic without agreeing on how it enters reporting can easily leave different teams using different definitions a few months later.

**A KPI change isn't ready because everyone agrees with the new formula. It's ready when everyone understands what changes with it.**

## A KPI Change Should Behave Like a Release

The bigger the footprint of a KPI, the less sense it makes to treat its change like another measure update. At some point, it starts looking much closer to a software release.

That changes what good validation looks like. Instead of changing the measure and checking a few report visuals, the current and proposed definitions can be compared across different periods and business scenarios. The surrounding model can be inspected for dependencies, the change can be versioned, known results can be tested again, and only then does it need to move towards production.

<div class="kpi-release-strip">

    <div class="kpi-release-strip__item">
        <span class="kpi-release-strip__number">01</span>
        <strong>Compare</strong>
        <small>Test current vs proposed logic</small>
        <em>DAX Query View · DAX Studio</em>
    </div>

    <div class="kpi-release-strip__item">
        <span class="kpi-release-strip__number">02</span>
        <strong>Inspect</strong>
        <small>Trace dependencies and model impact</small>
        <em>TMDL · Lineage</em>
    </div>

    <div class="kpi-release-strip__item">
        <span class="kpi-release-strip__number">03</span>
        <strong>Version</strong>
        <small>Preserve the definition and its history</small>
        <em>PBIP · Git</em>
    </div>

    <div class="kpi-release-strip__item">
        <span class="kpi-release-strip__number">04</span>
        <strong>Validate</strong>
        <small>Recheck known results and edge cases</small>
        <em>Regression Tests</em>
    </div>

    <div class="kpi-release-strip__item">
        <span class="kpi-release-strip__number">05</span>
        <strong>Promote</strong>
        <small>Move the change through controlled environments</small>
        <em>DEV · TEST · PRD</em>
    </div>

</div>

The tools behind that workflow are becoming much more accessible in Power BI. DAX Query View or DAX Studio can help compare definitions at scale. Tabular Editor, TMDL, and lineage information make the surrounding model easier to inspect. PBIP and Git give the definition a history rather than leaving the previous version buried inside an old PBIX file.

This is also where CI/CD starts becoming valuable. A pull request can expose the semantic-model change before it is merged, while automated regression checks can validate known KPI results, edge cases, or model rules. DEV and TEST then provide somewhere to see whether the change behaves as expected before the same definition reaches PRD.

The interesting part isn't simply having more tools. It's gradually removing the dependency on someone remembering every scenario that needs to be checked each time a trusted KPI changes.

AI can push that further. It can help explore unfamiliar logic, compare definitions, identify dependencies, or generate test scenarios that might otherwise be missed. As models become easier for AI to inspect and reason over, some of the investigation around a KPI change will probably become much faster.

<div class="ai-boundary-card">

    <div class="ai-boundary-icon">
        ✦
    </div>

    <div class="ai-boundary-label">
        AI BOUNDARY
    </div>

    <h3>
        AI can investigate the change. It can't own the trade-off.
    </h3>

    <p>
        Use AI to explore logic, dependencies, and test scenarios. Keep the final business decision with the people who understand what the KPI represents.
    </p>

    <div class="ai-boundary-tags">
        <span>AI</span>
        <span>Validation</span>
        <span>Human Judgement</span>
    </div>

</div>

That's the boundary I think will matter much more as AI moves deeper into enterprise BI. It can increasingly help us understand **what will change**, find things we might have missed, and make parts of the validation repeatable.

But whether breaking three years of comparability is acceptable, whether a target should be restated, or whether two definitions should coexist isn't really a technical decision.

**AI can make changing a KPI easier. Better engineering can make changing it safer. Deciding whether it should change still requires understanding the business around it.**

## Every KPI Change Leaves Something Behind

Open an old KPI and the DAX will usually tell you what it's doing. What it rarely tells you is why someone decided it should work that way.

An exclusion suddenly appears after a certain date. One market follows slightly different logic. An extra condition handles a scenario that no longer looks familiar. The calculation still works, but the context around those decisions has disappeared.

<div class="kpi-code-example">

    <div class="kpi-code-example__header">
        <span>INHERITED LOGIC</span>
        <small>DAX</small>
    </div>

    <pre><code><span class="kpi-code-comment">-- Why does this exception exist?</span>
[Market] = "X"
    && [Date] >= DATE ( 2024, 1, 1 )</code></pre>

    <div class="kpi-code-example__message">
        The logic survived. The reason behind it didn't.
    </div>

</div>

That's how technical debt quietly builds around a KPI: not only through complicated code, but through business decisions whose context has disappeared.

This is where source control and documentation solve different parts of the problem. Git can tell us what changed, when it changed, and even help us recover an earlier version. A ticket, decision log, or simple KPI definition can capture the part Git cannot: why the change was made, who agreed to it, when the new definition became effective, and whether an exception was intended to be permanent.

<div class="kpi-context-strip">

    <div class="kpi-context-side kpi-context-side--technical">

        <div class="kpi-context-top">
            <span class="kpi-context-icon">↺</span>
            <span class="kpi-context-label">SOURCE CONTROL</span>
        </div>

        <strong>What changed?</strong>

        <small>
            When · Previous version · Code history
        </small>

    </div>

    <div class="kpi-context-side kpi-context-side--business">

        <div class="kpi-context-top">
            <span class="kpi-context-icon">◆</span>
            <span class="kpi-context-label">BUSINESS CONTEXT</span>
        </div>

        <strong>Why did it change?</strong>

        <small>
            Decision · Owner · Effective date
        </small>

    </div>

</div>

Ownership matters here too. Someone should be able to answer what the KPI is supposed to represent when the next change arrives.

Without that, the next developer ends up tracing data, searching through old tickets, comparing old versions, or asking around before **feeling confident enough to touch the measure.**

For mature KPIs, maintaining the calculation is only half the job. **The other half is making sure the next person doesn't have to reverse-engineer the business decision that created it.**

---

## Closing Thought

I've become much more comfortable with KPI discussions that end without a deployment. Earlier, that might have felt like we'd spent time investigating something without delivering a change. Today, I see it differently. If the investigation shows that the existing definition still serves the business better, leaving it alone is a perfectly valid outcome.

That's probably one of the harder lessons enterprise BI teaches over time. Improvement isn't always about adding better logic or adopting the newest capability. 

Sometimes it's about understanding the environment well enough to know when change creates value and when it simply creates more trouble for the future. The ability to tell the difference is becoming even more important as automation and AI make changing things easier than ever.