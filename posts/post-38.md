# Variables in DAX 

*Published on September 2022*

Variables!!!! doesn't it sounds familiar? It is an integral part of almost every computer programming tool. Also, it plays a significant role in DAX. Let's start from square one if I introduce Var in the DAX statement that means introducing a variable. Generally, you can use variables with different combinations in DAX but there is a mandatory syntax to pass at the end of it i.e. Return where you define what value that DAX should return if the defined condition matches and the alternate result to it.

So let's clear out the ambiguity I will show how the variable works by using them in DAX under different conditions. I am considering Sample Superstore data to test the VAR. The use case is getting the West region Sales. For that, we are defining the Total Sales or Overall Sales by using the Sum of Sales and we will showcase all different regions and their respective sales.


```DAX

Overall Sales =
CALCULATE ( SUM ( SampleSuperstore[Sales] ) )

```

Now, I am looking for West Region Sales. You can achieve the same by using the Calculate and filters (How to use Calculate and Filters?)* but let's try to achieve it by Var. We will define a variable called "WestSales" for that.

```DAX

West Sales =
VAR WestSales =
    FILTER ( ALL ( SampleSuperstore[Region] ), SampleSuperstore[Region] = "West" )
RETURN
    CALCULATE ( [Overall Sales], WestSales )

```

[Image placeholder: describe what the image will show]

Now, I am looking to get the percentage of sales for the west region by dividing the west sales by the overall sales. We can do this using basic calculation and dividing but let's explore how can we do the same using VAR. 

```DAX

Percentage of Sales =
VAR SalesTotal = [Overall Sales]
VAR WestSales = [West Sales]
RETURN
    DIVIDE ( WestSales, SalesTotal )

```

As you can see we defined two variables SalesTotal and West Sales also. Let's take all the sub-categories in the matrix and let's see how much percentage of sales is contributed by West.

[Image placeholder: describe what the image will show]

Yes, that's how variable functions in DAX but if you can achieve the same result without Var then why should we opt for this? Yes, you can achieve the same without Var but let's consider a scenario where you have to create lots of measures with the same fields. Generally, it occurs when you are trying to create YoY, MoM, and so on.

In such case you have to use the same field such as Sales or it can be Profit then it will be a cumbersome and repetitive task to write the same DAX again and again with a slight change. To avoid that you can use Var and define your basic DAX such as Sales last year. You can use the same variable over and over which makes the length of DAX much shorter but also improves the performance of your report. You can use the Variable to define a table or you can introduce a new calculated column using it


Pro Tip- The most important thing to keep in mind is when we are using the VAR it provides a fixed value that is not affected by a filter context.

Using VAR always proves to be beneficial as it reduces the repetitive tasks of creating the same measure over and over but you have to be very clear and decisive when you are defining the naming convention of your variables. 

