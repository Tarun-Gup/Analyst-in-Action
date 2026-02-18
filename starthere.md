---
layout: base.njk
title: Start Here | Analyst in Action
permalink: /start-here/
---

# Start Here

Welcome to **Analyst in Action**.

Below you’ll find posts grouped by topic. Each section shows the latest 5 posts.

---

## 🧠 DAX & Calculations
Advanced DAX patterns, filter context behavior, time intelligence, totals logic, and writing clean, maintainable measures.

{% if collections.dax and collections.dax.length %}
{% for post in collections.dax | slice(0,5) %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 🏗 Data Modeling
Structuring tables, managing relationships, handling cardinality, and building scalable semantic models.

{% if collections.dataModeling and collections.dataModeling.length %}
{% for post in collections.dataModeling | slice(0,5) %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## ⚡ Performance & Optimization
Measure optimization, query tuning, model efficiency, and diagnosing performance bottlenecks in real-world Power BI projects.

{% if collections.performance and collections.performance.length %}
{% for post in collections.performance | slice(0,5) %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 🛠 Tools (DAX Studio, Tabular Editor, BPA)
Using DAX Studio, Tabular Editor, Best Practice Analyzer, and other external tools to build, analyze, and maintain robust BI models.

{% if collections.tools and collections.tools.length %}
{% for post in collections.tools | slice(0,5) %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 🏛 Architecture
Dataset strategy, shared models, semantic layer design, and structural decisions that scale beyond a single PBIX file.

{% if collections.architecture and collections.architecture.length %}
{% for post in collections.architecture | slice(0,5) %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 🚀 Deployment & Governance
Publishing discipline, documentation standards, security decisions, lifecycle management, and operational maturity in BI environments.

{% if collections.deployment and collections.deployment.length %}
{% for post in collections.deployment | slice(0,5) %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 🔥 Fabric
Understanding Microsoft Fabric concepts, ecosystem evolution, and architectural implications for modern BI teams.

{% if collections.fabric and collections.fabric.length %}
{% for post in collections.fabric | slice(0,5) %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 📈 Capacity
Diagnosing capacity spikes, managing workloads, and preventing unexpected performance degradation in Fabric environments.

{% if collections.capacity and collections.capacity.length %}
{% for post in collections.capacity | slice(0,5) %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}
