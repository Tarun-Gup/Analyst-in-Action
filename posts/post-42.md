# POST TITLE

*Published on DATE*

You must be aware of the purpose and significance of Vlookup in Excel. But when it comes to Microsoft Power BI there is no Vlookup in it. Power BI provides you Related and Lookupvalue which is quite similar to Vlookup in Excel. If you aren't familiar with the Vlookup kindly refer to our blog*.

Let's get started with the purpose of both functions. You will be shocked to know that both of them will give you the same result. Because it follows the same principle of Vlookup i.e. searching for a particular value in a column and returns a value from a different column (different table). In this blog, we will showcase how and when to use related and lookup values. We will be using Sample Superstore data.

The question that comes to my mind is when to use the related functions? So there are certain criteria to be met before creating a column with related. One of the conditions is that both the tables (one where we are creating a column and the other will be from where the value will come from) should have an active relationship between them. When we talk about relationships in Power BI you have to discuss the cardinality of every relationship. In this case, you will require many to one or one to one relationships to make this function work. We are considering the orders table and return table. The idea is to get the return status in the order table.

[Image placeholder: describe what the image will show]

[Image placeholder: describe what the image will show]

As you can see we created many to one relationship between both tables and it is an active relationship. We met the basic criteria and now we will create a calculated column with the help of related.

```DAX

Return Status =
RELATED ( Returns[Returned] )

```

[Image placeholder: describe what the image will show]

[Image placeholder: describe what the image will show]

Currently, we are filtering the blank values in the return status column which is something I do not like about using related because it does not provide any options for giving an alternate result. This is my opinion but if you consider the performance of this function it is much better than the lookup value as it only uses one parameter. It's always a better option if you can establish relationships between different tables.

But what if we do not have any relationship? No problem!! we have Lookupvalue for that case. As I already mentioned it will give you the same result as the related. The syntax for the lookup value may seem to be difficult to grasp but it is very similar to vlookup. Let me walk through the syntax before its application.

- Result Column Name- Column that contains required value so in our example it will be the returned from returns table
- Search Column Name- Column that contains search value. It will be the Order ID available in the returns table
- Search Value- Value you are looking for in the search column.
- Alternate result- Value you can provide in case you have blanks in the data

```DAX

Return Status =
LOOKUPVALUE ( Returns[Returned], Returns[Order ID], Orders[Order ID] )

```

[Image placeholder: describe what the image will show]

We will provide "Not Available" to all the blank values in the return status. The only addition is the text to the alternate result. It is optional but I would prefer to provide it.

```DAX

Return Status =
LOOKUPVALUE (
    Returns[Returned],
    Returns[Order ID], Orders[Order ID],
    "Not Available"
)

```

[Image placeholder: describe what the image will show]

In many cases, you will get the blank because there are no matches available for that particular field. When it comes to the performance the former is quite faster than the lookup value but if you see the query behind both of them lookup value has a more optimized query running behind it. I would choose lookup value anyway as there are no specific criteria to be met and also I can avoid blank values by providing an alternate result.

