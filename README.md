# Eat-Da-Burger!

Eat-Da-Burger! is a simple application to demonstrate MVC project organization. For more about what MVC is see [here](https://www.tutorialspoint.com/mvc_framework/mvc_framework_introduction.htm)

![Model-View-Controller depiction](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/MVC-Process.svg/1200px-MVC-Process.svg.png)

In this app, a user can assemble a 'menu' of burgers to eat and then devour them. The user inputs into the input field and submits their 'order' which then serves the burger to the lefthand column of the page. Clicking the devour button then moves it to the right side of the page. 

Although such a simple app would be trivial to make in simple html/css/javascript, in this example the dataset of burgers are kept in a MYSQL database and the webpage makes ajax calls to that database via a custom orm I wrote for this project. The browser calls the server, whose routes are defined by a controller.js file that uses a javascript model via an orm.js file. 

The handlebars use full layouts and partial layouts to demonstrate that as well.