# Beginner’s Guide to Tabular Editor

*Published on August 2025*

Tabular Editor (TE), I have heard this name before. Yes, you probably had it if you work closely with Power BI, then Tabular Editor (TE)is the parallel lead to your PBIX reports. If you haven't explored Tabular Editor (TE), then this blog is for you. With this blog, we will give you all the basic use cases that get ignored in Power BI, but with TE, you can do it seamlessly.

There are tons of articles and videos explaining the UI of TE, so we won't be touching it. We will be focusing on different use cases that I normally do with all my Power BI reports. First things first, we will be focusing on the TE version 2 since it's a free tool. You can also opt for version 3, which is a much-improved version than version 2, but I would recommend starting with version 2 and seeing if it suits your needs. Version 3 is a paid version.

To download TE Version 2 from this very well known git hub page. Also, do check a small comparison done between the two versions on the TE official website.

Okay let's get started, we will be covering these use cases -
- Creating folders and subfolders of your measures 
- Edit your measures. And my favourite bulk editing measures
- Applying format strings also applying it in bulk
- Formatting all your measures with a click.
- Refresh a specific table
- We have covered Best Practice Analyzer in this detailed blog
- We have covered Calculation Groups in this detailed blog


Let's start with the simplest of the lot. I like structuring my report a lot since it is easy to debug and maintain. Creating folders and subfolders comes in handy there. You can easily segregate the base measures and time intelligence measures. Or group all the sales measures into one folder called sales. To do this in Power BI, you have to go to the data model, and it takes a bit longer. TE made it so simple. 

Select the measures that you want to group. In my case, I need to group my base measures. Once you select, you can see the display folder section to the right, just type the name that you want to give to this folder.

[Image placeholder]

Once you have done this, hit save. It's the icon below the edit on top, or you can do Ctrl+S. Now we head to our PBIX to see the magic.

[Image placeholder]

Awesome! Now that we have the folder, we would like to create a sub-folder under this to create a distinction between quantity and sales measures. To do this, just select the measure that needs to be in the Quantity subfolder. In this case, it is Total Quantity. Under the display folder, you just type Base\Quantity. Do note that we need to use the forward slash and not the backward slash to create a subfolder.

[Image placeholder]

How cool is this? Let's go to my favourite use case. Editing a measure and specifically bulk editing measures across the PBIX. If you think of this in Power BI, it's so boring to fix errors across tons of measures. With TE, it is so simple.

Okay, first, for the demo purpose, I have changed my base measure name by adding _ after Sales. But I did it only in the dependent measure, so all measures give errors. There are 2 ways to do this- one is a quite nerdy approach, and the other is that you don't like to sit for hours to fix this. 

A basic and nerdy approach is to click on the measure that gives an error and fix it one by one by removing the _. But we don't have that much time, so here comes the superpower of TE that is C# scripts. To know more about C# scripts, I would recommend this quick read. In this demo, our goal is to get rid of the _ after Sales in all the measures. So I have designed this C# script to tackle this. 

```csharp
foreach(var m in Model.AllMeasures)
{
    if(m.Expression.Contains("SampleSuperstore[Sales_]"))
    {
        m.Expression = m.Expression.Replace("SampleSuperstore[Sales_]", "SampleSuperstore[Sales]");
    }
}


```

This C# script will go across all the measures in the model and check if it is using Sales_ and replace it with Sales.Perfect, but wait, do I need to learn how to create such a C# script? No, you can refer to this GitHub page, which has all the basic C# scripts readily available, just tweak them a little based on your needs. Also, with TE version 3, you don't even need a C# script to bulk edit the measures. kay, let's test the superpower of C#script with another use case we need to format all the measures, which can be again a repetitive task if you stick with the Power BI to do so. You can create a basic C# script that is readily available on GitHub.

To run any sort of C#script, go to the advanced scripting or C#script option and copy and paste. At first, after execution, if you closely observe, there will be a blue icon popping up with every measure. No need to worry, it is the sign to deploy the change, hit save, and these warnings will be gone.

[Image placeholder]

Here is the C# script you can use to format all your measures. C#scripts can help a lot when it comes to all boring and repetitive tasks.

```csharp
-- FORMAT ALL MEASURES ---

/// Use DAX Formatter (batched) on every measure in the model

Model.AllMeasures.FormatDax();

```




Talking of repetitive tasks, have you ever tried giving the format strings to different measures? You can do it in Power BI, but I generally prefer to do this with TE. If you change the string Power BI always show working on it, which is normal, but it is just slow if you consider changing format strings for 100 measures. 

Can you do a bulk change in this also? YES!!! But a clear warning for this use case is that if you have 100 measures, not all measures need the same format string. So you clearly need to identify what format strings you have, and then you can use the C#scripts. There is a generic C# script available online, but after running, you would need to manually check that the correct string is applied to all measures.

In my recommendation, don't use the generic C# script; instead, let's do the basic stuff by changing the format string of all decimal numbers to whole numbers and vice versa with a comma separator.

```csharp
/ --- TOGGLE FORMAT STRING: Decimal  Whole Number ---
// Whole numbers with comma: "#,0"
// Decimals with comma + 2 places: "#,0.00"

bool onlySelected = true;   // true = run only on selected measures; false = run on all

var targets = onlySelected ? Selected.Measures : Model.AllMeasures;

foreach (var m in targets)
{
    // Skip if no expression (safety check)
    if (string.IsNullOrWhiteSpace(m.Expression)) continue;

    // If currently decimal -> switch to whole number
    if (m.FormatString == "#,0.00")
    {
        m.FormatString = "#,0";

```

How awesome is this? Another use case is to see the dependent measures. To do it, you select a specific measure and right-click on it to see the object dependencies. Select the option to show objects on which the measure depends, and when you expand and hover them, you will see the base measure too, and its definition.

[Image placeholder]

Let's do something more interesting. We will analyse the data model in TE. Before we continue, check under the View tab at the top if you have all the required functions selected.

[Image placeholder]

Once you have all of them selected, close the view tab and head to the relationships under the model. You will notice all the relationships that were made in Power BI are available here as well. Select one of them and you will see it is actually a replica of the manage model. You can do everything like you do in manage model - make a relationship inactive, delete a relationship...

[Image placeholder]

Last use case for today, and it is very commonly used to refresh an individual table. To do so, select the table that you need to refresh and right click, select script, select refresh, and choose the full refresh mode. Choose to the clipboard. This will generate a TMSL (Tabular Model Scripting Language) script.

[Image placeholder]

Once you have the TMSL script, we need to head to the SSMS (SQL Server Management Studio) and connect via the XMLA endpoint. Create a new query and paste the TMSL there. Run it and boom, your table got refreshed.

This is a very basic guide but if you like to have an intermediate version of TE guide where we can cover - copying measures from one PBIX to another, make changes to the Power Query without going to transform data, deploy the semantic model in workspace...do drop us a comment and we will cover it in the future blogs.
