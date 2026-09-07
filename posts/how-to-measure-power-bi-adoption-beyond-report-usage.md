---
title: "How to Measure Power BI Adoption Beyond Report Usage"
layout: post.njk
date: 2026-09-07
description: "Report views no longer tell the full story of BI adoption. Here's how I'd measure usage across Power BI, automation, alerts, and AI without creating another system to maintain."
featuredImage: /assets/images/how-to-measure-power-bi-adoption-beyond-report-usage/cover.png
tags:
  - posts
  - Power BI
  - Architecture
  - Best Practices
  - AI
---

Measuring BI adoption used to be relatively straightforward. Most consumption happened through reports, so report views, active users, and usage trends gave us a reasonable picture.

That's becoming harder to trust. Analytics is increasingly reaching people without them ever opening a report, which means falling report usage doesn't necessarily mean falling adoption.

So if report usage is no longer enough, **what would I actually build to understand BI adoption across an enterprise?** That's the implementation problem I want to work through here.

<div class="blog-toc">

  <h3>Inside this article</h3>

  <ul>
    <li>Why report usage no longer tells the whole story?</li>
    <li>Building the foundation without creating more admin</li>
    <li>Connecting usage across Power BI, automation, and AI</li>
    <li>When 12 activities are really just one use</li>
    <li>Is adoption falling or simply moving?</li>
    <li>What I'd actually start with tomorrow?</li>
  </ul>

</div>

---

## Start With the Analytical Product

Before collecting any usage data, I need to decide **what I'm actually measuring adoption of**. For this solution, I'd define an **analytical product** as a business-facing analytics capability built for a specific purpose, regardless of how people access it. Product ABC isn't the Power BI report or the semantic model behind it. Those are the technical pieces used to deliver it.

<div class="analytical-product-visual">

  <div class="ap-visual-header">
  <span class="ap-eyebrow">ONE ANALYTICAL PRODUCT</span>
  <p>One capability, delivered in different ways.</p>
</div>

  <div class="ap-canvas">

    <!-- Top -->
    <div class="ap-node ap-node--top">
      <span class="ap-node-type">Experience</span>
      <strong>Power BI Report</strong>
      <small>Direct user consumption</small>
    </div>

    <!-- Left -->
    <div class="ap-node ap-node--left">
      <span class="ap-node-type">Foundation</span>
      <strong>Semantic Model</strong>
      <small>Shared analytical logic</small>
    </div>

    <!-- Centre -->
    <div class="ap-product">
      <span class="ap-product-label">ANALYTICAL PRODUCT</span>
      <strong>Product ABC</strong>
      <p>
        One business-facing analytical capability
      </p>
    </div>

    <!-- Right -->
    <div class="ap-node ap-node--right">
      <span class="ap-node-type">Automation</span>
      <strong>Workflow</strong>
      <small>Analytics delivered in a process</small>
    </div>

    <!-- Bottom Left -->
    <div class="ap-node ap-node--bottom-left">
      <span class="ap-node-type">Push</span>
      <strong>Alert</strong>
      <small>Insight delivered automatically</small>
    </div>

    <!-- Bottom Right -->
    <div class="ap-node ap-node--bottom-right">
      <span class="ap-node-type">AI</span>
      <strong>AI Assistant</strong>
      <small>Analytics consumed through a question</small>
    </div>

    <!-- Connector lines -->
    <span class="ap-line ap-line--top"></span>
    <span class="ap-line ap-line--left"></span>
    <span class="ap-line ap-line--right"></span>
    <span class="ap-line ap-line--bottom-left"></span>
    <span class="ap-line ap-line--bottom-right"></span>

  </div>

  <div class="ap-visual-takeaway">
    <span>The product stays the same.</span>
    <strong>The way people consume it can change.</strong>
  </div>

</div>

