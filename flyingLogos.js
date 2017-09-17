function flyLogos(doFly){
	var catLogo = new Flyer('cat-logo', 'left');
	var dogLogo = new Flyer('dog-logo', 'left');
	var birdLogo = new Flyer('bird-logo', 'top');
	var chickenLogo = new Flyer('chicken-logo', 'top');
	var whaleLogo = new Flyer('whale-logo', 'right');
	var batsLogo = new Flyer('bats-logo', 'right');
	var snakeLogo = new Flyer('snake-logo', 'bottom');
	var fishLogo = new Flyer('fish-logo', 'bottom');
	logoMoveInterval = $interval(function(){
		var atEnd = catLogo.inPosition() && dogLogo.inPosition();
		atEnd = atEnd && (whaleLogo.inPosition() && batsLogo.inPosition());
		atEnd = atEnd && (chickenLogo.inPosition() && birdLogo.inPosition());
		atEnd = atEnd && (snakeLogo.inPosition() && fishLogo.inPosition());
		if(!atEnd){
			catLogo.moveOnce();
			dogLogo.moveOnce();
			birdLogo.moveOnce();
			chickenLogo.moveOnce();
			whaleLogo.moveOnce();
			batsLogo.moveOnce();
			snakeLogo.moveOnce();
			fishLogo.moveOnce();
		}
		else{
			$interval.cancel(logoMoveInterval);
		}
	}, 5);
}
