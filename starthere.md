---
layout: base.njk
title: Start Here
permalink: /start-here/
---

# Start Here

Most of the lessons on Analyst in Action began with a problem that looked small at first.

A measure returned the wrong result. A dashboard became slow. A deployment exposed a dependency nobody had considered. Or a project forced me to rethink how an analytics solution should be built.

The interesting part was rarely the feature itself. It was understanding what was happening underneath, why the issue appeared, and what the better approach looked like.

That is what Analyst in Action is about: practical lessons from real Power BI and analytics work, explained through the problems that made them worth learning.

Choose a collection below and start with the topic closest to the challenge you are working through today.

<div class="start-here-grid">
<!-- ==========================================
     Learn Power BI
========================================== -->

{% assign learnPosts = collections.powerBi | concat: collections.dataModeling %}

<details class="topic-card">

<summary>

<div class="topic-inner">

<div class="topic-header-row">

<h2 class="topic-title">
Learn Power BI
</h2>

<span class="topic-count">
{{ learnPosts | size }} Articles
</span>

</div>

<div class="topic-tags">

<span>Power BI</span>
<span>Data Modeling</span>
<span>Best Practices</span>

</div>

<p class="topic-description">
Start here if you're building your Power BI foundations. Learn the principles behind better data models, interactive reports, and production-ready solutions.
</p>

</div>

</summary>

<div class="topic-card__content">

<div class="topic-content-grid">

<div class="topic-column">

<h3>What You'll Learn</h3>

<ul class="topic-list">

<li>Choosing Between Measures and Calculated Columns</li>
<li>Building Reliable Data Models</li>
<li>Creating Interactive Reports</li>
<li>Designing Better User Experiences</li>
<li>Working with Power BI Beyond the Dashboard</li>
<li>Publishing Reports with Confidence</li>

</ul>

</div>

<div class="topic-column">

<h3>Recommended Reading</h3>

<ul class="starter-links">

<li>

<a href="/posts/calculated-columns-vs-measures-power-bi/">

<span class="article-number">
01
</span>

<span class="article-title">
Calculated Columns vs Measures in Power BI
</span>

</a>

</li>

<li>

<a href="/posts/implicit-vs-explicit-measures-power-bi/">

<span class="article-number">
02
</span>

<span class="article-title">
Implicit vs Explicit Measures in Power BI
</span>

</a>

</li>

<li>

<a href="/posts/introduction-to-field-parameters-power-bi/">

<span class="article-number">
03
</span>

<span class="article-title">
Introduction to Field Parameters in Power BI
</span>

</a>

</li>

<li>

<a href="/posts/power-bi-bookmarks-beginners-guide/">

<span class="article-number">
04
</span>

<span class="article-title">
Power BI Bookmarks: A Beginner's Guide
</span>

</a>

</li>

<li>

<a href="/posts/export-power-bi-data-to-excel/">

<span class="article-number">
05
</span>

<span class="article-title">
Exporting Data from Power BI to Excel
</span>

</a>

</li>

<li>

<a href="/posts/power-bi-checklist-before-publishing/">

<span class="article-number">
06
</span>

<span class="article-title">
Power BI Checklist Before Publishing
</span>

</a>

</li>

</ul>

</div>

</div>

</div>

</details>

<!-- ==========================================
     Master DAX
========================================== -->

{% assign daxPosts = collections.dax %}

<details class="topic-card">

<summary>

<div class="topic-inner">

<div class="topic-header-row">

<h2 class="topic-title">
Master DAX
</h2>

<span class="topic-count">
{{ daxPosts | size }} Articles
</span>

</div>

<div class="topic-tags">

<span>DAX</span>
<span>Performance</span>
<span>Best Practices</span>

</div>

<p class="topic-description">
Take your DAX skills further by learning how calculations are evaluated, debugged, and optimized for real-world Power BI models.
</p>

</div>

</summary>

<div class="topic-card__content">

<div class="topic-content-grid">

<div class="topic-column">

<h3>What You'll Learn</h3>

<ul class="topic-list">

<li>Understanding Filter Context</li>
<li>Writing Better Measures</li>
<li>Handling Totals and Blank Values</li>
<li>Working with Relationships in DAX</li>
<li>Improving DAX Performance</li>
<li>Debugging Calculations with Confidence</li>

