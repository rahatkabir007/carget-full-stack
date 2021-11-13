Client Live Site- https://carget-69504.web.app/

My Website is about Car Dealership Company. It mainly focuses on seliing cars of various brands.

This was a really big project for me. Its completely full-stacked! I have designed this website with utmost care!

I will break down my full website designing in 6 breakpoints.

Client Side- 

UI Designing
-I have gotten my idea of the website from colorlib. I researched a lot of website to go perfectly with my taste.
-My website has 3 pages Home, Explore and About. Other than that it also has login and register page.
-After user logs in he will see dashboard where he can see his orders, share reviews and payment(not implemented yet).
-Also if an admin logs in he will see dashboard too but the pages he will see will be different from user's, such as Manage products, -Manage Orders, Add Products. He can also make an user admin of the website.
-Each page has different contents.
-The home page has different type of sections.
-I have used Bootstarp cdn and Material UI both to design the responsiveness of the UI.
-Mostly used 2 colors throughout the website.
-Every page has header and footer.
-I have created a not found page too in case pages are not available.

Structure
-I have divided the websites in to various components.
-The src file have hooks, context and components in different folder.
-The component folder has A main folder call pages. Where i have kept all of the pages individually. Navigation, Footer is in shared -component.
-The Home folder has various child components on it!
-Also i placed the privateroute folder and adminroute folder in the signin component.

Router
-I have implemented react router dom.
-This helps us to walk thorugh between different pages without reloading.
-I have placed the routes on app.js ! and wrapped them around Authcontext. Every route has there different loctions.
-I have implemented dynamic route on the service section of the home page to redirect us to selected data's detailed information.

-Firebase Authentication
-I have created a firebase project and hosted my files on it as an web app.
-I have implemented email password and Google Sign In both for my login.
-The user information will be stored on my firebase project as well as in mongodb server.
-The header shows the users name everytime the user signs in.

Backend Side-

Data
-I have used node.js and express.js for the backend. And Connected My Backend server with MongoDB!
-I have Created a project on mongodb and conneted it with my Backend using ID and Password.
-I have done get, post ,delete and update operation on the backend side.
-This operations are connected with my client side.
-At last I have hosted my website with Heroku. and used heroku live server link for my client side.

Functionality

-The Website is mainly full stacked!
-When users are not logged in they cant use the functionality as the navbar will only show 3 routes!
-But once the user log is it will show 1 more routes named dashboard where user will see some different functionalities such as
-User's orders , Review Sharing also Payment(not implemented).
-User can book any car and he will be redirected to place order page where he can share his address and phone number while seeing the -products details. 
-After User places orders he can go to dashboard and check his orders on myorders menu. User can cancel his order too.
-User can share their reviews and it will show on the homepage dynamically. He can give rating too! 
-I also implimented Admin functionality. That Means when user logs in he cant see admin's functionality on Dashboard. Only when admin logs in he can see some new functionality such as Add Products where he can add new products for the website. He can see all the products in Manage Products. Admin has the ability to delete those products from the website too. Admin can also see all of the users orders in Manage Order page where he can see all the details.
-Admin can delete those orders and has a update ability to change the order's pending status to shipped.
-Admin can make other users admin if he want from make admin option.
-For admin functionality i had to create AdminRoute to secure it.
-This website is responsive for both desktop and mobile.


This project was really important part to me! I really enjoyed doing it!