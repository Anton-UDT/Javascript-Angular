# Javascript-Angular
Welcome reader.  
This is a repo of all the things that I have done that is to do with JavaScript and the framework Angular JS.  
  
# What am I likely to find here?
You will find snippets of code from projects that I have done and been involved with.  
  
  
# A Jasmine test driven JS Class -  
In the Archive (Zip) file **Jasmine Test**, is a JS class that I have made using TDD (Test Driven Development) using Jasmine as the tester.  
Inside the folder you will see 1 HTML file, and three folders named:
 1. lib, 
 1. spec,
 1. src
 
Inside the lib folder is the Jasmine tester, this folder doesnt require you to change anything inside it,  
Inside the spec folder is where you would put the the files that you would use to test what you are developing.
Inside the src folder is where you would put your source code, the code that you are testing.  
  
# carousel.js -  
This carousel is particularly special as it is renuable. This file reads image file paths from a JSON file and grabs those images
for display. The images change on an interval of 4000 which is equivalent to 4 seconds.  

**Please note: that this carousel is written in AngularJS V 1.4.8**  

If you wanted to change what it displays all you have to do is put the images you want to display in a directory (file path)
and then change these lines:  

```javascript
		// sets jsonFile for cats
		if ($scope.currPage == "catPage") {
			jsonFile = "js/json/galleries/meow.json";
			$scope.currImage = "images/galleries/cats/stray.jpg";
		}
		// sets jsonFile for dogs
		else if ($scope.currPage == "doggyPage") {
			jsonFile = "js/json/galleries/woof.json";
			$scope.currImage = "images/galleries/dogs/dogPic1.jpg";
		}
		// sets jsonFile for birds
		else if ($scope.currPage == "birdPage") {
			jsonFile = "js/json/galleries/tweet.json";
			$scope.currImage = "images/galleries/birds/blueBird1.jpg";
		}
		// sets jsonFile for chickens
		else if ($scope.currPage == "chickenPage") {
			jsonFile = "js/json/galleries/cluck.json";
			$scope.currImage = "images/galleries/chkn/babyChkn.jpg";
		}
```  
I have used multiple scopes as you can use this for multiple pages, but if you want to use it for just one you dont need all of those **else if's** so you can easily shorten it down to:  

```javascript
		// sets jsonFile for cats
		if ($scope.currPage == "catPage") {
			jsonFile = "js/json/galleries/meow.json";
			$scope.currImage = "images/galleries/cats/stray1.jpg";
		}
```  
Make a scope variable called **$scope.currPage = "YOUR VARIABLE NAME HERE"** on the top of your js file, then in the if **$scope.currPage == "YOUR VARIABLE NAME"**, then where it says **jsonFile = "js/json/galleries/meow.json"** change the **js/json/galleries/meow.json** part to the directory of the json file you made (an example of the json layout will be below).  

Then also make another scope variable called **$scope.currImage = ""** then inside the if statement where I put that scope variable change the **images/galleries/cats/stray1.jpg** to the path to your path of the images that you want to display and put the image that is at the top.  

# galleryClass.js -  
This is a class that goes along with the carousel.js, this is used along side it to get the current image and checks how many images there are. This does this using the json file with the image paths.  
Then, using this, it can advanced onto the next image and when it reaches the last image it will then go back to the first image in the list.  
  
# statisticsRoller.js -  
Statistics Roller is the almost the same as the carousel but instead of images its for text, but it also still uses a json file to grab the data to display.  

# flyingLogos.js -  
On a project that I was involved in we had logos which were displayed their conent, but instead of just having them static (still), we wanted them to be dynamic (changeing), so we decided to have the logos fly onto the screen from different directions (top, bottom, left and right sides of the screen).  

This file activates functions on the press of a button, where it activates an angular interval in which gets the positioning from the  Flyer.js file.

# Flyer.js -  
This is used in collaberation with another file called **flyingLogos.js**.  
This file gets the positioning of the files and sets it so it is off the screen, and then it will slide onto the screen and then set onto its final position.
