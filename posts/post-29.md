# Rolling Totals vs Running Totals

*Published on April 2023*

When working with totals in Power BI running totals and rolling totals are the most common ones used to see trends. It can be confusing at times. This article will cover the purpose of both the totals and how you can create DAX for them?

Let's start with the running totals. It is quite similar to Year to Date(YTD). What is YTD? YTD covers all the data points from 1st Jan of the respective year till the recent date. We have a separate DAX that is DatesYTD. But what if you want to do the same but from a year in the past. 

```DAX

Sales Running Total =
VAR MaxDate =
    MAX ( 'Date Table'[Date] )
RETURN
    CALCULATE ( [Total Sales], 'Date Table'[Date] <= MaxDate, ALL ( 'Date Table' ) )

```
We want the total sales where the current date is less than or equal to the maximum date. It will cover all data points in the past. In the below-mentioned image you can see values in the last column for 2012 is actually the sum of sales in 2011 and 2012.

[Image placeholder: describe what the image will show]

Isn't it amazing!! Running totals can help you analyze the trends over a long period of time. In the example, we saw the trend from 2011 to 2014. Let's take a deep dive and analyze the trends for the last 3 months.

Rolling total can help to achieve this. It can go back for 3 months in this case and calculate the total. If you are in April and you need the sum of sales for the last 3 months (Jan, Feb, and March) you can achieve it using the below-mentioned DAX.


```DAX

Rolling Sales 3 months =
CALCULATE (
    [Total Sales],
    DATESINPERIOD ( 'Date Table'[Date], MAX ( 'Date Table'[Date] ), -3, MONTH )
)

```

I am using DATESINPERIOD and taking the current date to 3 months back. There are different ways by which you can achieve the same for eg you can also use DATESBETWEEN instead of DATESINPERIOD. 

[Image placeholder: describe what the image will show]

With the DAX we are getting the results that include the current month as well. So, the sum at last is actually the sum of months 10,11, and 12. But we need to exclude the current month.


```DAX

Rolling Sales 3M excluding current month =
CALCULATE (
    [Total Sales],
    DATESINPERIOD (
        'Date Table'[Date],
        EOMONTH ( MAX ( 'Date Table'[Date] ), -1 ),
        -3,
        MONTH
    )
)

```

You need to exclude the current month using EOMONTH. Rest DAX remains the same.

[Image placeholder: describe what the image will show]

Next and the most crucial aspect is to visualize the rolling total. It is actually the trend over a certain period so the user wants to see this along with the total sales. You can use Line and stack column charts. You can also do the same for 12 months.

[Image placeholder: describe what the image will show]

Protip- You can also use quick measures to get the running total. To know more about quick measures follow the link.