</ul>

</div>

<div class="topic-column">

<h3>Recommended Reading</h3>

<ul class="starter-links">

<li>

<a href="/posts/playing-with-totals-power-bi/">

<span class="article-number">
01
</span>

<span class="article-title">
Playing with Totals in Power BI
</span>

</a>

</li>

<li>

<a href="/posts/common-pitfalls-values-distinct-value-power-bi/">

<span class="article-number">
02
</span>

<span class="article-title">
Understanding VALUES, DISTINCT and VALUE in DAX
</span>

</a>

</li>

<li>

<a href="/posts/handle-blanks-effectively-power-bi/">

<span class="article-number">
03
</span>

<span class="article-title">
How to Handle Blanks in DAX
</span>

</a>

</li>

<li>

<a href="/posts/how-to-use-userelationship-dax-power-bi/">

<span class="article-number">
04
</span>

<span class="article-title">
USERELATIONSHIP in DAX
</span>

</a>

</li>

<li>

<a href="/posts/highlighting-top-10-rankx-topn-power-bi/">

<span class="article-number">
05
</span>

<span class="article-title">
Highlighting Top N Results Using RANKX & TOPN
</span>

</a>

</li>

<li>

<a href="/posts/dax-query-view-vs-dax-studio-when-should-you-use-each/">

<span class="article-number">
06
</span>

<span class="article-title">
DAX Query View vs DAX Studio
</span>

</a>

</li>

</ul>

</div>

</div>

</div>

</details>

<!-- ==========================================
     Performance & Optimization
========================================== -->

{% assign performancePosts = collections.performance | concat: collections.capacity %}
{% assign featuredPerformancePosts = performancePosts | uniq %}

<details class="topic-card">

<summary>

<div class="topic-inner">

<div class="topic-header-row">

<h2 class="topic-title">
Performance & Optimization
</h2>

<span class="topic-count">
{{ featuredPerformancePosts | size }} Articles
</span>

</div>

<div class="topic-tags">

<span>Performance</span>
<span>Capacity</span>

</div>

<p class="topic-description">
Build Power BI solutions that scale. Learn how to optimize semantic models, improve query performance, reduce resource usage, and keep reports fast as your environment grows.
</p>

</div>

</summary>

<div class="topic-card__content">

<div class="topic-content-grid">

<div class="topic-column">

<h3>What You'll Learn</h3>

<ul class="topic-list">

<li>Building Efficient Semantic Models</li>
<li>Reducing Model Size</li>
<li>Improving Query Performance</li>
<li>Optimizing Refresh & Capacity</li>
<li>Finding Performance Bottlenecks</li>
<li>Applying Performance Best Practices</li>

</ul>

</div>

<div class="topic-column">

<h3>Recommended Reading</h3>

<ul class="starter-links">

<li>

<a href="/posts/identify-delete-unused-columns-measures-power-bi/">

<span class="article-number">
01
</span>

<span class="article-title">
Identify & Delete Unused Columns and Measures
</span>

</a>

</li>

<li>

<a href="/posts/handle-high-cardinality-columns-power-bi/">

<span class="article-number">
02
</span>

<span class="article-title">
Handle High Cardinality Columns
</span>

</a>

</li>

<li>

<a href="/posts/best-practice-analyzer-guide-power-bi/">

<span class="article-number">
03
</span>

<span class="article-title">
Best Practice Analyzer Guide
</span>

</a>

</li>

<li>

<a href="/posts/optimizing-measures-dax-studio-power-bi/">

<span class="article-number">
04
</span>

<span class="article-title">
Optimizing Measures with DAX Studio
</span>

</a>

</li>

<li>

<a href="/posts/understanding-fabric-capacity-spikes/">

<span class="article-number">
05
</span>

<span class="article-title">
Understanding Fabric Capacity Spikes
</span>

</a>

</li>

<li>

<a href="/posts/from-one-big-pbix-to-shared-dataset/">

<span class="article-number">
06
</span>

<span class="article-title">
From One Big PBIX to Shared Semantic Models
</span>

</a>

</li>

</ul>

</div>

</div>

</div>

</details>

<!-- ==========================================
     Enterprise BI
