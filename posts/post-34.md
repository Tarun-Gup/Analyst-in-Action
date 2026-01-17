# Tips and tricks for Data Labels

*Published on December 2022*

If we talk about the level of detail then data labels can make your visuals stand out and add more context to them. There is a flip side too with them. The most common issue is when you put the data labels it creates a bit of a mess in your visuals and it becomes an intricate task if you consider the readability for the end users. That's not the objective of visualization.

Let's consider a use case where we are creating a basic line graph with the evolution of discount percentages over a period. We are considering Sample Superstore data. Also, we have enabled the data labels for the whole series.

[Image placeholder: describe what the image will show]

You can play around with the formatting of your data labels. We can adjust the position, colors, and much more. If you focus on the title of the visual it's dynamic in nature and depends on the selection in the slicer. To know more about dynamic titles you can follow the link. From a visual point of view, the abovementioned visual is not so intuitive in nature. 

To make it more intuitive we can reduce the number of labels and just show the minimum and maximum discount percentages. This will take the normal line graph a step ahead. How to do it? If you consider other BI tools such as Tableau this feature is just a toggle but in Power BI you can do it with the help of basic DAX.

We are creating two DAX named Max Discount and Min Discount. The formula is very basic and uses MaxX and MinX. It will return the largest and the smallest value of the Discount Percentage.

```DAX

MAX Discount =
VAR Period =
    ALLSELECTED ( SampleSuperstore[OrderDate] )
VAR GetMaxValue =
    MAXX ( Period, 'SampleSuperstore'[Discount%] )
RETURN
    IF ( [Discount%] = GetMaxValue, GetMaxValue, BLANK () )


```

```DAX

MIN Discount =
VAR Period =
    ALLSELECTED ( SampleSuperstore[OrderDate] )
VAR GetMaxValue =
    MINX ( Period, 'SampleSuperstore'[Discount%] )
RETURN
    IF ( [Discount%] = GetMaxValue, GetMaxValue, BLANK () )


```

It's very basic and does the job so first disable the data labels from the formatting and put these measures in the Y axis. 

[Image placeholder: describe what the image will show]

Once you put these measures in the Y axis then you can format it. The most basic thing is to change the color. Generally, I put red for minimum and green for maximum. You can adjust it according to your needs. You can find it under colors in the formatting pane. 

So back to the data labels enable it and you have to look for Apply settings to. Under that, you can see three options- Discount, Max Discount, and Min Discount. Select the Discount and disable the toggle to show data labels. Then select the Max discount and enable the toggle for data labels. You have to do the same for the Min discount.

[Image placeholder: describe what the image will show]

Once you do that you can see the desired results. Only labels for the min and max discount are there on the line graph. Such tricks give an extra edge and add a level of detail to your visuals. For more tips and tricks do follow us.