This gives us a much more stable level to measure. Reports can be replaced, workflows can be added, and new ways of consuming analytics can appear without starting a completely new adoption story. That is why, for the rest of this setup, **Product ABC becomes the thing I'm measuring and not any individual report behind it.**

## Build the Foundation Once

Once Product ABC becomes the thing I'm measuring, I need somewhere to register it and connect the technical pieces behind it. In a mature setup, I'd treat this as **governed metadata**, not another spreadsheet or documentation page someone has to keep updating.

I'd keep the Product Registry in the data platform itself. In a Databricks environment, for example, I could have a small `analytical_products` table containing the Product ID, name, owner, audience and status. A second `product_artifacts` table would then map the reports, semantic models, workflows and other artifacts back to that Product ID.

The important part is the relationship: **one Product ID becomes the common link between the analytical product and everything used to deliver it.**

<div class="product-registry-card">

  <div class="registry-header">
    <div>
      <span class="registry-eyebrow">PRODUCT REGISTRY</span>
      <h4>Product ABC</h4>
    </div>

    <span class="registry-status">Active</span>
  </div>

  <div class="registry-meta">
    <div>
      <span>Product ID</span>
      <strong>AP-001</strong>
    </div>

    <div>
      <span>Business Owner</span>
      <strong>Team ABC</strong>
    </div>

    <div>
      <span>Audience</span>
      <strong>Commercial Teams</strong>
    </div>
  </div>

  <div class="registry-divider">
    <span>Connected artifacts</span>
  </div>

  <div class="registry-table">

    <div class="registry-row registry-row--header">
      <span>Artifact ID</span>
      <span>Artifact Type</span>
      <span>Platform</span>
      <span>Mapping</span>
    </div>

    <div class="registry-row">
      <span class="artifact-id">DSM-042</span>
      <span>Semantic Model</span>
      <span>Power BI</span>
      <span class="mapping-pill">AP-001</span>
    </div>

    <div class="registry-row">
      <span class="artifact-id">RPT-102</span>
      <span>Report</span>
      <span>Power BI</span>
      <span class="mapping-pill">AP-001</span>
    </div>

    <div class="registry-row">
      <span class="artifact-id">FLW-018</span>
      <span>Workflow</span>
      <span>Power Automate</span>
      <span class="mapping-pill">AP-001</span>
    </div>

  </div>

  <div class="registry-note">
    <strong>One Product ID</strong>
    <span>connects the business product to every technical artifact behind it.</span>
  </div>

</div>

The harder question is how to keep this without turning it into another inventory the BI team has to maintain. I wouldn't manually register every report or semantic model. Technical metadata such as artifact IDs, names, workspaces and lineage should be collected automatically from the platforms wherever possible. The stable Artifact ID then connects what the platform discovers to the business context we've assigned in the Product Registry.

That also changes how new artifacts are handled. If a new report appears but isn't connected to a Product ID, it can simply show up as **Unclassified**. Instead of asking someone to remember to update the registry every time something changes, we only need to review the exceptions.

So the split of responsibility becomes quite simple: **The platform discovers the technology. The BI team governs the business meaning.** Confluence or other documentation can still hold the richer story around Product ABC like its purpose, definitions, decisions and supporting context. But the metadata needed by the adoption solution stays structured and queryable in the data platform.

## Bring the Usage Data Together

With the Product Registry in place, I'd set up a small scheduled process to collect usage from each platform. The aim isn't to build one complicated integration, but to give every source the same route into the adoption setup.

For Power BI, I'd start with the activity or audit logs and load the useful records into a `powerbi_usage` table. If Product ABC is also consumed through a workflow, I'd bring its run history into a separate `workflow_usage` table. AI usage can follow the same pattern later. Each source keeps its own table, so we don't lose the detail or force very different types of activity into the same structure too early.

![](/assets/images/how-to-measure-power-bi-adoption-beyond-report-usage/step-1.png)