========================================== -->

{% assign enterprisePosts = collections.enterpriseBI | concat: collections.governance %}

<details class="topic-card">

<summary>

<div class="topic-inner">

<div class="topic-header-row">

<h2 class="topic-title">
Enterprise BI
</h2>

<span class="topic-count">
{{ enterprisePosts | size }} Articles
</span>

</div>

<div class="topic-tags">

<span>Enterprise BI</span>
<span>Governance</span>
<span>Architecture</span>

</div>

<p class="topic-description">
Go beyond building dashboards. Learn how enterprise Power BI environments are governed, scaled, and maintained as they grow in complexity.
</p>

</div>

</summary>

<div class="topic-card__content">

<div class="topic-content-grid">

<div class="topic-column">

<h3>What You'll Learn</h3>

<ul class="topic-list">

<li>Managing Enterprise BI Environments</li>
<li>Building Strong Governance Practices</li>
<li>Understanding Metadata & Lineage</li>
<li>Preparing for AI-Driven Analytics</li>
<li>Securing Production Environments</li>
<li>Designing Reliable Deployment Processes</li>

</ul>

</div>

<div class="topic-column">

<h3>Recommended Reading</h3>

<ul class="starter-links">

<li>

<a href="/posts/the-enterprise-lifecycle-of-a-power-bi-dashboard/">

<span class="article-number">
01
</span>

<span class="article-title">
The Enterprise Lifecycle of a Power BI Dashboard
</span>

</a>

</li>

<li>

<a href="/posts/power-bi-governance-when-things-get-messy/">

<span class="article-number">
02
</span>

<span class="article-title">
Power BI Governance: When Things Get Messy
</span>

</a>

</li>

<li>

<a href="/posts/power-bi-metadata-layer-that-starts-mattering-at-scale/">

<span class="article-number">
03
</span>

<span class="article-title">
The Power BI Metadata Layer That Starts Mattering at Scale
</span>

</a>

</li>

<li>

<a href="/posts/what-happens-when-ai-meets-a-real-power-bi-environment/">

<span class="article-number">
04
</span>

<span class="article-title">
What Happens When AI Meets a Real Power BI Environment?
</span>

</a>

</li>

<li>

<a href="/posts/where-service-accounts-and-service-principals-start-becoming-useful-in-power-bi/">

<span class="article-number">
05
</span>

<span class="article-title">
Service Accounts & Service Principals in Power BI
</span>

</a>

</li>

<li>

<a href="/posts/when-dev-test-prod-power-bi/">

<span class="article-number">
06
</span>

<span class="article-title">
When DEV, TEST & PROD Become Necessary
</span>

</a>

</li>

</ul>

</div>

</div>

</div>

</details>

<!-- ==========================================
     Tools & Productivity
========================================== -->

{% assign toolPosts = collections.tools | concat: collections.productivity %}

<details class="topic-card">

<summary>

<div class="topic-inner">

<div class="topic-header-row">

<h2 class="topic-title">
Tools & Productivity
</h2>

<span class="topic-count">
{{ toolPosts | size }} Articles
</span>

</div>

<div class="topic-tags">

<span>Tools</span>
<span>Productivity</span>
<span>Automation</span>

</div>

<p class="topic-description">
Work smarter with the tools that experienced Power BI developers rely on. Learn how to troubleshoot faster, improve semantic models, and automate repetitive tasks.
</p>

</div>

</summary>

<div class="topic-card__content">

<div class="topic-content-grid">

<div class="topic-column">

<h3>What You'll Learn</h3>

<ul class="topic-list">

<li>Mastering the Power BI Toolset</li>
<li>Troubleshooting Models Faster</li>
<li>Improving Semantic Model Quality</li>
<li>Extending Power BI with APIs</li>
<li>Automating Repetitive Workflows</li>
<li>Building a More Efficient Workflow</li>

</ul>

</div>

<div class="topic-column">

<h3>Recommended Reading</h3>

<ul class="starter-links">

<li>

<a href="/posts/ultimate-beginners-guide-dax-studio/">

<span class="article-number">
01
</span>

<span class="article-title">
The Ultimate Beginner's Guide to DAX Studio
</span>

</a>

</li>

<li>

<a href="/posts/going-beyond-dax-studio/">

