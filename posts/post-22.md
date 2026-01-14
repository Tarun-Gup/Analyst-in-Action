# Dealing with High Cardinality columns

*Published on April 2024*

Are you still struggling with slow reports and a complex data model and you have tried every approach to optimise it? One of the major reason behind your slow reports are high cardinality fields. What is this cardinality now? The simplest definition for it would be the unique values present in a particular column. 

Do note we are talking about the unique values not distinct values there is a slight difference between these two.

Want to learn more about cardinality here is a [great article from Arno](https://www.linkedin.com/pulse/learning-power-bi-identify-cardinality-levels-columns-arno-wakfer-/). If you have a background in data analysis then the term cardinality may not be alien for you. When we talk about optimising the data model then it is always advised to reduce the cardinality as more the unique values available in a particular column  more it will take the memory and impacts the performance.

In this article, we will focus on a few easy steps to reduce the cardinality of the data model. The very fundamental and the simplest step will be to only include the fields that are necessary and identify the ones which are not used at all in the report. Discard them it will give your report a slight boost.

How to identify unused column? You can do it via the help of external tools such as DAX Studio. If you are beginner to DAX Studio then do visit our most visited article on it. You can connect to DAX Studio and view the metrics that will give you this information.  

[Image placeholder: describe what the image will show]

In this case, we have identified we are not using Product Key. When we get rid off the Product Key the size of your report reduced to half from 12mb to 5mb.

[Image placeholder: describe what the image will show]

Second, try to reap the benefits of splitting columns such Date/Time. Fundamental step will be to check do you need the time at all? In most cases you do not need it and you can change the data type to only date but if you need it then make sure date and time are split in 2 columns. 

Isn't this easy? This article mainly details with the fundamentals to optimize your reports. Another fundamental step is to check if you are dealing with the correct data type or not. How to check this? Longer route will be to go over each and every field and see the data type but as a reader of analyst in action you are PRO. 

How PROs do it? Once you are connected to DAX Studio you can view at a glance in view metrics. In the contoso dataset we have changed the data type for Quantity to decimal number. Let's see how the metrics look with the decimal number data type.

[Image placeholder: describe what the image will show]

Do notice the total size column for Quantity. Now, we are reverting back to whole number and you can see the drop in the total size.

[Image placeholder: describe what the image will show]

Lastly, try to avoid the use of calculated columns in your reports. Let's take an example from Contoso data, I have created a calculated column to get the cost. Now let's take a look what is exactly is happening behind the scenes. 

[Image placeholder: describe what the image will show]

Whhaattt!! suddenly you can see the Cost is on the top in your metrics which is actually not good for your data model. If you take a close look at the cardinality column for the Cost it is the highest and hence slowing down your data model. Now, imagine if you have 10-20 of those calculated columns. Avoiding calculated columns is always considered as a best practice in Power BI.


