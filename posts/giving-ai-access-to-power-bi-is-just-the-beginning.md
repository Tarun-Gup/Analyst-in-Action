---
title: "Giving AI Access to Power BI Is Just the Beginning"
layout: post.njk
date: 2026-08-24
description: "AI can inspect your Semantic Model. But can it understand why it works that way? The real challenge is giving AI the context behind the model."
featuredImage: /assets/images/giving-ai-access-to-power-bi-is-just-the-beginning/cover.png
tags:
  - posts
  - Power BI
  - AI
  - Architecture
  - Best Practices
---

What would happen if you gave a brilliant new developer access to your Power BI environment but explained absolutely nothing?

They could inspect the models, read the DAX, and trace the relationships. But they would still struggle with some of the most important questions: **Why does this KPI work this way? Why does this exception exist? What could break if I change it?**

AI has exactly the same problem. And that made me wonder: **if we want AI to become genuinely useful inside Enterprise BI, what does it actually need to know?**

<div class="blog-toc">

  <h3>Inside this article</h3>

  <ul>
    <li>What changes when AI can inspect the Power BI model directly</li>
    <li>Why semantic model access still leaves an important context gap</li>
    <li>How to build the context AI actually needs for Enterprise BI</li>
    <li>Where to draw the line between AI investigation and execution</li>
    <li>What changes when AI-powered BI reaches business users</li>
  </ul>

</div>

---

## Give AI Access to the Model

The first thing most of us would probably try is giving AI better access to Power BI itself. Instead of copying DAX, relationships, and screenshots into a chat, let it inspect the semantic model directly.

That already opens up much more interesting possibilities. AI could inspect measures, trace dependencies, understand relationships, and investigate the model around a problem. With model metadata, TMDL, XMLA, APIs, and MCP-based tooling, we are already getting closer to making this possible.

<div class="implementation-note-card">

    <div class="implementation-note-icon">
        🛠️
    </div>

    <div class="implementation-note-label">
        IF I WERE TRYING THIS TODAY
    </div>

    <h3>
        Start with read access, not an AI agent.
    </h3>

    <p>
        The first useful step is simply giving AI a reliable way to inspect the model without letting it change anything.
    </p>

    <div class="implementation-note-tags">
        <span>TMDL</span>
        <span>XMLA</span>
        <span>APIs</span>
        <span>MCP</span>
    </div>

</div>

But there is still a missing piece. **The semantic model can tell AI how something works. It doesn't necessarily tell AI why it works that way.** And in Enterprise BI, that difference matters a lot.

## The Things Your Semantic Model Doesn't Know

Take two measures: `Revenue` and `Revenue Adjusted`.

AI can see exactly how they differ. What it can't see is that `Revenue Adjusted` was introduced three years ago after Finance requested an exception, or that the original measure still exists because another team depends on it.

<div class="unknown-context-grid">

    <div class="unknown-context-card">
        <div class="unknown-context-icon">?</div>

        <div class="unknown-context-text">
            Why was the exception introduced?
        </div>
    </div>

    <div class="unknown-context-card">
        <div class="unknown-context-icon">?</div>

        <div class="unknown-context-text">
            Who made that decision?
        </div>
    </div>

    <div class="unknown-context-card">
        <div class="unknown-context-icon">?</div>

        <div class="unknown-context-text">
            Why does the original measure still exist?
        </div>
    </div>

</div>

An experienced developer might know that history. Or they know where to find it. They remember the discussion, recognise the naming convention, check an old ticket, or know who to ask before touching anything.

**That knowledge sits around the semantic model, not necessarily inside it.** And there is a lot of it in Enterprise BI: business definitions, exceptions, previous decisions, ownership, expected behaviour, and the history behind why something was designed a certain way.

This is where the problem becomes more interesting. If we want AI to investigate with the same context we use ourselves, **connecting it to Power BI is only one part of the setup.**

## Building the Context AI Actually Needs

If I were starting this in a real BI environment, I wouldn't try to build an AI layer across everything. I'd pick **one investigation I already understand well** and see how much of the context I normally gather manually can be made available to AI.

Take a KPI that suddenly changes after a release.

The semantic model is the easiest starting point because much of that context is already structured. Through TMDL, XMLA, APIs, or MCP-based tooling, AI can be given read access to measures, relationships, columns, and other model metadata. But the next pieces are different.

**Change history** could come from the PBIP repository, commits, or deployment information. **Lineage** could come from Power BI/Fabric metadata or whatever catalogue the organisation already maintains. And for **business context**, I wouldn't start by feeding AI an entire Confluence space. I'd begin with something much smaller: the KPI definition, owner, important exceptions, and the reason behind any non-obvious logic.

![](/assets/images/giving-ai-access-to-power-bi-is-just-the-beginning/step-1.png)

The first context path might look something like:

