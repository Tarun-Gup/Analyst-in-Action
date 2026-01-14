# POST TITLE

*Published on July 2023*

Data modeling is an essential part of creating perfect visuals. While creating complex data models there can be a case where you can find an inactive relationship represented by dotted lines and it occurs because you already have an active relationship between the two tables. But as a developer, you need to use both the relationship. How can it be done? You can use "Use Relationship" in such cases.

Use relationship can be added to your DAX and act as a modifier or enhancer for calculation. It activates the inactive relation. But make sure you have an inactive relationship in place before using the use relationship function. Let's see how it works on Sample Superstore data. In my fact table I have two dates- Order date and Ship date. I am making the two relations between my date table and fact table.

[Image placeholder: describe what the image will show]

The relation between the sample superstore (date) to date table (date) is active while the relation between the sample superstore (ship date) to date table (date) is inactive which is quite predictable behavior. The latter is represented by dotted lines.

[Image placeholder: describe what the image will show]

I am looking to calculate the sales amount based on the shipping date. Is it possible with inactive relationships? Yes, we will make use of the relation along with the calculation. Our DAX will look like this.

[Image placeholder: describe what the image will show]

```DAX

Total Shipping Sales =
CALCULATE (
    [Total Sales],
    USERELATIONSHIP ( 'Calendar'[Date], SampleSuperstore[Ship Date] )
)

```

Total sales is an explicit measure that calculates the sum of sales amount. To get a better understanding of implicit and explicit measures we recommend reading this article(Link). Using relationship is helping to activate the inactive relation we created between the sample superstore and the date table based on the shipping date. Let's see how it looks when compared with total sales.

[Image placeholder: describe what the image will show]

The difference between Total Sales and Total Shipping Sales is evident because of the different relationships being used while calculating total shipping sales. This is the power of use relationship and is heavily used when you have lots of inactive relationships.

The next question that comes to mind is can I use this function in a calculated column? The perfect use case is to get a particular column from a different table into your fact with the help of related. Related function only works when you have an active relationship between the tables. The inactive relationship doesn't work with this function. It's better to achieve this with a lookup value.

With lookup value, you do not need to create the relationship between two tables. To know more about how related and lookupvalue works do visit this article (Link). I would highly recommend visiting the article from [SQL BI on this topic](https://www.sqlbi.com/articles/using-userelationship-in-dax/).



