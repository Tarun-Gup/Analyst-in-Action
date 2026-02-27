---
title: "Reference vs Duplicate in Power BI: What’s the Difference?"
layout: post.njk
date: 2022-02-06
description: "A practical explanation of the difference between Reference and Duplicate in Power BI Power Query, including when to use each approach."
tags:
  - posts
  - powerbi
  - data-modeling
  - best-practices
---



Finally, we are back with new blogs. The idea of all the blogs is to share the problem of the week which I faced and provide a solution to it. So, as Business Intelligence Analyst one of my major responsibilities is to design an optimized data model and avoid many to many relationships. The primitive approach to such a problem is to create bridge tables out of a big flat table and create one to many relationships in that process.

Creating bridge tables can be achieved in the Power Query Editor. There are mainly two ways to achieve that one is to take reference tables and the other is to create a duplicate table out of the big flat table. So what is the difference between duplicate and reference? Let's dig deeper into it. If you see both of them create a copy of the main table but in duplicate, it will copy the changes applied to the main table whilst in the reference the bridge table will be isolated from all the changes applied to the main table.

The reference query always points to the main table and does not copy any of the applied steps to the main query. Let's see how does it work in Power BI. I am currently using the Sample Superstore Data. You just need to right-click on the main table and you will see both duplicate and reference. 

![](/assets/images/reference-vs-duplicate-power-bi/step-1.png)

At first, we are creating a reference table out of the orders table and to avoid many to many relationships we will remove duplicates from the segment column. I have removed all other columns because I will set up a segment table and create relationships with other tables.

![](/assets/images/reference-vs-duplicate-power-bi/step-2.png)

If you do that you will get a column with only three rows. Now let's see the m-script and query dependencies behind this reference. To see that you need to go to the view tab and there you can find both the options.

![](/assets/images/reference-vs-duplicate-power-bi/step-3.png)

![](/assets/images/reference-vs-duplicate-power-bi/step-4.png)

You can see the process and steps working in the background and it is evident that the reference tables always point to the main table. Now let's do the same thing with duplicates. You will get the duplicate table just following the same steps you just need to select the duplicate instead of reference. Let's see the query dependencies and the m-script for it.

![](/assets/images/reference-vs-duplicate-power-bi/step-5.png)

![](/assets/images/reference-vs-duplicate-power-bi/step-6.png)

As you can see from the query dependencies when you create a duplicate table it doesn't point out to the main table but if you check the applied steps in duplicate you can see every step that has been applied to the main table is visible over there.

![](/assets/images/reference-vs-duplicate-power-bi/step-7.png)

![](/assets/images/reference-vs-duplicate-power-bi/step-8.png)

Duplicate tables require more processing time as compared to the reference tables as it occupies the space in memory. The main question is when to use this duplicate option. You can use this when you want to create a mirror image of the big flat table with all the applied steps. The purpose of both duplicate and reference is quite different and depends on what you want to achieve in the end.