<div class="context-path">

    <div class="context-path__label">
        THE FIRST CONTEXT PATH
    </div>

    <div class="context-path__flow">

        <div class="context-path__step">
            <div class="context-path__number">01</div>
            <div class="context-path__title">Power BI Model</div>
            <div class="context-path__source">TMDL · XMLA · APIs</div>
        </div>

        <div class="context-path__connector"></div>

        <div class="context-path__step">
            <div class="context-path__number">02</div>
            <div class="context-path__title">Git / Deployment History</div>
            <div class="context-path__source">PBIP · Commits · Releases</div>
        </div>

        <div class="context-path__connector"></div>

        <div class="context-path__step">
            <div class="context-path__number">03</div>
            <div class="context-path__title">Lineage</div>
            <div class="context-path__source">Fabric · Catalogue · Dependencies</div>
        </div>

        <div class="context-path__connector"></div>

        <div class="context-path__step">
            <div class="context-path__number">04</div>
            <div class="context-path__title">Curated KPI Context</div>
            <div class="context-path__source">Definition · Owner · Exceptions</div>
        </div>

    </div>

</div>

Now give AI a way to retrieve from those sources when the investigation requires it. MCP can become interesting here because Power BI doesn't have to be the only system AI can inspect. The point isn't one giant prompt containing everything. **AI should be able to pull the relevant context when it needs it.**

<div class="ai-trace">

    <div class="ai-trace__header">
        <span>AI INVESTIGATION TRACE</span>
        <span class="ai-trace__status">● CONTEXT ASSEMBLED</span>
    </div>

    <div class="ai-trace__question">
        Why did this KPI change after the latest release?
    </div>

    <div class="ai-trace__rail">

        <div class="ai-trace__stage">
            <div class="ai-trace__dot">✓</div>
            <div class="ai-trace__name">Semantic Model</div>
            <div class="ai-trace__action">Inspect model</div>
            <div class="ai-trace__detail">TMDL · XMLA</div>
        </div>

        <div class="ai-trace__stage">
            <div class="ai-trace__dot">✓</div>
            <div class="ai-trace__name">Recent Changes</div>
            <div class="ai-trace__action">Check release</div>
            <div class="ai-trace__detail">PBIP · Git</div>
        </div>

        <div class="ai-trace__stage">
            <div class="ai-trace__dot">✓</div>
            <div class="ai-trace__name">Lineage</div>
            <div class="ai-trace__action">Trace impact</div>
            <div class="ai-trace__detail">3 dependencies</div>
        </div>

        <div class="ai-trace__stage">
            <div class="ai-trace__dot">✓</div>
            <div class="ai-trace__name">KPI Context</div>
            <div class="ai-trace__action">Get definition</div>
            <div class="ai-trace__detail">Approved context</div>
        </div>

    </div>

</div>

### Start With Context You Can Trust

This is also where I would be careful about adding more sources.

Old documentation can be worse than no documentation. Git tells AI what changed, but rarely why. Lineage can return dozens of dependencies without telling us which ones actually matter. Connecting an entire documentation repository might give AI five different versions of the same KPI definition.

<div class="context-quality">

    <div class="context-quality__sources">

        <div>
            <span>Old docs</span>
            <small>Outdated</small>
        </div>

        <div>
            <span>Git history</span>
            <small>Missing why</small>
        </div>

        <div>
            <span>Raw lineage</span>
            <small>Too much noise</small>
        </div>

        <div>
            <span>Documentation</span>
            <small>Conflicting</small>
        </div>

    </div>

    <div class="context-quality__filter">

        <div class="context-quality__filter-label">
            CONTEXT QUALITY CHECK
        </div>

        <div class="context-quality__checks">
            <span>Current?</span>
            <span>Relevant?</span>
            <span>Approved?</span>
            <span>Owned?</span>
        </div>

    </div>

    <div class="context-quality__result">
        <span>✓</span>
        <div>
            <small>WHAT REACHES AI</small>
            <strong>Trusted context</strong>
        </div>
    </div>

</div>

So for a team starting today, I would begin with **a handful of important KPIs**, not the whole stack. Make sure their definitions, ownership, and important exceptions are captured. Connect the technical context around them, and then replay investigations the team has already solved.

<div class="replay-strip">

    <div class="replay-strip__heading">
        REPLAY A SOLVED INVESTIGATION
    </div>

    <div class="replay-strip__items">

        <div class="replay-strip__item">
            <span class="replay-strip__number">01</span>
            <div>
                <small>CAUSE</small>
                <strong>Same likely cause?</strong>
            </div>
        </div>

        <div class="replay-strip__item">
            <span class="replay-strip__number">02</span>
            <div>
                <small>DEFINITION</small>
                <strong>Right business definition?</strong>
            </div>
        </div>

        <div class="replay-strip__item">
            <span class="replay-strip__number">03</span>
            <div>
                <small>FRESHNESS</small>
                <strong>Current context?</strong>
            </div>
        </div>

        <div class="replay-strip__item">
            <span class="replay-strip__number">04</span>
            <div>
                <small>GAPS</small>
                <strong>What did the developer still add?</strong>
            </div>
        </div>

    </div>

