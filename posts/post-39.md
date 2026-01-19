# All, AllSelected and AllExcept in DAX

*Published on August 2022*

We have several types of ALL available in the DAX and it is quite difficult to write a DAX using any of them if you aren't aware of each of them and the purpose they serve in different situations. In today's article, we will mainly focus on ALL, ALLSelected, and AllExcept. I will highlight the purpose of each of them and the difference between them.

Let's get started with the basic DAX which every BI Analyst or DAX expert is familiar with. Before diving into the DAX let's define the use case. We are currently using the Sample Superstore data. The idea is to look for corporate sales in the east region. If you want to know how to calculate Corporate Sales using filters and keep filters you can refer to one of our old blogs (link)*

```DAX

East Corporate Sales =
CALCULATE (
    [Corporate Sales],
    FILTER ( ALL ( Orders[Region] ), Orders[Region] = "East" )
)

```

[Image placeholder: describe what the image will show]

Corporate Sales is another measure that we defined using simple DAX. If we are using only ALL( ) that means we are avoiding every type of filter whether it is coming from the query or it is coming from the slicers applied for that filter. You can also achieve the same result as mentioned above by using filters just by selecting the east region and corporate segment in the filters for this table. 

Pro Tip- You can use All with and without the argument that means if I am providing any condition such as filter along with it then it will work as an expression to filter out otherwise if I am using it with the CalculateTable it will remove all sorts of filters and then we will get all values in the table.

Now let's see ALLSelected. As we are aware All won't include any filters but ALLSelected will include filters that are applied via slicers (on the visuals) and exclude the filters that are applied in the query itself.

We will take the same example as above and we will calculate sales with ALLSelected. The result will be the same. As mentioned in the below image we only passed one argument/condition in the formula but you can pass multiple arguments.

```DAX

East Corporate Sales All Selected =
CALCULATE (
    [Corporate Sales],
    ALLSELECTED ( Orders[Region] ),
    Orders[Region] IN ( "East" )
)

```

[Image placeholder: describe what the image will show]

You can easily replace the ALL by using the RemoveFilters but you can't do the same with AllSelected. It is quite difficult to summarize AllSelected as it can be very complex in different situations. This is just an overview of what it does we will try to come up with a dedicated article on AllSelected in the future. I would say AllSelected is much better than All but make sure you are using it in the right situation.

At last, we will take a look at ALLExcept which is also most commonly used in DAX. I am considering the same situation in the matrix.

[Image placeholder: describe what the image will show]

In the above image you can see the same value for every subcategory in the highlighted column it is because AllExcept removes the filter from all the columns in the orders table except the region and hence we are getting the same value. Here is the formula that I used.

```DAX

All Except Sales =
CALCULATE ( [Corporate Sales], ALLEXCEPT ( Orders, Orders[Region] ) )

```



