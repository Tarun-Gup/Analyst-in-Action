# Introduction to Slicer Panel

*Published on April 2023*

Using slicers is a common practice in Power BI. The positioning and the space it occupies in a dashboard are always in question. I have worked on dashboards where 10-15 slicers are keeping them together on top or side always reduces the space for other visuals. So what can be done?

Slicer Panel helps in such scenarios. It is the same as the menu bar on top of different mobile apps. Once you click it expands and shows all the slicers otherwise it collapses and gives you the dashboard for other visuals. In this blog, we will cover how to make a slicer panel step by step.

I am considering Sample SuperStore data and I have created a basic dashboard with slicers and other visuals. In the below image, I have put all the slicers on top now we will put all of these slicers into the panel. 

[Image placeholder: describe what the image will show]

Protip- As a BI developer I always prefer a drop-down in my slicers because it can be that you have 20 categories or maybe more. I don't want a long list in my slicers. In this dashboard, I will be using a list as I have limited categories.

To introduce the slicer panel first add a shape. In this case, I have selected a rectangle. You can select any of the shapes. Once the shape is available select the shape and send it backward using the Format option. 

[Image placeholder: describe what the image will show]

This will take your shape to the back and then it will not cover your slicers. Also, select all the slicers and the shapes and group them. We are almost there with the slicer panel but the most important aspect is a bookmark which will help us to expand and collapse.

We will be creating two bookmarks one where the slicers are shown and the other where they are hidden. Before creating bookmarks we need two buttons I am using a forward arrow and a backward arrow. The first bookmark will be Slicer Panel ON and we will be hiding only the forward arrow.

[Image placeholder: describe what the image will show]

Another bookmark will be the Slicer Panel Off where you can hide the group consisting of all slicers and shapes and also hide the backward arrow.

[Image placeholder: describe what the image will show]

Once bookmarks are created we just need to assign the buttons their respective actions. The forward arrow will be assigned Slicer Panel ON while the backward arrow Slicer Panel OFF. If you select the button you can assign an action to them under it there is an option to choose bookmark.

Isn't this amazing?? It looks really good but there is general feedback that I received from the users that it is very difficult to see what they are actually filtering on. To see this every time you have to click the button and check which is a bit cumbersome for users. To overcome this you can try using a simple table that will show every selection made in the slicers.


```DAX

Region Selected =
CONCATENATEX (
    VALUES ( SampleSuperstore[Region] ),
    'SampleSuperstore'[Region],
    ';'
)

```

We are using ConcatenateX which will help to use iteration on different values of Region in this case and values will provide the list of different values. Also, we are using a delimiter. You can create the same for other slicers as well and put this all in one table. 

[Image placeholder: describe what the image will show]

This approach is a good solution but if you are short on space in the dashboard then it won't help. Also, if you have more slicers then you will be exhausted with the current space we have. You can take the slicer panel to the next level by grouping your slicers together and using bookmark navigators. This will be covered in another blog. Overall slicer panel can bring improvement to the dashboard design with all the different shapes and colors we have so it all depends on the audience you are catering to.


