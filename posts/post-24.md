# Ultimate Beginners Guide to DAX Studio

*Published on February 2024*

There are zillions of external tools available with Power BI but DAX Studio is one of the most commonly used tools to work with DAX queries. It is a perfect tool to optimize the DAX and the data model. In this blog let's shed some light on the basic functionalities that can take your report to the next level. ARE YOU READY? 

To start you will need the latest version of the DAX Studio. You can download it from their [website](https://daxstudio.org/). Don't worry you don't have to pay for the license. Fortunately, DAX Studio is a free tool.

As a BI Developer, I am using DAX Studio regularly. Based on my experience I use it for several purposes but in this blog, I will highlight the most common ones.

Extracting a dump of all the measures used in your PBIX. Why do we need to do this? It can be used for documentation purposes also sometimes we try to reuse the DAX and such a dump comes in handy in this scenario. How to achieve it?

Open the DAX Studio it is located under the external tools once you open that it will open up a dialog box to connect to the right Power BI model. Once you are connected you can see on the left pane all the tables and on top of it there are different options- metadata, functions, and DMV.

[Image placeholder: describe what the image will show]

For creating extract we will select DMV and under that MDSCHEMA_MEASURES. Double click on it and it will generate a basic query. Run it and you can see the list of all measures. To get it as an XLSX file just change the output to static and rerun the same query.

[Image placeholder: describe what the image will show]

SIMPLE!! Isn't it? Let's go level ahead how to optimize the data model? You can do it via DAX Studio. With the inclusion of Vertipaq analyzer in DAX Studio you can optimize your data model. How to do it?
Under the advanced section select the view metrics option.

[Image placeholder: describe what the image will show]

In your output section, you can see the option for Vertipaq analyzer. This will provide you with a detailed view of each and every field. So much information in a view 😕😕. What exactly do we need to check? The main column will be the cardinality of each column specifically the ones where cardinality is too high. Try to reduce the cardinality. We will be releasing a detailed blog on how to reduce the cardinality.

[Image placeholder: describe what the image will show]

If you are working with DAX Studio you should definitely check commonly used DAX queries. It is available on the DAX Studio [official website](https://daxstudio.org/docs/tutorials/writing-dax-queries/).

Protip - It is always recommended to clear the cache before running a query in DAX Studio. You can do it via a single click.

[Image placeholder: describe what the image will show]

Can we see how your DAX is performing? We can see the server timings for your measure. You can use the below-mentioned query to see the performance of the DAX.

[Image placeholder: describe what the image will show]

SE refers to storage engine and FE refers to formula engine. The basic rule is that your DAX should use the storage engine as it is much faster than the formula engine. To learn more about SE and FE you can read a great article from SQL BI.

