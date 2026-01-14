# PBIX vs PBIT 

*Published on February 2024*

As a Power BI user whenever you create a dashboard it saves under a particular extension. Let's imagine if you just started with Power BI then your first priority will be to make dashboards uniform looking. Also, let's suppose if you build a perfect looking dashboard and one of the client requested to make a separate version of it with all the available measures from existing dashboard. How to do it? This article will address all such questions. 

Note- This article is only intended for users who just started their Power BI Journey

In all such cases your go to option will be PBIT file. Is it same as the PBIX file? When you open PBIT file it looks exactly a replica of the original PBIX but you should focus on the file size. PBIX is comparatively bigger in size than PBIT.

[Image placeholder: describe what the image will show]

Let's understand why this difference exist - When we consider PBIT files it contains all the visuals, data model schema (only the schema), all measures and all the query definitions. One thing or you can say the most important thing that segregates the PBIT and PBIX will be the data. This makes the PBIX bigger in size.

Enough of the theory. Let's jump in the most interesting part and learn how to create PBIT file out of your PBIX. To do so first make sure you have a PBIX already in place. Once you open the PBIX under the File you will find the export option. You can select export and see various possible options to export your PBIX and one of them will be PBIT.

[Image placeholder: describe what the image will show]

Once you select PBIT it will open up a dialog box where you can define what this template is about for the end user and save it. Do emphasise on the file type when you are saving it. It always look like you created a duplicate version of the PBIX but keep in mind if you make any change in PBIT it won't reflect in the PBIX.

You can share the PBIT file with your client in 2 ways- classical way to send them via mail or you can upload your PBIT file in Power BI service. In the latter your client won't be able to make any changes. In this scenario it is advised to share the PBIT file via mail.

What if you receive a PBIT file? You need to import it first. To do so open the Power BI desktop and go under files you can select the import option and one of the option will be Power BI template.

[Image placeholder: describe what the image will show]

Protip - If you delete any visual or field in your PBIX it is possible that you will get error in your PBIT file as well. To overcome this just refresh the PBIT file.


