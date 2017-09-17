// open gallery
	function openGallery(jsonFile) {
		$scope.galleryOpen = true;
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
		setTimeout(getNewGallery(jsonFile), 5000);
		// current image
		$scope.currCaption = "Loading " + $scope.page.project + " gallery";
		openModal('gallery');
	}
	function getNewGallery(jsonFile) {
		// Gets the JSON data from JSON file 
		$.getJSON(jsonFile, function(data) {
		})
		.done(function(data){
			var galleryList = ["test1"];
			galleryList = data.images;
			gallery = new GalleryViewer(galleryList);		
		})
		.error(function(error){
			// Throws an error to the console if there is one
			gallery = null;
			$scope.currImage = $scope.page.logoLink;
			$scope.currCaption = "An error occurred while loading " + $scope.page.project + " gallery";
			console.log("Error in retrieving the gallery", error);
		})
		.complete(function(){
			// current image
			if(gallery){
				var currImageData = gallery.getCurrImage();
				$scope.currImage = currImageData.filename;
				$scope.currCaption = currImageData.caption;
			}
			else{
				$scope.currImage = $scope.page.logoLink;
				$scope.currCaption = "Loading " + $scope.page.project + " gallery";
			}
		});
	}
	// next image
	function nextImage() {
		if(gallery != null){
			gallery.advanceNextImg();
			var currImageData = gallery.getCurrImage();
			$scope.currImage = currImageData.filename;
			$scope.currCaption = currImageData.caption;		   		   
		}	
	}
	// Timer
	$interval (function() {
		if ($scope.galleryOpen && !galleryPaused) {
			nextImage()
		}
	},4000);
