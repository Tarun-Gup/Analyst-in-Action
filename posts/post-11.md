# Playing with Totals in Power BI

*Published on April 2025*

Are you a fan of matrix visual in Power BI? If you are as I am, I always struggle to get the correct totals and get something else instead of the totals it can be average. After a lot of research and going over different community posts, finally we have found 3 common scenarios that can elevate your matrix to the next level.

To start with, I am using Sample Superstore data. Let's first explain the 3 different scenarios that we will tackle -
- We would like to show both Total Sales and Average Monthly Sales across different categories and different periods.
- We would like to show the Average Sales in the row subtotals and Total Sales in the column subtotals.
- Last and the most interesting scenario is to show the Total sales excluding the furniture sales in the row subtotals and total sales in the column subtotals.

Let's start by getting the correct totals in a matrix. Generally, if use basic Sum, Average... functions in your measures then most likely you will get the incorrect totals. But why? Very simple answer would be Power BI isn't smart enough to recognize the level on which Sum, Average... should be calculated. How to get it right then? Use of iterator functions such as SUMX, and AVERAGEX.. to know more about it in detail we would recommend having a quick read on one of the most popular blogs on our website- Wrong totals in Power BI.

Once you have the totals corrected we will start with the first scenario. So, we will pull Order Year (calculate column) in the columns and Category in the rows. For every year we would like to see Average Monthly Sales next to the Total Sales. We would need a different measure that will help to land into this condition if there is one value provided for the year then show the total sales otherwise the average sales are calculated with AVERAGEX.

```DAX
Avg Monthly Sales =
IF (
    HASONEVALUE ( 'Date'[Year] ),
    [Total Sales],
    AVERAGEX (
        SUMMARIZE ( 'Date', 'Date'[MonthNumber] ),
        [Total Sales]
    )
)
```
[Image placeholder: describe what the image will show]

We have utilized HASONEVALUE to define this condition. HASONEVALUE checks if a particular column has a single value if not then it returns FALSE. We have taken advantage of the FALSE scenario of HASONEVALUE. We would recommend, to refer the DAX Guide for HASONEVALUE to know in detail what else can be achieved with this function.

Easy peasy lemon squeezy!! 😂 Moving to the second scenario, now we are looking for a similar setup as the first scenario but this time we only need the average sales on the row subtotals and total sales as the column subtotals. To achieve it with a single measure we will take benefit of basic SWITCH and ISINSCOPE functions.

```DAX
Correct Subtotals =ITCH (
    TRUE (),
    ISINSCOPE ( SampleSuperstore[Category] )
        && ISINSCOPE ( SampleSuperstore[Order Year] ), [Total Sales],
    ISINSCOPE ( SampleSuperstore[Category] ), [Average Sales],
    ISINSCOPE ( SampleSuperstore[Order Year] ), [Total Sales],
    [Total Sales]
)



```

To calculate Average Sales we are using this measure


Average Sales =
CALCULATE (
    AVERAGEX ( VALUES ( SampleSuperstore[Order Year] ), [Total Sales] )
)