</div>

And I wouldn't solve documentation freshness with a quarterly clean-up. **Update the context when the decision changes.** A KPI change should update its definition. A new exception should capture why it was introduced. An ownership change should update the owner.

Then expand from there. **The goal isn't to connect AI to everything. It is to build one trusted context path, prove that it improves the investigation, and grow it from there.**

## Where Would I Draw the Line?

Once AI can investigate properly, the tempting next step is letting it fix what it finds. I would allow that, but only up to a very specific point.

AI can inspect the model through XMLA, TMDL, or MCP, read the Git history, trace dependencies, and investigate the problem. It can even prepare the PBIP/TMDL change in a development branch and generate the tests. **My boundary would be the pull request.**

![](/assets/images/giving-ai-access-to-power-bi-is-just-the-beginning/step-2.png)

AI can get the change ready for review, but it cannot approve its own change or push it through the deployment pipeline. The developer still reviews the diff, checks the wider impact, and decides whether it moves forward.

The biggest mistake would be letting the same AI **investigate the problem, choose the fix, validate its own work, and release it**. At that point, the controls might exist technically, but they are no longer independent. AI can shorten the path to a production-ready change. **It shouldn't be the one deciding that the change is production-ready.**

## Could You Hand This Over to the Business?

If this starts working well for developers, there is a natural next question: **could some of it move into the hands of business users?**

I think yes, but I would change the context first. A developer might need DAX, relationships, Git history, and lineage. A business user probably doesn't. They need the **approved KPI definition, current numbers, relevant business exceptions, and enough context to explain what changed.**

That could already take care of questions such as *“Why did this KPI move?”* *“What exactly is included?”* or *“Is this expected?”* without every question becoming a BI ticket.

The tricky part is allowing AI to turn an explanation into a conclusion. It might correctly identify that Revenue fell because one region declined, but *why the region declined* could require business knowledge that doesn't exist anywhere in the BI environment.

So I would start with **explanation, not decision-making**. Keep RLS and existing data permissions in place, expose only governed business context, and give AI a clear route back to the KPI owner when the evidence runs out.

<div class="handover-check">

    <div class="handover-check__title">
        <span>BUSINESS HANDOVER</span>
        <strong>What needs to be ready, and how to test it.</strong>
    </div>

    <table class="handover-check__table">

        <thead>
            <tr>
                <th>
                    <span>BEFORE HANDOVER</span>
                    <strong>Get the context ready</strong>
                </th>

                <th>
                    <span>AFTER HANDOVER</span>
                    <strong>Test the experience</strong>
                </th>
            </tr>
        </thead>

        <tbody>

            <tr>
                <td>
                    <span class="handover-check__number">01</span>
                    <strong>Approved definition</strong>
                </td>

                <td>
                    <span class="handover-check__number">01</span>
                    <strong>Ask naturally</strong>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="handover-check__number">02</span>
                    <strong>Current numbers</strong>
                </td>

                <td>
                    <span class="handover-check__number">02</span>
                    <strong>Explain from evidence</strong>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="handover-check__number">03</span>
                    <strong>Known exceptions</strong>
                </td>

                <td>
                    <span class="handover-check__number">03</span>
                    <strong>Respect permissions</strong>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="handover-check__number">04</span>
                    <strong>Change context</strong>
                </td>

                <td>
                    <span class="handover-check__number">04</span>
                    <strong>Show uncertainty</strong>
                </td>
            </tr>

            <tr>
                <td>
                    <span class="handover-check__number">05</span>
                    <strong>Clear ownership</strong>
                </td>

                <td>
                    <span class="handover-check__number">05</span>
                    <strong>Escalate when needed</strong>
                </td>
            </tr>

        </tbody>

    </table>

</div>

That is where this gets interesting for me. **We aren't giving the business an AI version of the BI developer. We're giving them better access to the knowledge already sitting behind their BI.**

---
## Closing Thought

I suspect AI will become capable of doing much more inside Power BI faster than most of us expect. But I'm not convinced capability will be the difficult part.

We can give AI better model access, connect more systems, and eventually let it prepare increasingly complex changes. But if the KPI definition is outdated, an exception lives in someone's head, or nobody remembers why a piece of logic exists, **a smarter AI doesn't solve the context problem.**

That is why I'm starting to see AI readiness differently. It isn't only about which models, agents, or tools we bring into BI. It is also about whether the environment around them is understandable enough to work with.

And perhaps that is a useful test for Enterprise BI in general: **if we struggle to explain why our own BI environment works the way it does, we probably aren't ready to ask AI to understand it for us.**