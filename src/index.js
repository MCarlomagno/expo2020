`use strict`;

window.onload = init;
function init() {
	document.onmousemove = getCursorXY;
}

function getCursorXY(e) {
	let mousePositionX = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
    let mousePositionY = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
}