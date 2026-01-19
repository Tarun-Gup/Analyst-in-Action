# Filter v/s Keepfilters in DAX

*Published on August 2022*

Do you struggle to spot the difference between different types of filters that are available in Power BI? It can turn out to be vague for beginners in Power BI. In today's article, we will refer to these filters and explain the purpose of each one of them. If you are a novice to Power BI then you must refer to our previous blog which covers an overview of different filters that exist in Power BI. (Different Filters in Power BI).

As most of you are aware there are countless methods to attain the same result using DAX but the key thing to keep in mind is the efficiency of the DAX formula in that particular situation. For this article I am using Sample Superstore data (you can download it from kaggle.com). I will demonstrate the purpose of every formula.

Let's get started!!! so the basic idea is to calculate sales for every sub-category and by using the filter formula I need to see sales in the corporate segment.   

```DAX

Corporate Sales =
CALCULATE ( SUM ( Orders[Sales] ), 'Orders'[Segment] = "Corporate" )

```

[Image placeholder: describe what the image will show]

The above-mentioned formula is the basic approach where you just specify the field (sales in this case) and the filter you need to apply to that field but if you are considering the performance of this formula then I would say there are better formulas that will perform much better when the dataset is quite large (millions of rows). What if I need another filter that is based on the region?? Another drawback is you can only refer to a single column filter in this formula but if you need to add multiple filter conditions then this formula won't provide the desired result.

The most interesting formula to attain the same result is via using the filter. The formula is quite similar to the basic formula and allows to add multiple filter conditions with two different fields present in the same table. 

```DAX

Corporate Sales using Filter =
CALCULATE (
    SUM ( Orders[Sales] ),
    FILTER ( 'Orders', 'Orders'[Segment] = "Corporate" )
)

```

[Image placeholder: describe what the image will show]

You can another filter condition apart from the segment just by adding && and the 'Orders'[Region]="East" {another condition}. This is suitable to compare different columns and measures

ProTip- If you are a beginner you should know the difference between filter and filters in DAX. Filters will return the whole table based on the applied filter so if I am applying this formula Filers('Orders'[Region]) then you will get only the different regions in that table. The values will be distinct. For more pro tips do follow us.

The last formula to achieve the same result is Keepfilters which is the most efficient and faster formula even with the multiple filter scenarios. It will keep the current filter and does not result in blank values. This can be look upon as an alternative to filter and all but the performance of keep filters is much better. Let's check how does the formula for keep filters look like.

```DAX

Corporate Sales with Keepfilters =
CALCULATE (
    SUM ( Orders[Sales] ),
    KEEPFILTERS ( 'Orders'[Segment] = "Corporate" )
)


```

All the three formulas provide the same result but when it comes to the performance I will prefer the keep filters but this choice can be subjective according to the situation. Keep filters is not a good choice when it comes to comparing the different columns. But it is more precise as compared to others on larger datasets.

