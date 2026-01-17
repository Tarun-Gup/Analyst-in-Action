# Summarize in DAX

*Published on October 2022*

Let's consider a situation where you have one big fact table and you need to create several tables out of it using different columns. The most obvious way is to do it in the backend but it can be time-consuming. What if we can do the same in DAX itself without going back to the source. The solution is quite simple and DAX calls it "Summarize". 

It's quite evident what this function does from the name. You guessed it right!!!! It gives a summary of the fact table based on your selection of fields. To get a better grasp of this function we will take a couple of use cases. We are considering Sample Superstore data and the only fact table is "SampleSuperstore". I want to explore only the geographical data and associated quantity and profit with every city. 

First, we need to create a new table {you can do so by going to Modelling and there in calculations, you can find a new table}. Once you select a new table you have to provide a DAX formula before doing so rename your table. 

```DAX

Geographical Data =
SUMMARIZE (
    'SampleSuperstore',
    SampleSuperstore[Country],
    SampleSuperstore[Region],
    SampleSuperstore[City],
    SampleSuperstore[PostalCode],
    "Units Sold", SUM ( SampleSuperstore[Quantity] ),
    "Profit by Location", SUM ( SampleSuperstore[Profit] )
)

```

ProTip- In the above-mentioned image you can arrange the order of columns in the formula itself. Arrange them as per your need. Also, if you critically observe we have provided different names for quantity as units sold. As it is text it needs to be in double quotes and before the field. 

[Image placeholder: describe what the image will show]

Isn't it simple?? Now let's move a step further and I am introducing segment also in this table. As an exercise, you can try it on your own. Once you get the segment we need to only showcase data for the Corporate segment. I have to introduce a filter in the DAX but the question is where should we insert it? To know more about filters in DAX refer to one of our old blogs (link)*

```DAX

Geographical Data for Corporate =
SUMMARIZE (
    FILTER ( 'SampleSuperstore', 'SampleSuperstore'[Segment] = "Corporate" ),
    SampleSuperstore[Country],
    SampleSuperstore[Region],
    SampleSuperstore[City],
    SampleSuperstore[PostalCode],
    "Units Sold", SUM ( SampleSuperstore[Quantity] ),
    "Profit by Location", SUM ( SampleSuperstore[Profit] )
)

```

So now we have our answer. Keep in mind all the parentheses and commas while writing long formulas like the one mentioned above.

[Image placeholder: describe what the image will show]

Let's add a bit more complexity to it. When you will write summarize you can see there is a function called "Rollup" which is quite an essential part of Summarize family. What is the purpose of this function? It is mainly used to get subtotals and totals inside your table. You will get blank values that highlight the subtotals and totals.

How does it function? We are taking the same formula and we are putting all geographical fields under it. This is how your formula will look once you introduce this function.

```DAX

Geographical Data with Rollup =
SUMMARIZE (
    'SampleSuperstore',
    ROLLUP (
        SampleSuperstore[Country],
        SampleSuperstore[Region],
        SampleSuperstore[City],
        SampleSuperstore[PostalCode]
    ),
    'SampleSuperstore'[Segment],
    "Units Sold", SUM ( SampleSuperstore[Quantity] ),
    "Profit by Location", SUM ( SampleSuperstore[Profit] )
)


```

To compare we have taken another table with the same formula but without the rollup. And the formula will look like this.

```DAX

Geographical Data without Rollup =
SUMMARIZE (
    'SampleSuperstore',
    SampleSuperstore[Country],
    SampleSuperstore[Region],
    SampleSuperstore[City],
    SampleSuperstore[PostalCode],
    'SampleSuperstore'[Segment],
    "Units Sold", SUM ( SampleSuperstore[Quantity] ),
    "Profit by Location", SUM ( SampleSuperstore[Profit] )
)

```

To get a better idea we will go to the visualize mode and take the table and pull all the geographical fields and units sold. Make sure there should not be any summarization happening. We don't need any implicit measures in the table (Implicit measures vs Explicit measures).

[Image placeholder: describe what the image will show]

We have particularly filtered it for the region "West" and the city "Albuquerque". In the left table, we can see duplicate rows representing the same data. These duplicate rows represent the subtotals.

Protip- Rollup can only be used as part of Summarize. Also, make sure the order you provide to the Rollup function. In our case, I have provided the Postal code as the first base to get our rollup values. Hence you see blanks in the Postal Codes column in the left table.

Summarize is a bit different from Summarize columns as the latter only gives filter context and only be used in particular scenarios but summarize can be used in both filter and row context and hence can be used in almost every scenario.

