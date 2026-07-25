---
title: "The Best Enterprise BI Developers Don't Start With Power BI"
layout: post.njk
date: 2026-07-25
description: "Discover the investigation process experienced BI developers follow before changing a KPI, semantic model, or Power BI report in enterprise environments."
featuredImage: /assets/images/enterprise-bi-investigation-before-power-bi/cover.png
tags:
  - posts
  - Power BI
  - Architecture
  - Best Practices
---

One of the things I've found most interesting about working in enterprise BI is how much of the work happens before Power BI is even open.

On the surface, a request might look simple. Add a KPI. Modify a report. Create a new page. But those requests rarely begin with implementation. They begin with investigation. Before I think about DAX or visuals, I'm usually trying to understand the environment. Which semantic model owns this logic? Does the KPI already exist? Who owns it? What reports depend on it?

I briefly touched on this idea in in last week's [BI Bits edition](https://www.linkedin.com/pulse/hidden-cost-growing-power-bi-environment-tarun-gupta-9v3we/?trackingId=3Sjt5BTFSY69i6nwoO8pAQ%3D%3D), where I wrote about how the questions change as a Power BI environment grows. This time, I want to look at what happens after those questions are asked, because that's where I've found enterprise BI becomes far more interesting.

<div class="blog-toc">

  <h3>Inside this article</h3>

  <ul>
    <li>Seeing every request as the start of an investigation</li>
    <li>Making architectural decisions before implementation begins</li>
    <li>A simple framework for deciding what should change</li>
    <li>Why every new asset has a long-term cost</li>
    <li>The mindset that changed how I think about enterprise BI</li>
  </ul>

</div>

## Enterprise BI Is a Detective Game

One of the biggest lessons enterprise BI has taught me is this:The request is rarely the best place to start looking for the answer.

<div class="casefile-card">

    <div class="casefile-icon">
        🕵️
    </div>

    <div class="casefile-label">
        CASE FILE
    </div>

    <h3>
        The request is evidence. Not the answer.
    </h3>

    <p>
        Experienced BI developers investigate the environment before they implement the solution.
    </p>

    <div class="casefile-tags">
        <span>Semantic Models</span>
        <span>Dependencies</span>
        <span>Business Rules</span>
        <span>Ownership</span>
    </div>

</div>

By the time someone asks for a new KPI or a report change, that request is already part of a much larger story. Sometimes the business rule already exists in another semantic model. Sometimes another team has already solved the same problem. Sometimes the numbers are correct, but the business definition has quietly changed.

Before I think about implementation, I want to understand the environment first. Where does the logic already live? Who owns it? What depends on it? Has this problem already been solved somewhere else?

That usually means exploring semantic models, tracing lineage, reviewing existing reports, and talking to the people closest to the business process. More often than not, that investigation changes my understanding of the original request.

Sometimes it changes the implementation. Sometimes it changes the recommendation. Occasionally, it changes whether the request should exist at all. Only then do I open Power BI.

---

## Follow the Evidence, Not the Request

Let's put our detective hat on and treat a request like evidence changes the questions you ask. Instead of asking, "How do I build this?", I start asking, "What happened that led someone to ask for this?"

Was a KPI definition changed? Are two reports showing different numbers? Does another semantic model already contain the logic? Has someone discovered a genuine gap, or simply not found what already exists?

![](/assets/images/enterprise-bi-investigation-before-power-bi/step-1.png)

The request is only one piece of evidence.

To understand the full picture, I need to examine the environment around it. That usually means tracing dependencies, reviewing semantic models, checking existing reports, and understanding how the business process actually works.

I've found that this investigation often changes the direction of the work completely. Sometimes the original request is exactly the right solution. Sometimes the real issue is duplicated business logic. Sometimes it's inconsistent KPI definitions.

Sometimes the answer isn't building something new at all. It's helping the business trust and reuse what already exists.

<div class="analyst-note">

    <div class="analyst-note-icon">
        📝
    </div>

    <div class="analyst-note-label">
        Analyst's Notebook
    </div>

    <h4>
        Investigate the cause before implementing the cure.
    </h4>

    <p>
        Follow the evidence instead of the assumption, and understand the real problem before accepting the proposed solution.
    </p>

</div>

## My Decision Framework

Once I've separated the request from the underlying problem, I don't rely on intuition. Over time, I've found myself asking the same handful of questions, whether someone wants a new KPI, another report, or a change to an existing metric.

