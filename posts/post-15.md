#Going a level beyond with DAX Studio

*Published on October 2024*

DAX Studio has proved to be a great external tool for Power BI and we have prepared a beginner's guide on the most common use cases that one can encounter while using it. This week we will focus on going a level beyond and discover a bit more advanced use cases that will help you to use DAX Studio in a better way. Ultimate goal for today's article is to surpass the beginner level and reach advanced level of DAX Studio.

We would recommend to first have a quick read on the beginner's guide before continuing here. In this article we will focus on running benchmark on your queries, formatting queries both short line and long line, defining dependent measures and lastly and one of my favourite importing performance data in DAX Studio.

Before we start make sure you have the latest version of [DAX Studio](https://daxstudio.org/downloads/) installed. Let's get started, with the simplest of the use cases - writing and formatting queries in DAX Studio. Generally, this is more towards enhancing the readability of your queries and has nothing to do with the performance. If you like [DAX Formatter](https://www.daxformatter.com) then you will definitely like it. I got a basic query from one of the visuals in my PBIX and this is how it looks like. 

[Image placeholder: describe what the image will show]

If you are beginner in writing queries in DAX Studio then visit this [doc from DAX Studio](https://daxstudio.org/docs/tutorials/writing-dax-queries/) on writing basic DAX queries. Let me help you understand what this query is all about. I call it behind the scenes actions. This is the query running behind a table in my dashboard since we change the selection for year from 2012 to 2013 first line reflects that. Also, this query entails the measure that I am using (_Avoid3). Now, I want to format in long line format. Just select the query and press F6 also you can do it via Format query option on top.

[Image placeholder: describe what the image will show]

Isn't it easy to format the queries? Let's take them a level up by running a benchmark against them. What is benchmarking in this scenario? We will run the query in 2 scenarios simultaneously - one scenario being when we clear the cache before running the query (cold scenario) and other scenario will be when we run the query without clearing the cache. Why do you need these scenarios? It is mainly to see that if your query takes a bit longer or shorter in running with or without clearing the cache.

You can find the run benchmark option in the advanced section. We will run the benchmark on the same query mentioned above. We will be running 5 cold cache and warm cache executions. You can change the number of executions based on the results that you get.

[Image placeholder: describe what the image will show]

We are mainly looking for the timing in both cold cache and warm cache executions. Once this benchmark is completed you will get the results where we follow the average duration.

[Image placeholder: describe what the image will show]

With the results it is quite obvious that my query is taking more time to run in warm cache executions meaning the query is not taking the advantage of the engine cache. Also, since the average duration for cold cache execution is lesser than warm cache executions it means clearing the cache creates an impact on the overall duration. You can follow the detailed table to analyse it in detail.

Easy peasy!! let's take a look on the most requested functionality now. Defining the dependent measures. Let's see how to do it. So, in this scenario I want to check all the dependent measures Total Sales LY. On the left pane just right click on the specific measure and select define dependent measure.

[Image placeholder: describe what the image will show]

Since I am using the Total Sales measure to calculate my Total Sales LY it is reflected in this. What if I want to check where a particular table is taken as a reference? It is possible let's check on the fact table that is Sample Superstore just right click on it and select show objects that reference table.

[Image placeholder: describe what the image will show]

You can see all the measures, calculated columns, relationships based on the Sample Superstore. Isn't it amazing ?

Let's move towards the last topic for today and one of my favourites so hang tight. We will now import the performance data from the PBIX file. Wait whatttt!!😵‍💫, how to do it. It is actually very easy. Just open the PBIX file and enable the performance analyser. It is available under the optimisation. Run performance analyser and make some selections on the same page and record it. Stop the performance analyser and export the data for further analysis in DAX Studio.

[Image placeholder: describe what the image will show]

This export will be in JSON format. It's time to switch to DAX Studio and select the load the performance data

[Image placeholder: describe what the image will show]

Open the JSON file we have just created here but before that also enable the query plan and server timings. Let's run it to see exactly which visual is the slowest in this case.

[Image placeholder: describe what the image will show]

Generally, I go for the Query Ms and render ms columns and select the visual that takes the longest. If you double click on the second query it will open up the complete query. To analyse it in detail go to the Server timings and query plan. 

[Image placeholder: describe what the image will show]

That's all for today. All the mentioned functionalities are most commonly used in my day to day practice. If you are interested in learning about all the DAX Studio functionalities, I would recommend to read the documentation available on [DAX Studio's website](https://daxstudio.org/docs/category/features/).





