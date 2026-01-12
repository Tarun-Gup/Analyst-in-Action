# Introduction to TMDL

*Published on February 2025*

Let's think of a scenario where you have asked to batch edit your long list of DAX, create repetitive measures over and over, copy whole set of measures from one PBIX to another. Until January 2025, if I encounter all those scenarios I always think of some external tools to achieve it. But but but Power BI does listen to you 😂 and now we have TMDL (Tabular Model Definition Language). In today's blog we will explore the capabilities of TMDL. 

Before we get started, TMDL is still in Preview features. You need to enable it under your settings and restart your Power BI desktop. You will see an icon for TMDL on the left pane. To learn more about TMDL do visit the [detailed article from Microsoft](https://powerbi.microsoft.com/en-us/blog/tmdl-in-power-bi-desktop-developer-mode-preview/)

[Image placeholder: describe what the image will show]

Once you click on the TMDL it will lead to a separate section with all the introductory steps. To start with, we will change the summarise by for all columns from none to sum. Just drag and drop the Sample Superstore table.

[Image placeholder: describe what the image will show]

You can edit the none to Summarise by section for every column to Sum. Since we are in the world of automation let's do it like a PRO. Just select None and do Ctrl+F to find it everywhere in the view and replace it by Sum. Hit Apply and you will observe sigma sign appearing before all the columns.

Note: Ideally, summarise by property should be set to None to avoid the use of Implicit measures. As a best practice always use explicit measures. To know more about Implicit and Explicit measures, refer to the detailed article (internal link).

Isn't it amazing? Let's play around with our measures table and create a measure to calculate the Furniture sales. Simple measure with a filter on the Category.

[Image placeholder: describe what the image will show]

Now, I want the different measures for different categories. In this case I only have 3 categories, ideally you can copy the same measure and create new measures. Then set the formatting for them individually. With TMDL you can achieve the same with less efforts. Once you have created a measure for Furniture  Sales it will look like this in TMDL view.

[Image placeholder: describe what the image will show]

I want to create a similar measure for Office Supplies and provide a similar format string to both of them. Before we do it, line tags need to be removed and we copy the rest. Why we remove the line tag? Line tags are unique tag associated to a measure or field in the semantic model. If we copy the line tag it will lead to error as it needs to be unique. 

[Image placeholder: describe what the image will show]

Hit apply and boom you will see there is another measure called Office Supplies Sales created. Now imagine you have tons of categories and you have to do it the old way it will take forever to create measures for all of them. But what about formatting each one of them. TMDL takes care of it too.

I have provided a basic fixed 2 decimal formatting to furniture sales and office supplies sales measure it will create a new line in TMDL view for format string. We need to switch to whole number instead of decimal numbers. Use Ctrl+F to find wherever we have the same formatting applied and replace it with #,0. Hit apply and you will see all measures formatting turned to whole numbers.

[Image placeholder: describe what the image will show]

How amazing it is? Now let's do something more magical!!! We are looking to copy the entire list of measures from one PBIX to another. Drag your measure table in the TMDL script section. As mentioned, every measure comes up with a line tag if you just copy as it is then it will lead to errors. 

We need to remove all the line tags but I have a list of 63 measures. I am not looking to repeat my efforts for 63 times. Thanks to [Fernan](https://www.linkedin.com/in/fernan-espejo/) for helping us out here. Use Ctrl+F to find the line tags by typing this "^.*lineageTag: .*\n?" selecting the regular expression and replace it with blanks.

[Image placeholder: describe what the image will show]

Hit apply and all line tags will be removed. Now simply open the new PBIX file where you need to copy the measures. Copy all the measures from TMDL view, and paste it in the new PBIX TMDL view. Hit apply and you have the same measures in both PBIX files.

How cool is this? let's take it to next level, I am looking provide a short description to different columns in my fact table. With TMDL, it is super easy. Go to the TMDL view and drag your fact table. Add just "///"and type a description.

[Image placeholder: describe what the image will show]

Let's do one more thing to wrap today's blog. As a Power BI developer, we need to hide a certain columns.  Before TMDL, we do it in the data modelling. After TMDL, you can just add a line "is hidden" for a specific column. Hit apply and Ship mode is now hidden.

[Image placeholder: describe what the image will show]

Amazing!!! we have covered only a limited scope for this blog but you can achieve a lot more with TMDL. It is great for source control and collaborative developments too. Do drop a comment if you want us to cover the source control in the upcoming blogs.




