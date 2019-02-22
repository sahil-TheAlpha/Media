function openSideMenu(){
   	document.getElementById('sideMenu').style.width = '70%';
}
function closeSideMenu(){
	document.getElementById('sideMenu').style.width = '0%';
}

//Modal
var modal = document.getElementById('myModal');

//ModalDialog
var modalDialog = document.getElementsByClassName('modal-dialog');

//CTA Button 
var button = document.getElementById('btnCTA');

var ba =["Chrome","Safari","Firefox","Opera","MSIE","Trident"];

var browser;

var ua = navigator.userAgent;

var edge = /Edge/.test(navigator.userAgent);

for(var i = 0; i < ba.length; i++){
	if(ua.indexOf(ba[i]) > -1){
    	browser = ba[i];
        break;
    }
}

//Button Event Listener
button.addEventListener('click', function(){
	if(/Edge/.test(navigator.userAgent)){
	    // alert("Hi MS User");
	    modal.style.position = "absolute";
	    modal.style.right = "0%";
	    modal.style.top = "25%";
	    modal.style.width = "30%";
	}
	else if(browser == "Chrome"){
		// alert("Hi Chrome User");
		modal.style.position = "absolute";
	    modal.style.right = "0%";
	    modal.style.top = "0%";
	    modal.style.width = "30%";
	}
	else if(browser == "Firefox"){
		// alert("Hi Firefox User")
		modal.style.position = "absolute";
	    modal.style.left = "0%";
	    modal.style.top = "0%";
	    modal.style.width = "30%";	
	}
	else if(browser == "Safari"){
		modal.style.position = "absolute";
	    modal.style.left = "0%";
	    modal.style.top = "25%";
	    modal.style.width = "30%";	
	}
	else if(browser == "Opera"){
		alert("Hi Opera User");
	}	
});