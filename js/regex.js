var clientInfo = navigator.userAgent;
var re = /(mobile)/i;
var found = clientInfo.match(re);

 window.onload = function mobileOrNot() {
	 if (found) {
	 	document.getElementById("box").style.position=relative;
		}
		else {
			document.getElementById("box").style.position=absolute;
	 }
 }
