# Introduction to Power Ops

*Published in June 2025*

Power BI, combined with all external tools, at least the basic ones, can be a perfect BI tool to meet all your needs. Today's blog will focus on another external tool. What?? Not another one!! In my regular practice, I always rely on basic external tools such as DAX Studio, Tabular Editor, and Measure Killer. But what if I say this new tool is a transformer, combining all the basic tools in one place?

If you are looking for an introductory guide for the basic external tools, we got you covered. 

- [Beginners guide to DAX Studio](https://example.com)
- [Advanced guide to DAX Studio](https://example.com)
- [Guide to Measure Killer](https://example.com)

Yes, you read it right and we will give you an introductory guide to all the functionalities that can be achieved with Power Ops. Okay, first things first to download Power Ops you can visit their website and I would recommend exploring it with one of your reports. You can download the free version. It will be available under the external tools section in Power BI Desktop.

Before we move further, I would highly recommend visiting Power Ops [blogs](https://example.com) and [training videos](https://example.com).

Let's get started, I will be using a dummy report that contains Sample Superstore data for today's blog. You will observe the interface looks much better than the other external tools. And if you carefully notice you can pull any of the formats from PBIX to PBIP. 

[Image placeholder: describe what the image will show]

How cool is that? We will stick with the PBIX format for the demo. Hit on add and you will enter into the world of Power Ops.

[Image placeholder: describe what the image will show]

It contains all the information related to the report even the usage of Custom Visuals and Bookmarks used. Time for First Impressions, as a BI developer, I play with external tools regularly, and recently I became a fan of DAX Studio and Measure Killer just because they serve the purpose with a clean interface. And I am noticing the same with Power Ops. Let's check the model section.

[Image placeholder: describe what the image will show]

The good part is it shows all the information at a glimpse straight from the number of data sources to the columns. If we scroll, we will find all relevant information that can't be easily found or we can say you have to find it on Power BI desktop but it is not that straightforward. The only thing that I missed is to use the toggles for Is Hidden or any other toggles. You can't do that from Power Ops itself to do it we need to go to Tabular Editor or do it in Power BI Desktop itself.

[Image placeholder: describe what the image will show]

Getting an extract of all the measures is a kind of hidden feature in DAX Studio until you have deep-dived into DMV and created a query with MDSCHEMA.MEASURES. With Power Ops, you only have to go to the DAX section and you will have the list of all measures. If you have extensively worked with DAX Studio, it presents options to take the extract in a linked Excel so any change you make to your measures will be reflected in your Excel too. Currently, we miss that aspect with Power Ops.

Checking dependencies it's never been easy to check the dependencies but with Power Ops it is simple. To do so go to the dependencies section and you will find the dependency tree from 3 angles. The good part is you can even go to the measures level to check dependencies.

[Image placeholder: describe what the image will show]

Accessing the M codes and editing them has been made easy with Power Ops. Head to the M queries section and you will all M codes for each and every table. This is quite similar to Measure Killer.

[Image placeholder: describe what the image will show]

Let's head to my favorite section in any external tools which is to find the usage of my columns, measures, and tables. Power Ops has taken it to the next level. 

[Image placeholder: describe what the image will show]

I am looking to find the usage for Order Date since it is my key to connect to the date table. With any of the external tools this information is never this clear. It is specifically pointing to the visual where I have used the Order date, in any of the measures order date is used and since it is a key in my data model we are getting that usage tracked too. You will be observing some columns and tables have red marks against them. These fields and tables are not used at all.

[Image placeholder: describe what the image will show]

How awesome is that? Let's explore more and head to a new section that will allow us to compare different versions of your reports. This is one of the features that can't be achieved with any of the external tools. In case you need to do this more extensively try it VS Code and Azure DevOps.

[Image placeholder: describe what the image will show]

Power Ops compared both reports until the M queries. Since both of the reports are using the same tables with the same data source it will be almost similar. You can observe the different statuses "Added/Removed/Modified" based on a page that is added, removed, and modified in the destination report. 

One of the last sections of Power Ops is Best Practice. Every external tool has this but I found the [Best Practice Analyser with Tabular Editor](https://example.com) the most effective for me. Let's head to the Best Practices section and see if this can be your favorite.

[Image placeholder: describe what the image will show]

The scorecard for my report shows I am not doing that bad job!! Let's open one of them to know more about these rules.

[Image placeholder: describe what the image will show]

If we observe the failed section you will see Power Ops is looking for every small detail which is very good. In case you want to disable a specific rule you can easily do it by going to edit rules and disable it by unchecking it. You can also add your own rule by selecting add rule, provide all the information and Boom you will have a new rule in place.

[Image placeholder: describe what the image will show]

What if I need to fix any of the rules in Power Ops itself? Yes, that's possible. Let's head to formatting rules. You will observe a fixing sign against certain rules

[Image placeholder: describe what the image will show]

Only the rules that have the fixing sign against them can be fixed in Power Ops itself others either do it in Power BI Desktop or Tabular Editor but that makes sense. Let's click on the fixing sign and see. 

[Image placeholder: describe what the image will show]

Final verdict time!! So overall I found Power Ops very useful and might even replace all my external tools library. 