<span class="article-number">
02
</span>

<span class="article-title">
Going Beyond DAX Studio
</span>

</a>

</li>

<li>

<a href="/posts/beginners-guide-to-tabular-editor/">

<span class="article-number">
03
</span>

<span class="article-title">
Beginner's Guide to Tabular Editor
</span>

</a>

</li>

<li>

<a href="/posts/identify-delete-unused-columns-measures-power-bi/">

<span class="article-number">
04
</span>

<span class="article-title">
Identify & Delete Unused Columns and Measures
</span>

</a>

</li>

<li>

<a href="/posts/power-bi-apis-missing-layer-most-setups/">

<span class="article-number">
05
</span>

<span class="article-title">
Power BI APIs: The Missing Layer in Most Setups
</span>

</a>

</li>

<li>

<a href="/posts/power-automate-power-bi-what-actually-matters/">

<span class="article-number">
06
</span>

<span class="article-title">
Power Automate & Power BI: What Actually Matters
</span>

</a>

</li>

</ul>

</div>

</div>

</div>

</details>

<!-- ==========================================
     AI & The Future of BI
========================================== -->

{% assign aiPosts = collections.ai | concat: collections.fabric %}
{% assign featuredAIPosts = aiPosts | uniq %}

<details class="topic-card">

<summary>

<div class="topic-inner">

<div class="topic-header-row">

<h2 class="topic-title">
AI & The Future of BI
</h2>

<span class="topic-count">
{{ featuredAIPosts | size }} Articles
</span>

</div>

<div class="topic-tags">

<span>AI</span>
<span>Fabric</span>
<span>Future of BI</span>

</div>

<p class="topic-description">
Explore how AI, automation, and modern Power BI technologies are reshaping analytics. Learn the foundations you'll need as Business Intelligence continues to evolve.
</p>

</div>

</summary>

<div class="topic-card__content">

<div class="topic-content-grid">

<div class="topic-column">

<h3>What You'll Learn</h3>

<ul class="topic-list">

<li>Preparing for AI-Driven Analytics</li>
<li>Understanding Modern Power BI Architecture</li>
<li>Working with Automation & APIs</li>
<li>Exploring Microsoft Fabric Concepts</li>
<li>Building AI-Ready Data Foundations</li>
<li>Keeping Up with the Future of BI</li>

</ul>

</div>

<div class="topic-column">

<h3>Recommended Reading</h3>

<ul class="starter-links">

<li>

<a href="/posts/what-happens-when-ai-meets-a-real-power-bi-environment/">

<span class="article-number">
01
</span>

<span class="article-title">
What Happens When AI Meets a Real Power BI Environment?
</span>

</a>

</li>

<li>

<a href="/posts/introduction-to-power-ops/">

<span class="article-number">
02
</span>

<span class="article-title">
Introduction to Power Ops
</span>

</a>

</li>

<li>

<a href="/posts/introduction-to-tmdl-power-bi/">

<span class="article-number">
03
</span>

<span class="article-title">
Introduction to TMDL
</span>

</a>

</li>

<li>

<a href="/posts/mcp-power-bi-where-to-start/">

<span class="article-number">
04
</span>

<span class="article-title">
MCP & Power BI: Where to Start
</span>

</a>

</li>

<li>

<a href="/posts/power-bi-apis-missing-layer-most-setups/">

<span class="article-number">
05
</span>

<span class="article-title">
Power BI APIs: The Missing Layer
</span>

</a>

</li>

<li>

<a href="/posts/power-automate-power-bi-what-actually-matters/">

<span class="article-number">
06
</span>

<span class="article-title">
Power Automate & Power BI: What Actually Matters
</span>

</a>

</li>

</ul>

</div>

</div>

</div>

</details>

</div>

<section class="start-here-outro">

    <p>
        Every article on <strong>Analyst in Action</strong> began with a real problem: a measure that didn't behave as expected, a dashboard that needed to scale, a deployment that raised more questions than answers, or a new technology that challenged the way I thought about analytics.
    </p>

    <p>
        Whether you start with the fundamentals or jump straight into a topic you're working on today, the goal is the same: to help you understand not just <em>how</em> Power BI works, but <em>why</em> it works that way.
    </p>

</section>