What matters is capturing a few common fields wherever possible: **when it happened, who or what consumed it, which artifact was involved, what happened, and an ID for the request or session if one exists.** The Artifact ID then connects that activity to the Product Registry.

I'd also keep this process incremental. Once yesterday's activity has been loaded, the next run should only collect what is new. That keeps the process lightweight and means the adoption view can refresh without someone exporting logs or updating files manually.

At this stage, we have something useful: a continuously growing history of how Product ABC is being accessed across different channels. But we still have one problem to solve. **What should actually count as one instance of consumption?**

## Decide What One Use Actually Means

Once the usage data is coming in, I'd create one more table before connecting anything to the final Power BI model. Let's call it `product_consumption`. This table would have one row for each interaction I actually want to analyse:

<div class="consumption-table">

  <div class="consumption-table__top">

    <div class="consumption-table__name">
      <span class="consumption-table__status"></span>
      <code>product_consumption</code>
    </div>

    <span class="consumption-table__count">
      3 interactions
    </span>

  </div>

  <div class="consumption-table__scroll">

    <div class="consumption-table__grid consumption-table__grid--header">
      <span>Time</span>
      <span>Product ID</span>
      <span>Channel</span>
      <span>Consumer</span>
      <span>Event</span>
      <span>Interaction ID</span>
    </div>

    <div class="consumption-table__grid">
      <code>09:02</code>
      <code>AP-001</code>
      <span class="consumption-channel">Power BI</span>
      <span>User A</span>
      <strong>Report Viewed</strong>
      <code>8271</code>
    </div>

    <div class="consumption-table__grid">
      <code>09:14</code>
      <code>AP-001</code>
      <span class="consumption-channel">Workflow</span>
      <span>User B</span>
      <strong>KPI Delivered</strong>
      <code>8272</code>
    </div>

    <div class="consumption-table__grid">
      <code>10:03</code>
      <code>AP-001</code>
      <span class="consumption-channel">AI</span>
      <span>User C</span>
      <strong>Question Answered</strong>
      <code>8273</code>
    </div>

  </div>

  <div class="consumption-table__footer">
    <span>ONE ROW</span>
    <strong>One interaction we actually want to measure</strong>
  </div>

</div>

The important work happens when populating this table. For Power BI, a report view might already be close enough to one interaction and can be loaded directly. For a workflow, I'd use the workflow run ID to combine all the steps from the same run into one event. For AI, I'd use the request or session ID so that the multiple semantic model queries needed to answer one question still create only one row.

I'd build these rules in the scheduled data process we created earlier. The original platform data stays untouched, while `product_consumption` is rebuilt or updated from it automatically. If we later decide that a particular activity should be counted differently, we change the rule and reprocess the data rather than manually correcting history.

This `product_consumption` table is what I'd connect to the final Power BI model. I still wouldn't add the different events together or give them artificial weights. Instead, I'd keep **Channel** and **Event** available for analysis so we can see whether Product ABC is being opened directly, delivered automatically, or accessed through AI.

<div class="consumption-note">

    <div class="consumption-note-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">
            <ellipse cx="12" cy="5" rx="7" ry="3"></ellipse>
            <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"></path>
            <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"></path>
        </svg>
    </div>

    <div class="consumption-note-label">
        MEASUREMENT PRINCIPLE
    </div>

    <h3>
        One interaction should mean one use.
    </h3>

    <p>
        Keep the raw activity for evidence. Model only the interaction you actually want to measure.
    </p>

    <div class="consumption-note-tags">
        <span>Evidence</span>
        <span>Interaction</span>
        <span>Context</span>
    </div>

</div>

## Build the View Around How Products Are Used

Once `product_consumption` is ready, I wouldn't overcomplicate the Power BI model. I'd connect it to the Product Registry through Product ID and start with a portfolio view that shows the different ways each product is being consumed.

I'd deliberately keep report use, automated delivery and AI use separate. Putting them into one adoption score would hide exactly the behaviour I'm trying to understand.

