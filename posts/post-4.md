# Power BI: Checklist I run before publishing any report

*Published on August 2025*

[Image placeholder]

We’re back after a long break, and in the meantime, the blog has had a bit of a makeover. There’s now a curated list of posts for anyone starting their Power BI journey, so feel free to check that out if you’re new around here.

Now, let’s get back to today’s topic.

Think of this scenario: you’ve done all the hard work, built a clean report, everything looks perfect… and just before publishing, you pause for a second. I used to run a mental checklist every time. Do you do it too?

Should you? Honestly, yes.

A simple checklist can save you from those painful “the report is broken” messages that pop up from every direction once a stakeholder opens it. I’ve been there more times than I’d like to admit, and that’s exactly why I put this list together from my mental checklist to the analyst in action blogs.

It’s not theory, it’s a collection of small lessons learned from actual reports, moments of panic, and last-minute bugs that showed up at the worst possible time. This checklist helps me avoid that chaos, and I hope it does the same for you.

Note: This checklist comes from my day-to-day experience, and it should help Power BI users of all levels. But I know there’s always room to improve, drop your own must-do steps or anything you think deserves a spot here.

I will be referencing some detailed blog posts on some topics, which will give you a better understanding of each of the topics.

---

✅ Data Modelling Checks

The majority of the issues always lie in the foundation. We are talking about the most basic things first. It has to be the perfect thing in your report, along with many others. This is what I check here - 
Ensure you have created and marked a date table: In most scenarios, date tables are always part of a template; in such cases, quickly check if you have marked it as a date table. To do so, go to the model view and right-click on the date table to check it.

Star schema vs Snowflake: Mostly, this part is skipped easily, but this will haunt you in the future. How your data model is designed is quite important. In an ideal world, always go for the star schema.

Using the correct data types: This is a manual check across all tables and columns to see if you are using the appropriate data types. This would save you a lot of time in investigating performance-related issues.

Avoid bi-directional relationships: Heard it a lot? But this is something avoided very often just because you are getting the correct numbers, but if you have any of it, do question the need for it

Avoid Summarize by as Sum: We have covered this multiple times. If you find any fields with a sigma sign in front that need to be addressed, mark the summarise by as none. Use explicit measures to do any type of calculation. Do check the detailed blogpost

Structuring the view: One of my favourites, generally, I have a dedicated measure table, and all measures should be created only in this table. Also, create folders and subfolders to arrange your measures. Do check out the detailed blogpost 

Hiding primary keys: You can only hide your columns in the model view; ideally, you should be hiding the primary keys. Why? Your primary keys are generally the high cardinal field, meaning if you drag it in one of your visuals, it will be bad for the performance of that visual. Unless the users need to search based on the primary keys, then you don't hide it. 

---

✅ DAX Checks

Once you have the data model clean, then you move to the DAX, which gives you the most amount of surprises. Even a small mistake here can change the KPIs. This is what I check here- 

Getting the totals right: Yes, this is a very common mistake, as a practice, if you have included the KPI in a table or matrix to allow users to export. Do check the totals in export if they match your numbers, and to get the total right, unfortunately, you have to deal with it in the measure itself. Do check out the detailed blogpost

Time intelligence measures: Do a final check if your TI measures are working as designed. As a practice, I tend to check the period that my TI measures are picking with a few test measures.

Deleting the duplicates and test measures: Go over the measure table, and you can spot, you have created total sales, total sales final....always delete the duplicates and give a proper name to your measures that are business-friendly.

Correct format string for all measures: You can easily check it within Power BI, or you can check it via external tools, but in the end, all the measures need to have a correct format string. Do check out the detailed blogpost 

Avoid the use of iterator functions with IF functions: This combination tends to create callback IDs that are not good in terms of performance. Do check out the detailed blogpost

---

✅ Layout and UX checks

