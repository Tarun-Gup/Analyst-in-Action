# Wrong Totals in Power BI

*Published on March 2023*

Yes, you heard it right Power BI still hasn't figured out how to show the correct totals. One of the most common questions in the Power BI community is related to it. So, let's figure out what can you do to correct your totals.

I am using Sample Superstore data to start getting rid of the implicit measures that have already been created. I am creating a matrix with categories and sub-categories. Let's include the total sales, total profit, and the total number of orders received (if you are wondering how these measures are created then it's just the sum of sales, profit, and distinct count of order ID respectively).

Protip- One of the best practices involves creating a separate table for measures (stand-alone table). In this case, we only have 5 measures but what if you have 70-80 measures all in the fact table.

[Image placeholder: describe what the image will show]

If you critically note the total for sales and quantity sold shows the correct total but if you sum up the total number of orders for furniture it doesn't sum up to 1764. Also, if we look at the total at the end for several orders it is 5009 which exactly matches the distinct count of the order ID.

[Image placeholder: describe what the image will show]

What's actually going on?? Let's debug this so the total on the matrix is the total where we haven't defined the level on which the calculation needs to be done so by default it shows me the distinct count of order id. There are multiple ways to correct this the most common approach will be using SUMX and values.

Let's see how it works. I am creating another measure using SUMX and Values. We will define the level as a sub-category and the measure will look something like this.

```DAX

Total Nr of Orders SUMX =
SUMX ( VALUES ( SampleSuperstore[SubCategory] ), [Total Nr of Orders] )

```

Now let's get back to our matrix. You can see now the total is corrected. But is it the correct number?

[Image placeholder: describe what the image will show]

With the new measure, you are creating an iterated sum on the level of the subgroup. 1764 in the furniture category shows the distinct count of order IDs and there can be two products in a category with the same order id. Thus, 1764 only shows the distinct order ID associated with a sub-category which is correct while on the other hand, 1984 can include the multiple order ID (can show wrong results). 

If you are using the above method be cautious about the level you want to sum. Another method is not so common but you can create calculated columns(follow the link to learn more about calculated columns)* This is something a BI developer doesn't prefer because calculated columns can come up with their own disadvantages.


