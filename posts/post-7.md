# Going level beyond with Field Parameters

*Published on July 2025*

Field parameters are widely used to change fields or measures dynamically in a visualization. If you are new to field parameters, we have covered the basics of field parameters in one of the earlier blogs.

Related Read: Mastering Field Parameters in Power BI

Field parameters are a powerful way to let users dynamically switch between different fields (like columns or measures) — no drill-down needed. This hands-on guide walks through how to use field parameters to create flexible visuals, build custom slicers, and improve report interactivity. You'll also learn tips on editing parameters, handling implicit vs. explicit measures, and avoiding common mistakes.
In this blog, we will take it to the next level. Before we get started, I am using Sample Superstore as my dummy data. So let's get started, and we are first creating a basic field parameter taking all basic measures - Total Sales, Total Quantity, and Profit. We are dragging this field parameter in a basic table visual.

[Image placeholder]
Nothing new 🙁, there is a hidden surprise if you closely notice the field parameter called KPIs we have slightly modified the slicer settings and provided the Select all instead of selecting different fields one by one. Also, you can turn this slicer into a new button slicer to improve the UI for your reports.

Since you are warmed up now, let's focus on the real deal - so I would need all these KPIs as field parameters. Hang on but the surprise I also want to show Current Year (CY) and Last Year (LY) values too. So, if I select Sales as my KPI then the visual should show me Sales CY and Sales LY together in different columns 😵‍💫

How are we going to achieve this? Okay, this is where we need to go a level further with field parameters. First, we need to ensure we have two different field parameters for CY and LY. Basically, all CY measures in one field parameter and all LY measures in another field parameter.

[Image placeholder]
Once you have it, then we need to focus on connecting these two field parameters somehow. To do so, we will be creating a small table, where we will just enter the KPI names like Sales, Quantity, and Profit. Let' create the table - go to the Enter data section from the top.

[Image placeholder]
This will open a pop-up where we need to manually enter the KPIs - Sales, Quantity, and Profit. I have named this table "Bridge". Now, let's head to the data model and try to connect all three.

[Image placeholder]
To connect our bridge table will act as a connecting table between the CY and LY field parameters. But wait, what is going to be the key for this join? Yes, great question, we need to create a key in both field parameters.

To do so, we need to head to the field parameter DAX and add another ',' right after the numeric values. We need to ensure we are providing the same names as we have in the Bridge table for the KPIs. Also, the names should be in double quotes since it's a text. Do the same for the LY field parameter.

[Image placeholder]
Once you have this in both the field parameters, you will observe a Value 4 popping up in both field parameters and this Value 4 will become the key to connect with the bridge table.

[Image placeholder]
Time to see the final results, let's head to the visual and we have created a matrix and we need to use this bridge table as the only truth for the visual. Insert the KPIs from the bridge table to the matrix and add it as a button slicer too.

[Image placeholder]
See, the magic happens. We have selected Profit and both Profit and Profit LY are popping in the matrix based on the sub-category. How awesome is it? At Analyst in Action we always strive for more action and this time we will take this one more level ahead. 

Now, we are showing only the sub-category as my dimension but what if your user wants to see the same CY and LY measures with different dimensions? To do so, we need to create another field parameter with all the dimensions and name it Select dimensions.

[Image placeholder]
Once, we have it just need to drag it and see the magic. I am selecting the Category and sub-category together. Easy peasy lemon squeeze!! In rows, you need to use the select dimension field parameter and in the values, you will be using the KPI CY and KPI LY.

[Image placeholder]
Value 4  in the field parameters helps a lot to achieve things like this. There are many more use cases where value 4 can become crucial. In this blog, we have restricted ourselves to matrix visuals, but you can even import visuals to enhance the user experience on your reports.

