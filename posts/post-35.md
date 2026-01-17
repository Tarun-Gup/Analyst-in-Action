# Dynamic Titles in Power BI

*Published on November 2022*

As Power BI users, we use titles for visuals or for pages. But what if I tell you to make the title of your visual more intuitive in nature. Is it possible? Yes, it is think of a scenario you have a slicer and a bar graph on a page.

The management requested to make the title on the bar graph dynamic in nature. So let's dig deep into how can we build dynamic titles for your visuals. I am considering Sample Superstore data. The use case is to create a stacked column chart with a slicer of the city on the page. On the X axis, we are taking Category and Sub Category and on the Y axis, we are taking Sales amount. Now, if you see the title of the column chart it's static and doesn't change with the selection in the slicer. To make it dynamic in nature we will create a simple measure.

```DAX

Selected City =
"Sales for " & SELECTEDVALUE ( SampleSuperstore[City], "US" )

```

The DAX is quite simple in this case if we consider the selected value first we need to specify the column name and then we need to specify the alternate result if nothing is selected in the slicer.

Go to the formatting pane on the right and in the title section of the visual, you can see the conditional formatting. It will take you to a pop-up as mentioned below.

[Image placeholder: describe what the image will show]

As mentioned in the above image we have selected the measure in the field section. Click on OK and you can see if you select any of the cities it will show the city name in the visual. If you clear the selection in the slicer the title will show "Sales for the US".

[Image placeholder: describe what the image will show]

Isn't it simple?? Let's take it a step further if someone does multiple selections in the slicer then this measure won't show the right result to do so we need to create another measure.

```DAX

Visual Title Multiple =
VAR CityName =
    CONCATENATEX ( VALUES ( SampleSuperstore[City] ), SampleSuperstore[City], "/" )
RETURN
    "Current Selection(" & CityName & ")"

```

The idea behind this DAX is to get concatenate a list of values in this case city and return a text (last line). Now if we select multiple cities in the slicer the visual title will adjust according to the measure. After creating the measure we need to put it in the field section in conditional formatting. Same as it was in the previous case.

[Image placeholder: describe what the image will show]

We can do the same using quick measures for that create a quick measure and in the calculation, we need to select the concatenated list of values, in the field we will take the city.

[Image placeholder: describe what the image will show]

It will create a measure and we need to put it in the field in the conditional formatting of the title. Isn't interesting?? You can use dynamic titles to take your reports to next level.

