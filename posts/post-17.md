# Identify and Delete Unused Columns & Measures

*Published on July 2024*

Heavy dashboards and a bad data model is a nightmare for every BI Developer. Heavy dashboards can be slow due to multiple reasons. It is always advised to stick with best practices. Are you still figuring out about those best practices then you should definitely have a quick read on Best Practice Analyser (link). One of the most common issues with slow dashboards is unused columns and unused measures. 

It is very normal to load some extra columns and create some test measures in your dashboard but as a part of cleanup process those unused columns and unused measures should be removed. Why we are removing them? Because if you keep them then ultimately it will increase the size of your data model which is not a good practice. 

How to identify the culprits (unused columns and unused measures)? In today's blog we will provide you with 2 most common external tools which will help you in identifying the culprits. More external tools😒. Who's going to pay for this? To your surprise these external tools are FREE. We will focus on Power BI Helper by RADACAD and Measure Killer by Brunner BI. 

Let's get started with Power BI Helper. Make sure you have it downloaded with this [link](https://powerbihelper.org). You need to provide your email address. If you can't find the email then make sure you have the pop up blocker extension turned off. Power BI Helper will come under the external tools in your Power BI Desktop. When you click on it make sure always select the Connect to model to get it connected with the model you are working with.

[Image placeholder: describe what the image will show]

There are tons of possibilities that you can achieve with this tool. To know more about all of them, I highly recommend to visit this [link](https://radacad.com/category/power-bi-helper-guides). One of my favourites is Format all DAX expressions. As the name suggests it formats all your DAX expressions with a single click.

To identify the unused columns and measures go to the Visualisation tab and we can see the all the used/unused tables and all the unused fields & measures.


[Image placeholder: describe what the image will show]

If you are using any of the external tools to cleanup always start from the top which is actually your tables and then come down to fields and measures. You can either hide or delete the unused tables. In this case, I am using all the tables so we can skip this step. In this PBIX, when I scroll the list of fields(highlighted section), I am not using Postal Codes on all pages so let's delete it.

[Image placeholder: describe what the image will show]

If you are using Power BI Helper for the first time, be cautious before deleting any measure or field. Always check on all pages whether a certain field or measure is used or not. Manual Intervention is required in checking this. You can right click on Postal code and delete it. You can also delete all of them at once by selecting all.

What if I delete a field by mistake? Not to worry at all, there is always a backup created. You can mention the location where you want the backup to be created. You can find this in the Settings of Power BI Helper. 

[Image placeholder: describe what the image will show]

Isn't it amazing? Personally, I am fan of it and you will also become a fan when you start discovering the coolest features. If you want to unravel all the coolest features of Power BI Helper do drop a comment. Talking about the coolest things let's move to another FREE external tool and it is called "Measure Killer". From the start I am a fan of the name😅. 

It also offers similar features to Power BI Helper but the interface is a bit better. You can download it via their [website](https://www.brunner.bi/measurekiller) or you can get it from [Microsoft Store](https://apps.microsoft.com/detail/xp8jn7n3rg4n6h?hl=en-US&gl=US). I am using the Portable version of Measure Killer for the demo. 

Let's get started!! It will also pops up in the external tools section in your Power BI Desktop. We need to select Single report/dataset. You have different options as well which is available once you get the license for Measure Killer.

[Image placeholder: describe what the image will show]

When you open it you should see the PBIX file name under execution log. But wait!! why I can't see anything because you need to click on Run at top which allows this tool to analyse what is going behind the scenes.

[Image placeholder: describe what the image will show]

Once you hit Run you will get tons of information. The highlight will be the execution summary located in the bottom left which contains the high level overview. Also, under results section you have a big table under which "Status" is something which will tell you whether a certain field or measure is used or not used.

[Image placeholder: describe what the image will show]

We follow the similar approach like we did with Power BI Helper always starting from the table and see if any of the table is unused. In Measure Killer you can select Tables next to Results and you will get the list of all tables with some additional information. 

[Image placeholder: describe what the image will show]

Status is important everywhere but do focus on the type of the table also when we closely look at the Status section we are getting a bit more information. Also, if you want to get an overview in different plots , Measure Killer gets you covered there. Under Plot results, you can find different options to plot used vs unused columns and many more options.

Let's get back to identify and delete the unused fields and measures. We start with measures to do so select Kill measures and calculated column and you will get a complete list.

[Image placeholder: describe what the image will show]

We will be deleting the Sales > 100 Test measure just by killing it. You can kill all the measures and calculated columns at once by selecting all of them. If you have noticed we do not need to do any manual intervention to check whether these measures or calculated columns are used on different pages. Measure killer is smart enough and gives you an entire picture.

Similarly you can kill columns but unlike Power BI Helper it is not done just by right click and delete them but Measure Killer includes a step in your M Script which we need to copy and paste it under the Query Editor (M Code for a specific table) 

[Image placeholder: describe what the image will show]

If Measure Killer is fairly new for you be a little cautious while removing the columns since we have 2 options - Remove columns and Remove other columns. Remove columns will only remove the unused columns while remove other columns will remove the rest of the columns. The highlighted section is added to the M script which we need to copy to the Query editor.

[Image placeholder: describe what the image will show]

My suggestion will be before you close and apply this always make sure the columns mentioned here are actually not used. This will require some manual intervention but you will be safe guard yourself. Once you are sure about the changes then close and apply.

There are lot of possibilities with Measure Killer. If you want us to list them down in a detailed article do drop us a comment.


