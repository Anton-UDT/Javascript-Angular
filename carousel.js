// open gallery
	function openGallery(jsonFile) {
		$scope.galleryOpen = true;
		// sets jsonFile for voyager
		if ($scope.currPage == "voyager") {
			jsonFile = "js/json/galleries/V.json";
			$scope.currImage = "images/galleries/V/V1.jpg";
		}
		// sets jsonFile for change minds
		else if ($scope.currPage == "changeMinds") {
			jsonFile = "js/json/galleries/CM.json";
			$scope.currImage = "images/galleries/CM/CM1.jpg";
		}
		// sets jsonFile for Human Henge
		else if ($scope.currPage == "humanHenge") {
			jsonFile = "js/json/galleries/HH.json";
			$scope.currImage = "images/galleries/HH/HH1.jpg";
		}
		// sets jsonFile for Burgh Castle
		else if ($scope.currPage == "burghCastle") {
			jsonFile = "js/json/galleries/BC.json";
			$scope.currImage = "images/galleries/BC/BCA1.jpg";
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