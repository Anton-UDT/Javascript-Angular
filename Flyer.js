// This takes an element ID, gets the element and finds its current position
// It calculates its starting position for flying in from its parent's dimensions
// It moves the element one pixel at a time in the given direction

function Flyer(elementId, direction){
	this.elem = getLogoElement(elementId);
	setUpStyling(this.elem);
//	this.startPosX = getStartPosX(this.elem);
//	this.startPosY = getStartPosY(this.elem);
	this.startPosX = 0;
	this.startPosY = 0;
	this.posX = getPosX(this.elem, this.startPosX, direction);
	this.posY = getPosY(this.elem, this.startPosY, direction);
	this.direction = direction;
	this.atEnd = false;
}

function getLogoElement(elementId) {
	var logoIdStr = "#" + elementId;
	var thisElem = angular.element(logoIdStr);
	return thisElem;
}

function getStartPosX(elem){
	var parentElem = elem.parent();
	var leftOffset = elem.prop('offsetLeft');
	return leftOffset;
}

function getStartPosY(elem){
	var parentElem = elem.parent();
	var topOffset = parentElem.prop('offsetTop');
	return topOffset;
}

function getPosX(elem, startPosX, direction){
	var parentElem = elem.parent();
	var posX = startPosX;
	switch(direction){
		case 'left':
			posX = startPosX - parentElem.innerWidth();
			break;
		case 'right':
			posX = startPosX + parentElem.innerWidth();
			break;
		default:
			posX = startPosX;		
	}
	return posX;
}

function getPosY(elem, startPosY, direction){
	var parentElem = elem.parent();
	var posY = 0;
	switch(direction){
		case 'top':
			posY = (-1) * parentElem.innerHeight();
			break;
		case 'bottom':
			posY = parentElem.innerHeight();
			break;
		default:
			posY = 0;
	}
	return posY;
}

function setUpStyling(elem){
	var parentElem = elem.parent();
	parentElem.css('position','relative');
	//parentElem.css('display','flex');
	//parentElem.css('flex-direction','column');
	//parentElem.css('justify-content','center');
	elem.css('position','absolute');
}

Flyer.prototype.moveOnce = function(){
	switch(this.direction){
		case 'left':
			if(this.posX < this.startPosX){
				this.posX++;
				var posXpx = "" + this.posX + "px";
				this.elem.css('left',posXpx);				
				this.elem.css('display', 'block');
			}
			else{
				this.atEnd = true;
			}
			break;
		case 'top':
			if(this.posY < this.startPosY){
				this.posY++;
				var posYpx = "" + this.posY + "px";
				this.elem.css('top', posYpx);
				this.elem.css('display', 'block');
			}
			else{
				this.atEnd = true;
			}
			break;
		case 'right':
			if(this.posX > this.startPosX){				
				this.posX = this.posX - 1;
				var posXpx = "" + this.posX + "px";
				this.elem.css('left',posXpx);				
				this.elem.css('display', 'block');
			}
			else{
				this.atEnd = true;
			}
			break;
		case 'bottom':
			if(this.posY > this.startPosY){
				this.posY--;
				var posYpx = "" + this.posY + "px";
				this.elem.css('top', posYpx);
				this.elem.css('display', 'block');
			}
			else{
				this.atEnd = true;
			}
			break;
		default:
			this.atEnd = true;
	}
	return false;
}

Flyer.prototype.inPosition = function(){
	return this.atEnd;
}		