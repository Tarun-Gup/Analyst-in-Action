# Dealing with blanks in Power BI

*Published on May 2024*

Blanks in the dashboards is one of the pain and impacts the user experience. It can occur due to multiple reasons - due to data unavailability which is something is out of control of Power BI developer. One of the best practices suggest to avoid blanks with different approaches in Power BI. In this blog, we will showcase the most common approaches to tackle the blanks.

This blog is mainly divided in two parts - dealing with blanks in the KPI cards and dealing with blanks in table or matrix. 

Let's start from the KPI cards with the updates dealing with blanks in the cards became very easy. In the new cards it is now possible to provide a separate value when a blank appears in the card. This feature is available under the formatting option of new KPI cards. Do keep in mind this feature is currently available for the new cards.

[Image placeholder: describe what the image will show]

In the above example we are showcasing the total sales and total sales last year in the reference. Under the highlighted section we can provide the value that will be shown if the blank appears on the card. By default it is always -- that can be changed.

If you are not familiar with the new KPI cards yet do check one of the most viewed article on it. We have covered all the basic functionalities that the new KPI cards come up with.

What if I am using the old KPI cards? How to deal with blanks in such scenarios? It can be done in the DAX itself by providing IF(ISBLANK(Measure),0, Measure).

Tackling with blanks in the tables or matrix. There are two ways to do it. To understand in a better way we have created a matrix containing Categories, subcategories and showcasing the furniture sales.  If we drag these 3 in a matrix then the other categories won't appear. We avoid the blanks by doing it.

[Image placeholder: describe what the image will show]

But what if the user asked to include other categories as well in the matrix. This can be done by enabling the show item with no data. To enable it go to categories and right click you will see option of show item with no data. Once you enable it other categories will appear.

[Image placeholder: describe what the image will show]

Protip - Show item with no data has its own limitations. One of the most common limitation is if the categories and sub categories are coming from 2 separate tables that aren' related then it will lead to an error. To know more about it do visit this [article](https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-show-items-no-data).

The user of the dashboard requested to show 0s instead of blanks for other categories. To do so we can use function called COLAESCE. It will return the first non blank argument. 

[Image placeholder: describe what the image will show]

First argument is the furniture sales measure and second argument is 0. You can also provide another measure as second argument. If you do it make sure out of the 2 measures one of them shows some value otherwise the end result will be blank. 

Protip - Why blank with COALESCE? Basic purpose of this function is to provide the first non blank argument but if all arguments are blank then the end result will be blank. In such cases, it is advised to provide a value such as 0.

The COALESCE and ISBLANK serves a common purpose. Let's see how ISBLANK works. I have created a matrix with total sales, total sales last year and YoY%. Since we do not have historical data before 2012 the total sales last year shows blank.

[Image placeholder: describe what the image will show]

The YoY% will return blank as there is no historical data before 2012. To tackle such scenarios it is always advised to use ISBLANK with a simple IF condition. In the DAX, we have stated IF the total sales last year is blank that show 0 otherwise YoY%.

There are various other functions such as ISEMPTY and ISNULL that also helps in dealing with blanks. If you want to learn more about the functionalities do visit this [article](https://learn.microsoft.com/en-us/power-platform/power-fx/reference/function-isblank-isempty). 


