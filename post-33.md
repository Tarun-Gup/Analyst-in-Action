# Field Parameters in Power BI

*Published on February 2023*

Have you worked with field parameters? Another functionality that Power BI offers is to improve your reports. What does it do for the users? At first, it looks like a button but it helps to toggle between different fields (can be columns or measures). Let's get our hands dirty and start with an example.

I am using sample superstore data. The idea is to make a clustered bar chart with profit and sales in it. On the Y axis, I need both category and subcategory. The basic approach will be just to add another level to the Y axis which will act as a drill down. But what if I say you don't need a drill down. Yes, that's possible with the use of field parameters.

Let's create one!! Go to the new parameter under modeling. Select the field parameter from there you will get a pop-up window that looks something like this. You can name your parameter and just drag the fields from the respective tables. I need only category and sub-category.

Pro tip- If you can't find the field parameter you need to go to the option and settings. In the preview feature, you need to enable the field parameter.

[Image placeholder: describe what the image will show]

Once you click OK it will create a slicer (default setting). I am selecting a slicer with tiles. My visual has this parameter (parameter 1) on the Y-axis. Sales and profit on the X axis. If you check the data model you can see the parameter there. Now you can easily toggle around between categories and sub-categories.

[Image placeholder: describe what the image will show]

Now, what if you want to add another field to the parameter or you want to edit the name of the fields that are showcased in the tiles. To do so go to the fields section in the report under it you can see the parameters. If you select the parameter you can see the DAX behind it. You can easily add or replace fields.

[Image placeholder: describe what the image will show]

Pro tip- A very basic thing when you are using field parameters. Be aware that don't mix measures and columns in it. For eg, in our case, we took categories and sub-categories which are columns. I can add more columns to it but adding a measure to it can give you strange results.

Let's take the field parameter to the next level. Currently, we only have category and sub-category but I also want to see overall total sales and profit. To do it we are creating a calculated column " None" which contains only text. Let's adjust the parameter accordingly.

[Image placeholder: describe what the image will show]

Isn't it easy? It will add another tile in your slicer and when you click it it will show overall profit and sales.

[Image placeholder: describe what the image will show]

Field parameters improve the quality of your report. I prefer to use them as slicers but you can play around with them. But make sure you don't use implicit measures in field parameters always go for explicit measures. To know more about implicit and explicit measures read our blog (link)*.


