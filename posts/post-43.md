# Append v/s Merge in Power BI

*Published on February 2022*

Let's discuss another problem of the week. As a Power BI user, there are times when you want to combine queries. What are the ways to do so? In most cases, you can attain it by using either append or merge and both serve different purposes. Let's understand what do these terms mean in Power BI and how they are functionally different from each other. 

It is quite common to get data from various sources and you need to combine those data depending on a particular column which is common in both tables so that you can add extra information or column to your big table. In such cases, we use merge queries. How to perform merge queries? For instance, I am considering Sample Superstore data and we will merge the returns table to the order table. You will find both merge and append in the home tab in extreme right in the power query editor.

[Image placeholder: describe what the image will show]

ProTip- You will find two options when you click on the drop-down in merge which are merge queries and merge queries as new. When you use merge queries as new you will make the query dependencies more complex. It's much better to use merge queries.

[Image placeholder: describe what the image will show]

So, when you select the merge queries option there will be a pop-up box that will open, and there you can select the common columns in both queries and you can also select the type of join you need as you can see in the below picture Power BI offers a lot of options on the type of joins so choose your join wisely.

[Image placeholder: describe what the image will show]

I am selecting the left outer join for this merge and once you select the ok at the bottom of this pop-up box you will get a column added to the main query which is orders in our case. But you can't see any data in it why this is so? This is mainly because the return query contains two columns and you didn't specify which data needs to be showcased in the orders table. You can do it by clicking on the button which is available at the right in the new column and there you can unselect the order id and you will see only the return status data.

[Image placeholder: describe what the image will show]

[Image placeholder: describe what the image will show]

Isn't it easy? Just a matter of a few clicks and you will see the results. Let's do the same for append too. But before that, I created a sample data where one table consist of Customer Name for 2017 and the other table consists of Customer Names for 2018. We will use append in case to combine rows from different tables. You need to make sure that both table contains the same column in the same order. We will append queries and it will lead to a pop-up box where you need to select both the tables.

[Image placeholder: describe what the image will show]

[Image placeholder: describe what the image will show]

Append 1 is the primary table which contains customer information from 2017 and sheet 1 contains the same information from 2018. You can change the primary table according to your needs. You can see the result in the below picture.

[Image placeholder: describe what the image will show]