I will call this section a make-or-break. A report can have perfect DAX and a beautifully structured model, but if the layout feels messy or confusing, users will simply stop opening it. They don’t see your measures or relationships; they see visuals, titles, and how easy it is to move around. This is what I normally check-

Give clear titles to your visuals: A good title helps users understand a visual at a glance.
If a chart supports drill-down or drill-through, mention it in the title or add a small subtitle so people know it’s interactive

Syncing of slicers: It’s easy to forget this during development, but users really notice when slicers behave differently from page to page. A missing sync can instantly break the flow.

Check slicer settings: Make sure you’re using the same slicer style everywhere, dropdown, list, button, etc. Always check that no slicer has a random default selection left over from testing. And the naming of the same slicer is consistent across pages

Alignment of visuals: Think of this like building a PowerPoint slide. Straight edges, equal spacing, and clean alignment make a huge difference to how “professional” the report feels. This will make your report stand out.

Interaction between different visuals: Power BI’s default interaction (partial filtering) isn’t always ideal.
Use Edit Interactions and manually set how visuals should affect each other. This avoids misleading cross-highlights.

Uniform number formatting: If one page uses whole numbers and another uses decimals, it looks sloppy. Same for currencies and percentages; pick a format and stick to it.

Navigate the report: Optional, but helpful. You can add a small note explaining how to use the report, or create bookmark-based navigation if you want something more polished.

Reduce unnecessary icons on visuals: If a visual has too many helper icons (like drill buttons, focus mode, etc.), users will click everything just to “see what happens". Only keep the icons that are genuinely useful.

Review Visual and page level Filters: Check if there are specific applied on any level. Also, as a practice, I hide my filter pane, selection pane.

Check for hidden visuals: We all create temporary visuals while building a page. Before publishing, check if anything is hidden but still sitting on the page, and delete what’s not needed.

Grouping visuals: If you have icons and text that belong together (like a small note with an information icon), group them. It keeps everything in place and prevents accidental misalignment.

Bookmarks: If you’re using bookmarks across the report, make sure only the relevant ones appear on each page. It helps to group visuals first and then create the bookmark; it avoids a lot of confusion later.

Use of buttons: If your report uses buttons, make sure each one does exactly what users expect.
Pay special attention to the Back buttons. They should take the user to the correct place, whether that’s the Start page or the page they were on before. A misplaced button action can confuse users quickly, so it’s worth clicking through each one once before publishing.

---

✅ Security and Cleanup

Enough of UX and layout, let's wrap today's post with the most essential part. Yes, you might have guessed it right. Before publishing, we need to check if our security is working as desired. Before I mention the checklist, first, you need to check if you have the security tables connected in your model view.

Test role for a few users: Before anything else, open the Model view and confirm that the tables used for RLS or permissions are connected properly. A broken relationship here means your security won’t work, no matter how perfect the DAX looks. Then test a few users with different roles, one who should be seeing everything, and the users who should be seeing limited data. After publishing, don’t forget to assign users or groups to the correct roles in the Power BI Service.

Cleanup: My favourite from the lot, so once you have the beautiful report ready, it is time to clean up some mess that is lying in your data model, including unused columns, measures...I generally use Measure Killer and Tabular Editor to do the cleaning and organise my model. Do check out the detailed blogpost

Best Practice Analyser: With your cleaned report, it is time to do a final test before we publish. This test will be the final verdict. The goal isn’t to fix every tiny warning, just pay attention to the important ones: missing format strings, unused fields, DAX patterns that might affect performance. This quick pass acts like a final verdict before the report goes live, and I normally do it with BPA in Tabular Editor with a set of rules that are in place. To know more about BPA and how to run it, do check out the detailed blog



And that’s it. This is the checklist that has quietly saved me again and again before hitting “Publish.” Every project is different, but these steps keep the usual problems away. If you use your own tricks or have something I missed, feel free to share it in the comments; this list is always growing. We’ll also be posting regularly again, on a bi-weekly schedule, so stay tuned for more practical Power BI content.