<div class="adoption-portfolio">

  <div class="adoption-portfolio__header">
    <span>PRODUCT PORTFOLIO</span>
    <strong>Consumption by Channel</strong>
  </div>

  <div class="adoption-portfolio__scroll">

    <div class="adoption-portfolio__grid adoption-portfolio__grid--header">
      <span>Product</span>
      <span>Report Use</span>
      <span>Automated Delivery</span>
      <span>AI Use</span>
      <span>Consumers</span>
      <span>Trend</span>
    </div>

    <div class="adoption-portfolio__grid">
      <strong>Product ABC</strong>
      <span>1,840</span>
      <span>310</span>
      <span>64</span>
      <span>142</span>
      <span class="portfolio-trend portfolio-trend--up">↑</span>
    </div>

    <div class="adoption-portfolio__grid">
      <strong>Product DEF</strong>
      <span>96</span>
      <span>1,420</span>
      <span>112</span>
      <span>181</span>
      <span class="portfolio-trend portfolio-trend--up">↑</span>
    </div>

    <div class="adoption-portfolio__grid">
      <strong>Product XYZ</strong>
      <span>420</span>
      <span>0</span>
      <span>0</span>
      <span>61</span>
      <span class="portfolio-trend portfolio-trend--down">↓</span>
    </div>

  </div>

</div>

The first thing I'd look for is **movement between those columns**. If report use for Product ABC falls while automated delivery grows, I wouldn't immediately treat that as declining adoption. If every channel is falling, that's a very different signal. And if usage is growing but the number of consumers isn't, I might be looking at heavier use from the same small group rather than wider adoption.

I'd also compare these patterns over a meaningful period rather than reacting to every monthly change. The useful signal is rarely that report views fell 8% last month. It's that over several months, Product ABC has gradually moved from mostly direct report use to a mix of direct and automated consumption.

From there, I'd use the portfolio view to decide **where to investigate**, not to make the decision for me. A declining product might need to be retired, or it might have a perfectly healthy reason for the change. A product moving heavily toward automation might even tell me that the report itself is becoming less important. That's the value I'd want from this setup.

<div class="adoption-question-shift">

  <div class="adoption-question-shift__old">
    <span>INSTEAD OF ASKING</span>
    <p>“Which reports have low usage?”</p>
  </div>

  <div class="adoption-question-shift__arrow">
    →
  </div>

  <div class="adoption-question-shift__new">
    <span>START ASKING</span>
    <p>“Which products are changing, and where is their consumption going?”</p>
  </div>

</div>

## If This Needs Weekly Maintenance, We've Already Lost

A setup like this can look great when it launches and quietly become useless six months later. One new report isn't mapped, an owner changes, a workflow gets replaced, and slowly the adoption view stops reflecting reality.

<div class="maintenance-shift">

  <div class="maintenance-shift__from">
    <span>MAINTENANCE</span>
  </div>

  <div class="maintenance-shift__arrow">
    →
  </div>

  <div class="maintenance-shift__to">
    <span>EXCEPTIONS</span>
  </div>

</div>

So I'd design for **exceptions, not maintenance**.

New reports and semantic models should be discovered automatically. Usage should load on a schedule. Anything the system can't place should come to us: an **Unclassified** artifact, a missing owner, a failed data load, or an active product with no recent consumption.

<div class="exception-signals">

  <div class="exception-signal">
    <span>Unclassified</span>
    <strong>Artifact</strong>
  </div>

  <div class="exception-signal">
    <span>Missing</span>
    <strong>Owner</strong>
  </div>

  <div class="exception-signal">
    <span>Failed</span>
    <strong>Data Load</strong>
  </div>

  <div class="exception-signal">
    <span>No Recent</span>
    <strong>Consumption</strong>
  </div>

</div>

The BI team should only need to make the decisions automation can't: *Is this a new analytical product? Which product does this artifact belong to? Has this product been retired?* I'd make those decisions part of the normal release process rather than create a separate adoption-maintenance routine.

