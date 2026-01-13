# Best Practice Analyser (BPA) Guide

*Published on June 2024*

Do you want to save tons of efforts to check if your data model and PBIX file follows the standard best practices and norms? Then this blog is for you. If you are a follower of our channel we already deep dive into the importance of the DAX Studio as an external tool. If you are a beginner I would highly recommend to visit this blog. In today's blog we will check how Tabular Editor can help to optimize the data model. 

Best Practice Analyser allows to define or import best practices. It will make sure that we do not violate the best practices while developing a dashboard. Isn't it exciting!! 

[Image placeholder: describe what the image will show]

Before we start make sure you already have Tabular Editor version 2.24.1 installed on your system. To install it do visit this link and select the link for windows installer. Once Tabular Editor is installed it will reflect in your PBIX file under external tool.

[Image placeholder: describe what the image will show]

Also, we need to define the standard rules. To do so in your advanced scripting or C# script copy this and save it via Ctrl+S. And reopen the tabular editor.

```C#Script

System.Net.WebClient w = new System.Net.WebClient(); 
string path = System.Environment.GetFolderPath(System.Environment.SpecialFolder.LocalApplicationData);
string url = "https://raw.githubusercontent.com/microsoft/Analysis-Services/master/BestPracticeRules/BPARules.json";
string downloadLoc = path+@"\TabularEditor\BPARules.json";
w.DownloadFile(url, downloadLoc);

```

To see the rules you need to go to tools and select Manage BPA rules.

[Image placeholder: describe what the image will show]

Pop-up will appear where we need to select Rules from the local user and you will see the long list of rules.

[Image placeholder: describe what the image will show]

What are these rules? These are standard best practices that can help you to optimise the data model. If you want to know the definition of each rule select a rule and go to edit rule to read the full description.

Open your PBIX file and select Tabular Editor. We are using dummy dataset for the article. Tabular Editor will open a pop up with loads of different icons. Also, if we look at the bottom then you see 131 BP Issues. What????? It means we have violated the standard rules at 131 instances.

[Image placeholder: describe what the image will show]

Rule of thumb here is to reduce the number of these issues. To do it you need to go over the complete list and see what is going behind the scenes. For instance, we are calculating Sales YoY% with a divide operator "/" instead of DIVIDE function. We are lucky because in this long list of rules this issue is highlighted. 

[Image placeholder: describe what the image will show]

There are 4 instances where we violated this rule to correct it just double click on Sales YoY% and replace the divide operator with DIVIDE function. And do not forget to save it. Bang!!!! we have come down to 130 issues. 

Let's check another example I am using floating data type which can impact the performance at 4 instances. Our BPA rules detects those instances and surprise surprise it allows to fix this with a single click. Just right click on one of them you will see an option to apply a fix. Select it and you come down to 129 issues. 

To know why to avoid floating data types do read this [interesting article from SQL BI](https://www.sqlbi.com/articles/choosing-numeric-data-types-in-dax/).

[Image placeholder: describe what the image will show]

Similarly we need to check other 129 instances where BPA rules are getting violated. These are the standard rules there can be a scenarios where you can ignore a rule for formatting, naming conventions but always try to check all performance, DAX expressions and error preventions issues.


