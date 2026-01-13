# Highlighting Top 10 with RankX and TopN

*Published on May 2024*

Happy Friday!! If you have worked with other BI tools such as Tableau setting up the Top 10 is relatively easy but in Power BI you have dedicated functions such as RankX and Top N to do this. In this blog we will see how to highlight and filter out the TopN Sub Categories based on the Sales recorded in 2013.

Before we start. Here are a few pre-requisites we are using Sample Superstore data and we have created an explicit measures called "Total Sales". If you aren't familiar with implicit and explicit measures do read this article. Total Sales is equivalent to Sum of Sales. 

We will start with RankX. The goal here is to highlight the Top 10 subcategories based on the Total Sales occurred in the year 2013. Refer to the image below.

[Image placeholder: describe what the image will show]

How to make this? We will start creating a basic DAX which will provide rank to different sub categories. Make sure you provide an order in the DAX itself. In this case we have provided "DESC- descending". Once you have the DAX ready pull it in the matrix to see if we are getting the correct rank based on the sales figure.

[Image placeholder: describe what the image will show]

One common mistake is to not provide ALL inside the RankX. If we do not provide ALL then your DAX can't interpret the level at which the ranks should be assigned at. In this case we have given Sub Category inside ALL.

Once you get the correct rank in place we can go to the bar graph. But we still haven't provided any color in the DAX. Yes, correct we need to write a separate DAX to give Green color to the Top 10 bars. 

[Image placeholder: describe what the image will show]

We have created a basic DAX with simple IF statement stating if the RankX measure is greater or equal to 0 then show green color ("green color code"). After this we need to go the formatting and select the conditional formatting of the bars. It will open up a pop up window where we need to select the field value and select the measure.

[Image placeholder: describe what the image will show]

Isn't it amazing? Let's take it to the next level. What if I say we can make this formatting dynamic in nature. What if the end user can change Top 10 to Top 5 and your visuals changed accordingly. Yes, that is possible in Power BI. We will reap the advantage of Numeric Range Parameter.

To create parameter go to the Modelling section in the top ribbon and select Numeric Range under New Parameter. This will open up a pop up window.

[Image placeholder: describe what the image will show]

Since I only have 18 sub categories I chose maximum as 20. Once you create the parameter a new slicer will be created but this slicer doesn't have any impact on the bar graph. To enable the interaction between these 2 we need to adapt the DAX.

[Image placeholder: describe what the image will show]

Can you figure out the changes made in this DAX? We have moved to Switch from If and instead of providing a number we have given TopN Value which will make the new slicer coming from the parameter into the play. 

[Image placeholder: describe what the image will show]

What if we only want to show the Top N bars and rest of the bars shouldn't appear at all. To do this we are using TopN function. TopN function is actually a very straight forward. 

[Image placeholder: describe what the image will show]

Wait!!! What???? I thought TopN is straight forward. There is no error appearing in the DAX. This is one of the common mistakes. The error says the expression refers to multiple columns.Let's get rid of this error message.

[Image placeholder: describe what the image will show]

Can you notice the changes? We have included the Calculate and Values. With the help of Values we have provided unique values and hence we get Top 10 sub categories. 

Let's use the parameter of TopN and combine with the Sub Category Rank with TopN measure. This will allow us to showcase only TopN bars. To do so we need to adjust our DAX a little bit. Instead of providing a number 10 right after TopN we will include the TopN value. Easy peasy!!! Similarly you can create measures for BottomN just by changing the order from Desc to Asc.

[Image placeholder: describe what the image will show]

