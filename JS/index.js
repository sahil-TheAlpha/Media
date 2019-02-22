function openSideMenu(){
   	document.getElementById('sideMenu').style.width = '70%';
}
function closeSideMenu(){
	document.getElementById('sideMenu').style.width = '0%';
}

// Opera 8.0+
var opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

// Firefox 1.0+
var firefox = navigator.userAgent.indexOf('Firefox') > -1;

// Chrome 1 - 71
var chrome = navigator.userAgent.indexOf('Chrome') > -1;

//Modal
var modal = document.getElementById('myModal');

//ModalDialog
var modalDialog = document.getElementsByClassName('modal-dialog');

//CTA Button 
var button = document.getElementById('logo');

button.addEventListener('click', function(){
	if(chrome){
		modal.classList.add('modal-chrome');
	}
	else if(opera){
		modal.classList.add('modal-opera');
	}
	else if(firefox){
		modal.classList.add('modal-firefox');
	}
});