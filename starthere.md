---
layout: base.njk
title: Start Here | Analyst in Action
permalink: /start-here/
---

# Start Here

Welcome to **Analyst in Action**.

Below you’ll find posts grouped by topic.

---

## 🧠 DAX & Calculations
Advanced DAX patterns, filter context behavior, time intelligence, totals logic, and writing clean, maintainable measures.

{% if collections.dax and collections.dax.size > 0 %}
{% for post in collections.dax limit:5 %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 🏗 Data Modeling
Structuring tables, managing relationships, handling cardinality, and building scalable semantic models.

{% if collections.dataModeling and collections.dataModeling.size > 0 %}
{% for post in collections.dataModeling limit:5 %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## ⚡ Performance & Optimization
Measure optimization, query tuning, model efficiency, and diagnosing performance bottlenecks in real-world Power BI projects.

{% if collections.performance and collections.performance.size > 0 %}
{% for post in collections.performance limit:5 %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 🛠 Tools (DAX Studio, Tabular Editor, BPA)
Using DAX Studio, Tabular Editor, Best Practice Analyzer, and other external tools to build, analyze, and maintain robust BI models.

{% if collections.tools and collections.tools.size > 0 %}
{% for post in collections.tools limit:5 %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 🏛 Architecture
Dataset strategy, shared models, semantic layer design, and structural decisions that scale beyond a single PBIX file.

{% if collections.architecture and collections.architecture.size > 0 %}
{% for post in collections.architecture limit:5 %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 🚀 Deployment & Governance
Publishing discipline, documentation standards, security decisions, lifecycle management, and operational maturity in BI environments.

{% if collections.deployment and collections.deployment.size > 0 %}
{% for post in collections.deployment limit:5 %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 🔥 Fabric
Understanding Microsoft Fabric concepts, ecosystem evolution, and architectural implications for modern BI teams.

{% if collections.fabric and collections.fabric.size > 0 %}
{% for post in collections.fabric limit:5 %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}

---

## 📈 Capacity
Diagnosing capacity spikes, managing workloads, and preventing unexpected performance degradation in Fabric environments.

{% if collections.capacity and collections.capacity.size > 0 %}
{% for post in collections.capacity limit:5 %}
- [{{ post.data.title }}]({{ post.url }})
{% endfor %}
{% else %}
_No posts yet._
{% endif %}