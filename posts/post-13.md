# Copying Bookmarks from one Power BI report to another

*Published on February 2025*

Let's think of a scenario, where you want to copy the bookmarks from one report to another. Most obvious approach is to just do a copy paste of the bookmarks. What's wrong with this approach? This approach only works for all visuals but not for bookmarks and field parameters. 

If you are not familiar with basics of bookmarks and field parameters do refer to the beginners guide for bookmarks and introduction to field parameters.

Then how do you copy the bookmarks? Power BI enhanced report format (PBIR) for Power BI Project files (PBIP) will help you in achieving this. Let's check it out, I have 2 reports one contains the bookmark called Bookmarks PBIR Test (origin) and other one is Rolling Average PBIR Test (destination). 

Before we get started, you have to enable Power BI Project save option under preview features. Once enabled, restart Power BI desktop. There is a TMDL icon appearing on the left pane. What is TMDL and what's in it for me? There's a lot of possibilities with TMDL and we have listed down in this article. 

One last thing before we get our hands dirty, we also need VS Code installed on your system. You can download it from their website.

Now, we have everything to start. Open the origin PBIX file and go to the File and save as PBIP file under a folder. I have a Test folder that is not part of my One drive but it is available in my local disk. There are many disadvantages of storing them on One drive we will list them down in our upcoming  articles.

[Image placeholder: describe what the image will show]

Similarly, repeat the same with the destination PBIX file. Once you have done it you will observe there are 2 folders for one report - one contains the Report and other contains the Semantic Model. 

[Image placeholder: describe what the image will show]

We will open the origin PBIP file (Bookmarks PBIR Test) and go to the page where we have the bookmark stored. Very basic bookmark giving us the East region sales and other one is leading us to provide the 2014 sales.

[Image placeholder: describe what the image will show]

Let's head to VS Code, and select the explorer option from the left pane and now we to assign the folder where our PBIP files are stored.

[Image placeholder: describe what the image will show]

I have it stored in my Test folder, it will open the list of items that are available in that folder. That's just connecting our folder with VS Code.

[Image placeholder: describe what the image will show]

Let's do the heavy work now, go the Test folder outside of VS Code and open the Bookmarks PBIR Test.Report and then head to definition. Under definition, you will observe there is a folder for bookmarks, pages and many more things. We are interested in the bookmarks for now.

[Image placeholder: describe what the image will show]

Just copy the bookmarks folder and then head to the Rolling Average PBIR Test.Report folder and then head to definition and paste the bookmarks folder you just have copied from the Bookmarks PBIR Test.Report. This will copy all the bookmarks used in Bookmarks PBIR.

Now, I want to copy the page - "Main Page" as well. We will follow the same steps as mentioned for bookmarks but this time we need to ensure we only want the Main Page to be copied. To confirm it we will head to VS Code for Bookmarks PBIR. 

[Image placeholder: describe what the image will show]

Under definition expand the pages and check the page.json for all of your pages. There are strange names provided by default. Always check for the display name under page.json. My Main Page is ending with f195.

Head out of VS Code and go to the Bookmarks PBIR Test.Report folder and go to the definition and then to pages folder. You will find a the same naming of your pages. Just copy the one that has a suffix of f195.

[Image placeholder: describe what the image will show]

Go to the Rolling average PBIR Test.Report and head to definition and then to pages. Similar steps that we have done to copy the f195 folder. Now just paste the f195 folder.

[Image placeholder: describe what the image will show]

Easy peasy!!! it will be difficult to keep a track of what needs to be copied for the first time. But with practice, you will get the hold on it. Now, let's open the Rolling average PBIP file (available under the test folder). There you will observe you have a new page with the bookmarks.

[Image placeholder: describe what the image will show]

That's amazing!!! just basic copy and paste and boom you have everything copied. If you notice it closely, we were using a theme in the Origin PBIP (Bookmarks PBIP). I want the same theme to copied here as well.

To do it we need to head to the VS Code, for Bookmarks PBIR Test.Report. This time we don't want to expand any of the bookmarks and pages section. Just directly select the report.json and you will observe the theme used. Since we want the Rolling Average PBIP to be of the same look and feel so we copy the entire code from report.json.

[Image placeholder: describe what the image will show]

And paste it under report.json for the Rolling Average PBIR Test.Report. This will ensure you have the same theme in both reports. Hit save and boom.

[Image placeholder: describe what the image will show]

Reopen the Rolling average PBIP file. Always ensure that while closing select don't save. Once you reopen the PBIP you will get the same dark theme as it was in Bookmarks PBIP. Also, if you observe we got the same bookmarks as the origin PBIP.

[Image placeholder: describe what the image will show]

Protip- Whenever you copy and paste your code in the VS Code do not forget to save it by CTRL+S. If you are copying a page then always check the name under page.json. 

This is one of the use cases that is quite useful if you want to avoid the redundant efforts. PBIR format has lot more capabilities if you want us to list them down, do leave a comment. We will cover them in our upcoming articles.