![](/assets/images/enterprise-bi-investigation-before-power-bi/step-2.png)

This isn't a checklist I consciously work through every time. It's simply how my thinking has evolved after working in larger enterprise BI environments.

The framework helps me slow down before making a change, understand the environment I'm about to modify, and decide whether building something new is actually the right answer.

## Every New Asset Has a Cost

Early in my career, I measured success by how much I built. But today, I think about what every new asset adds to the environment.

Creating another KPI, report, or semantic model feels inexpensive because most of the cost isn't paid the day it's goes live. It appears months later. A business rule changes, and someone has to trace every report, semantic model, and downstream dataset that depends on it.

Two dashboards begin showing different numbers, and confidence in both starts to disappear. A new developer spends days figuring out which KPI definition or semantic model they're supposed to build on.

Every new asset increases the amount of knowledge the organisation has to carry. Eventually, the cost isn't measured in reports or semantic models. It's measured in slower delivery, lower trust, more difficult change management, and an environment that becomes harder to evolve safely.

**The cost of a new asset isn't paid when it's created. It's paid every time someone has to change it, trust it, or decide whether they can safely remove it.**

## Who Should Own This Logic?

One question has saved me more rework than almost anything else. Not *"Where should I implement this?"* but *"Who should own this?"*

It's an easy distinction to miss because almost every layer in an enterprise BI environment can solve the same problem. The source system can. The transformation layer can. The semantic model can. Even the report can.

![](/assets/images/enterprise-bi-investigation-before-power-bi/step-3.png)

The challenge isn't finding a layer where the logic works. It's deciding which layer should become responsible for it over the long term.

That decision matters because every place you implement business logic becomes the place where future changes have to begin. When ownership is clear, everyone knows where a business rule lives. When ownership is unclear, the same rule slowly starts appearing in multiple places.

You might find a SQL transformation in one layer, a DAX measure in the semantic model, and another calculation inside a report. Each implementation made sense when it was created, but together they leave everyone wondering which one is the real definition.

That's why I don't think of architecture as deciding *where* to implement a requirement. I think of it as deciding where future change should begin. Good architecture gives every business rule a single home.

<div class="architecture-thinking">

    <div class="architecture-thinking__icon">
        📐
    </div>

    <div class="architecture-thinking__content">

        <div class="architecture-thinking__label">
            ARCHITECTURE THINKING
        </div>

        <h3 class="architecture-thinking__title">
            Every business rule deserves one home.
        </h3>

        <p class="architecture-thinking__description">
            Good architecture isn't about finding somewhere the logic works. It's about choosing the one place that should own it over the long term.
        </p>

        <div class="architecture-thinking__tags">

            <span>Architecture</span>

            <span>Ownership</span>

            <span>Long-term Thinking</span>

        </div>

    </div>

</div>

## Every Decision Has an Owner

By the time I finally open Power BI, most of the important decisions have already been made. I've already investigated the request. I've already considered the long-term cost of introducing something new. I've already decided where the business logic belongs and who should own it.

Power BI is simply where those decisions become visible. That's probably the biggest change in how I think about enterprise BI. I used to believe my job was to build dashboards. Now I think my job is to help the business make decisions it can trust.

Because every KPI, report, and semantic model eventually becomes part of how someone understands the business. When someone asks, *"Why did this number change?"*, they aren't questioning a measure. They're questioning the decision they're about to make.

That's why enterprise BI has never really been about Power BI. It's about creating an environment where the business can trust every decision that follows.

<div class="commitment-thinking">

    <div class="commitment-thinking__icon">
        🤝
    </div>

    <div class="commitment-thinking__content">

        <div class="commitment-thinking__label">
            COMMITMENT THINKING
        </div>

        <h3 class="commitment-thinking__title">
            Every published asset is a promise.
        </h3>

        <p class="commitment-thinking__description">
            Someone will eventually depend on it, question it, and expect you to stand behind it.
        </p>

        <div class="commitment-thinking__tags">

            <span>Promise</span>

            <span>Trust</span>

            <span>Ownership</span>

        </div>

    </div>

</div>

---

## Closing Thoughts

One thing I appreciate about enterprise BI is that it has made me more comfortable building nothing.

Earlier in my career, I felt a constant need to create something new whenever a request arrived. Today, I don't feel the same pressure. Sometimes the most valuable outcome is confirming that the environment already contains the answer.

I've realised that maturity in BI isn't about becoming better at implementing ideas. It's about becoming more selective about which ideas deserve to be implemented at all.