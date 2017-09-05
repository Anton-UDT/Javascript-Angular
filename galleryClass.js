		//*   TO DO   *\\
// This is a slide show gallery, this takes image filenames from a json file, x
// starts with the first image from the json file, x
// infinite loop and only advances down the list, x 

function GalleryViewer(jsonFile) {
	this.imageList = jsonFile;
	this.index = 1;
}
GalleryViewer.prototype.getCurrImage = function() {
	return this.imageList[this.index];
}
GalleryViewer.prototype.advanceNextImg = function() {
	if (this.index < this.imageList.length - 1) {
		this.index++;
	} else {
		this.index = 0;
	}
	return false;
}