<div class="maintenance-principle">

  <p>
    That's the standard I'd use for the whole setup:
  </p>

  <strong>
    Don't ask people to keep the system current. Build the system to tell people when it needs them.
  </strong>

</div>

## What I'd Actually Start With Tomorrow

I wouldn't start by trying to track every report, workflow, alert and AI interaction. I'd pick a small group of Power BI products and prove that the setup works first. Here's what I'd do:

<div class="tomorrow-plan">

  <div class="tomorrow-plan__step">
    <span class="tomorrow-plan__number">01</span>

    <div class="tomorrow-plan__content">
      <strong>Create the Product Registry</strong>
      <p>Product ID · Name · Owner · Status</p>
    </div>
  </div>

  <div class="tomorrow-plan__step">
    <span class="tomorrow-plan__number">02</span>

    <div class="tomorrow-plan__content">
      <strong>Discover Power BI artifacts automatically</strong>
      <p>Reports · Semantic Models · Power BI IDs</p>
    </div>
  </div>

  <div class="tomorrow-plan__step">
    <span class="tomorrow-plan__number">03</span>

    <div class="tomorrow-plan__content">
      <strong>Connect artifacts to products</strong>
      <p>Start with 5–10 products you know well</p>
    </div>
  </div>

  <div class="tomorrow-plan__step">
    <span class="tomorrow-plan__number">04</span>

    <div class="tomorrow-plan__content">
      <strong>Bring in Power BI usage</strong>
      <p>Report Views · Users · Activity Time · Report ID</p>
    </div>
  </div>

  <div class="tomorrow-plan__step">
    <span class="tomorrow-plan__number">05</span>

    <div class="tomorrow-plan__content">
      <strong>Build one simple Power BI page</strong>
      <p>Usage · Consumers · Trend</p>
    </div>
  </div>

</div>

The registry should live in the same data platform where the rest of the adoption data will eventually sit. When discovering reports and semantic models, I'd keep their Power BI IDs so they can still be identified even if names change. And I wouldn't try to map the entire environment at this stage but just enough products to prove the setup works.

When the usage data comes in, the report ID gives me the connection back to the right product. The first Power BI page only needs to show how much each product is being used, how many people are using it, and whether that is changing over time.

Then I'd stop building and actually use the view. Pick a product where usage is falling or behaving differently and see whether the data helps you understand why. If it doesn't, fix that before adding more sources. Once the Power BI setup is useful, add one new way of consuming analytics, such as an automated workflow. Follow the same pattern:

<div class="adoption-scale-flow">

  <div class="adoption-scale-flow__step">
    Collect its usage
  </div>

  <div class="adoption-scale-flow__connector">
    <span>→</span>
  </div>

  <div class="adoption-scale-flow__step">
    Connect it to the right product
  </div>

  <div class="adoption-scale-flow__connector">
    <span>→</span>
  </div>

  <div class="adoption-scale-flow__step adoption-scale-flow__step--final">
    Decide what counts as one use
  </div>

</div>

AI can come later when there is enough real usage to make it worth tracking. The first goal isn't to measure adoption across the entire organisation. **Start with 5–10 products, prove that the view helps you make a better decision, and then scale what works.**

## Closing Thought

I've always found **adoption** to be a slightly vague word in BI. We use it as if there should be one number that tells us whether a solution is adopted or not, but I'm not convinced that number really exists.

Even with everything we've built here, I wouldn't claim that we can perfectly measure BI adoption. There will always be usage we can't see and context the data can't explain. But I think we can get much closer to understanding **how our analytical products are actually being used**, rather than relying on report views as a proxy for the whole story.

And for me, that's probably the more useful goal. I don't necessarily need a perfect adoption score. I need enough of the picture to know where usage is growing, where it's moving, where it's disappearing, and where I should start asking questions.