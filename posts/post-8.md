# Understanding Fabric Capacity Spikes: What’s Really Causing Them

*Published on December 2025*

Last blog for the year! And before leading into 2026, let's talk about one of the hot topics that is always tricky to understand while working with Power BI and Fabric. On most days, your reports are running perfectly, and suddenly, you get a notification that you have consumed more than 80% of the capacity. 

A report that usually opens in seconds starts taking ages to open. Visuals take longer to load. Sometimes a refresh fails with a capacity-related error. When you check the metrics, there is a sharp spike in capacity usage that wasn’t there before.

What makes this frustrating is that nothing obvious changed. No new reports were deployed. No large datasets were added. Yesterday worked fine, so today should work fine too. The natural response is to assume the capacity is too small. If usage spiked and things broke, it feels logical to conclude that more capacity would solve the problem.

This conclusion makes sense. Capacity feels like a fixed limit, and hitting that limit feels like proof that you need more of it. But in practice, these sudden spikes are rarely caused by capacity being “too small all the time.” They’re usually caused by how and when the capacity is being used. And that difference is where most misunderstandings begin.

In today’s blog, we’ll break down what capacity spikes actually mean, why they happen so often in Fabric and Power BI environments, and how you can start recognizing the patterns behind them before jumping straight to scaling your capacity.

## What does Capacity Spike mean?

When people first look at capacity usage, they often expect it to behave in a steady way. If reports are working normally, usage should stay low. If usage goes up, something must be wrong. But capacity doesn’t work like that.

Usage goes up and down throughout the day, depending on what’s happening in that moment. A dataset refresh starts. It doesn't matter whether it is scheduled one or on demand. A few users open reports. Someone interacts with several visuals. Each action uses capacity, even if only briefly.

A capacity spike happens when several of these actions collide.

This is why averages can be misleading. Capacity might be quiet for most of the day, but a short burst of activity can still cause slow or failing reports. The issue isn’t constant pressure; it’s a temporary overload during the peak hours.

If I need to explain in human language, you can think about it as traffic. A road can work perfectly well most of the time. But when everyone uses it at once, congestion appears. That doesn’t mean the road is broken. It means timing matters.

Capacity spikes work the same way. They don’t automatically mean your capacity is too small. They usually mean multiple workloads need the same resources at the same time.

In most environments, if you try to spot the culprits behind these spikes, only the heaviest reports get highlighted, regardless of how well the report is made. But once you start digging into it, you will realize these spikes aren't coming from a single heavy report or one bad refresh. They come from a handful of very common activities that are each reasonable on their own, but expensive when they happen together. Understanding those patterns is the key to explaining why spikes appear so suddenly.

## Common causes for the spikes

Based on my experience, capacity spikes are rarely caused by a single issue. They almost always come from a combination of everyday patterns overlapping at the wrong time.

One of the most common reasons is concurrent refreshes. When multiple datasets refresh at the same time, they all compete for the same capacity resources. Each refresh might be fine on its own, but together they can quickly push usage up. An easy win here is scheduling refreshes outside peak hours and spacing them out by 30 minutes or even an hour. When everything starts together, every model ends up fighting for capacity at once.

Shared datasets are another frequent contributor. I’m a big fan of them, but they can become a problem when the dataset itself is heavy, especially when it’s over a couple of gigabytes. If multiple users open different reports built on top of the same dataset at the same time, all those queries hit the model simultaneously. The load builds up very quickly, even if each report seems reasonable on its own.

User behavior also matters more than people expect. A common example is a detailed report page designed mainly for exporting large volumes of data to Excel. That’s usually not what the report was meant to support, but it happens. These patterns show up clearly in capacity metrics, often with the same users repeating the same actions. Reducing or redesigning these usage patterns can significantly lower spikes over time.

DirectQuery usage can make spikes much sharper. Since queries are sent back to the source every time a visual runs, interactive usage becomes expensive under concurrency. A report that feels fast for one user can become very heavy when many users interact with it at the same time.

If you look at each of these individually, none of them seems extreme. That’s the key point. Capacity spikes usually aren’t caused by one bad decision; they happen when several reasonable choices overlap.

## How to tackle this?

