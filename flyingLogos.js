//Flying logos - Developer: Anthony Funai.
function flyLogos(doFly){
	var rtLogo = new Flyer('RT-logo', 'left');
	var cmLogo = new Flyer('CM-logo', 'left');
	var cqLogo = new Flyer('CQ-logo', 'top');
	var hhLogo = new Flyer('HH-logo', 'top');
	var vLogo = new Flyer('V-logo', 'right');
	var gameLogo = new Flyer('Game-logo', 'right');
	var bcLogo = new Flyer('BC-logo', 'bottom');
	var financeLogo = new Flyer('Finance-logo', 'bottom');
	logoMoveInterval = $interval(function(){
		var atEnd = rtLogo.inPosition() && cmLogo.inPosition();
		atEnd = atEnd && (vLogo.inPosition() && gameLogo.inPosition());
		atEnd = atEnd && (hhLogo.inPosition() && cqLogo.inPosition());
		atEnd = atEnd && (bcLogo.inPosition() && financeLogo.inPosition());
		if(!atEnd){
			rtLogo.moveOnce();
			cmLogo.moveOnce();
			cqLogo.moveOnce();
			hhLogo.moveOnce();
			vLogo.moveOnce();
			gameLogo.moveOnce();
			bcLogo.moveOnce();
			financeLogo.moveOnce();
		}
		else{
			$interval.cancel(logoMoveInterval);
		}
	}, 5);
}