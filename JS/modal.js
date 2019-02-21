var modal = document.getElementById('myModal');
var modalDialog = document.getElementsByClassName('modalDialog');
var btnPrimary = document.getElementById('btnPrimary');
var btnDanger = document.getElementById('btnDanger');
var btnDark = document.getElementById('btnDark');

// Opera 8.0+
var opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;

// Firefox 1.0+
var firefox = navigator.userAgent.indexOf('Firefox') > -1;

// Chrome 1 - 71
var chrome = navigator.userAgent.indexOf('Chrome') > -1;

  
  if(opera){
    btnDanger.disabled = true;
    btnDark.disabled = true;
  }
  else if(chrome){
    btnPrimary.disabled = true;
    btnDark.disabled = true;
  }
  else if(firefox){
    btnPrimary.disabled = true;
    btnDanger.disabled = true;         
  }  