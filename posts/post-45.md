# 7 Commonly used DAX expressions in Power BI

*Published on June 2021*

In today's blog, we will focus on making the Power BI journey more riveting in nature. We will target the Data Analysis Expressions (DAX) in Power BI. Let's get started by getting a gist of it. DAX is a sort of language in Power BI which helps to create measures, calculated columns, and customized tables by using various functions and operators. It makes the Power BI more interactive in nature which can result in better visualization.

We will focus on the seven most commonly used DAX expressions in Power BI. These can vary according to your needs but according to my novice experience, these expressions prove out to be very common and nifty in nature. So let's jump to the expressions. We are using sample superstore data for every expression.

- Sum and SumX- As the name suggests sum is responsible to add all the values in the column. But if you spot the difference between the two the latter one is responsible for returning the sum of expressions for each row in the table. For SumX we are calculating cost which is the difference between the sales and profit.

```DAX

Sum of Sales =
SUM ( Orders[Sales] )

```

```DAX

Cost =
SUMX ( Orders, Orders[Sales] - Orders[Profit] )

```

[Image placeholder: describe what the image will show]

[Image placeholder: describe what the image will show]

- Average and AverageX- It is responsible for taking an average to all the values present in a column and AverageX is similar to SumX because it focuses on averaging the expressions for each row in the table. To get a better understanding of AverageX we will calculate avg sales per day.

```DAX

Average of Sales =
AVERAGE ( Orders[Sales] )

```

```DAX

Average of Sales per day =
AVERAGEX ( VALUES ( Orders[Order Date].DATE ), [Sum of Sales] )

```

[Image placeholder: describe what the image will show]

[Image placeholder: describe what the image will show]

- Minimum and Maximum- Min function is responsible for returning the minimum value in the column or expression similarly Max function is responsible for returning the maximum value in the column or expression. We are taking the minimum for sales according to the subcategory.

```DAX

Min of Sales =
MIN ( Orders[Sales] )

```

[Image placeholder: describe what the image will show]

- Calculate and Filter- These are the important and fundamental DAX. By using calculate function you can evaluate any functions by applying some specific filters. Both of them are interrelated where both of them result in an aggregated measure. To get a better understanding of it we are calculating binders (one of the subcategory) sales.

```DAX

Binder Sales =
CALCULATE (
    Orders[Sum of Sales],
    FILTER ( Orders, Orders[SubCategory] = "Blinders" )
)

```

- Switch- This is one of my favorites functions as it will help you to get rid of nested ifs statements which can sometimes become baffling. It gives results based on several logical conditions. We are assigning different colors for different delivery modes or ship modes.

```DAX

Ship Mode Color =
SWITCH (
    SELECTEDVALUE ( Orders[ShipMode] ),
    "First Class", "Green",
    "Same Day", "Red",
    "Second Class", "Tan",
    "Standard Class", "Yellow",
    "White"
)

```

[Image placeholder: describe what the image will show]

If you only apply the ship mode color measure then you won't get different colors for different ship modes. To get that you need to do conditional formatting based on the field value which is ship mode color. There can be more DAX expressions that can be used often but all the above-mentioned DAX is heavily used by me. 
