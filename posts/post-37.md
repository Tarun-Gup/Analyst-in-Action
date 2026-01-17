# Implicit V/S Explicit Measures in Power BI

*Published on September 2022*

As a Power BI developer, whenever you connect a dataset, you often see sigma in front of different fields in your table. What is the significance of this sigma and how will it hamper the performance of your dashboard? We will answer all those questions in this article.

Let's dig deeper into all the fields with some symbols such as sigma called Implicit measures. Such measures are automatically created by Power BI which is a default setting so whenever you drag such a measure into a table or any visual it will provide a sum (if the sigma is in front of that field). Let's try it with a sample dataset.

I am using the SampleSuperstore dataset. We will be checking the profit associated with different categories. I am taking both category and profit in the table. In the below-mentioned image, you can see we are getting profit with every category.  

[Image placeholder: describe what the image will show]

Easy peasy!!!! in such a case default does the job but what if we don't want a sum. To obtain that go to the columns and select the dropdown menu and you can see a variety of options also there is an option that allows you to not summarize that particular field.

[Image placeholder: describe what the image will show]

It is quite easy to use implicit measures but surprisingly according to the best practices in Power BI you should try to avoid using implicit measures. But why?? There will be no significant change in the performance but every time you use an implicit measure you need to select the correct option (average or sum) and the options are limited. 

So what should be considered good practice in Power BI? Generally Power BI developers try to hide the implicit measures and instead create an explicit measure using basic DAX expressions which will give you more grip on the report and you don't need to worry to change the aggregation to average or something else.

Let's see the example of what an explicit measure looks like. We will consider the SampleSuperstore data and we will calculate the profit associated with different categories.

[Image placeholder: describe what the image will show]

In the above-mentioned image, we are getting the same result as the implicit measure but by using a basic DAX expression. (How to create DAX?)

There are a lot of pros associated with explicit measures but it can be a tiresome task to create several explicit measures one by one. But what if I tell you can create explicit measures in a matter of few clicks!!! Yes, you can do it using tools such as Tabular Editor. To know more about [Tabular Editor](https://tabulareditor.com/).