All of the below-mentioned approaches have been tried by me in real reports, and the common ones can be found in community posts and other blogs, too. I will try to put a real anecdote with each of the approaches.

To cut down the spikes, you can try the following- 

- One of the simplest and most effective steps is spreading out refresh schedules. Large refreshes running together put unnecessary pressure on capacity. Even small gaps of 15, 30, or 60 minutes can make a noticeable difference, especially during peak hours. In my experience, once we start noticing the spikes regularly and at a specific time, on digging it a bit more, we realized the 2 of the reports are running refresh at the same time during the day when users interact with those reports. So we move the refresh timings to late night and also cut the refresh frequency where you can.
- Another high-impact approach is focusing on the datasets that matter most. Not all models contribute equally to spikes. A small number of heavily used datasets usually account for most of the load. Simplifying those models by doing the basic cleanups and reviewing relationships can lower capacity usage during busy periods. Mostly, you can figure these datasets in capacity metrics, and the more users using a certain report more the capacity usage. Such models need intensive checks on how well they are made. At the end, it needs to be optimized.
- Cleaning up unused content also helps more than people expect. Old datasets that still refresh, reports that no one opens, or retry jobs left behind from past issues quietly consume capacity. Removing or disabling them reduces a lot of background operations and leaves more room for real usage.

This requires a lot more discipline as a team; all the workspaces need to be reviewed and checked on the adoption of all reports. Disable the refresh wherever possible.

- Be cautious with the different storage modes. DirectQuery is powerful, but it comes at a cost under concurrency. If real-time data isn’t required, switching to Import mode or hybrid patterns can dramatically reduce spikes caused by interactive usage.
If you have used Direct Query in any of the reports, make sure all best practices are followed. And you can question if the storage mode needs to be Direct Query, the best option will be to switch to a combination of import and direct query, or just import. 

These are just the starters to tackle this issue; this list can go on and on. But in case you are monitoring the capacity metrics, don't always look for the reason for the spike. Keep a note of the time window when this is happening, who is the user behind this, and are there any overlapping activities happening at the same time? 

## Common Misconceptions related to the capacity spikes

This topic is quite old, but still, a lot of teams are struggling to find the right balance on it. And everyone just says increase the capacity, and the problem will be solved. This brings me to the first misconception around it, that it's pretty obvious to scale the capacity, but it doesn’t change how workloads overlap. If refreshes, background tasks, and user queries all collide at the same time, the same patterns will appear again.

Scaling should be your last resort if you have tried improving all other things. And I can say, this won't happen in a day; this is an intensive exercise that every team should do, and with all the reports

One of the most common misconceptions is that capacity spikes automatically mean something is wrong with your design. In reality, spikes often appear because your data is being used more and not because it’s broken. 

Another misconception lies in that while reading the capacity metric, we tend to see the average and daily usage of capacity, but the actual problem lies in a specific time frame. You should be looking for that time frame and try to dig it a bit 

## When can you scale the Capacity?

For me, this will be the last option in any case. Not every capacity spike can or should be solved through optimization alone. Sometimes, scaling is the right decision.

Scaling makes sense when usage continues to grow even after refresh schedules are cleaned up, heavy datasets are reviewed, and obvious inefficiencies are addressed. If spikes line up with real business activity, such as regular reporting cycles or company-wide usage, then increased demand is simply part of success.

It also becomes necessary when many teams rely on the same capacity at the same time. Shared platforms are efficient, but they naturally concentrate the load. At a certain point, more users and more reports mean more capacity is required. Either get a new capacity altogether and move the heavy ones to the new capacity. Or create a clear distinction based on the teams using it. Generally, most teams have F128 capacity, which should be sufficient, but in case it is not, you can go for another F64 OR extend to F256

The key is understanding why you’re scaling. When the decision is based on clear demand patterns rather than a single frustrating spike, scaling becomes a proactive step instead of a reactive one.

To close it off, you have to understand these fabric capacity spikes aren't anything random; it is a clear sign of how users are using the data, when they use it, which reports matter most, and what ends up running at the same time. As a developer, you need to recognise these patterns as early as possible. These spikes are quite normal, and in the long run, you need to try to cut them off gradually and not entirely. And when capacity behavior makes sense, decisions around optimization or scaling become much easier to make.
