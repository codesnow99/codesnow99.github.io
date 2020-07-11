// the height for iframe alter by content.
function i() {
	var i = document.getElementById("note");
	var height = i.contentDocument.documentElement.scrollHeight;
	i.height = height;
}

// mouse over event for home.
function over_home() {
	// change background color of site title.
	document.getElementById("site_title").style.backgroundColor = "rgba(255,255,255,0.2)";

	// change font of site title.
	document.getElementById("site_title_font").innerHTML = "HOME";
	// change font css.
	var style = document.getElementById("site_title_font").style;
	style.fontSize   = "20px";
	style.cursor     = "pointer";
	style.fontWeight = "900";
	style.marginTop  = "7px";
	style.height     = "53px";
	style.lineHeight = "53px";

	document.getElementById("site_title_underline").className = "site_title_underline_hover";
}

// mouse out event for home.
function out_home() {
	// change background color of site title.
	document.getElementById("site_title").style.backgroundColor = "rgba(255,255,255,0)";

	// change font of site title.
	document.getElementById("site_title_font").innerHTML = "Snow";
	// change font css.
	var style = document.getElementById("site_title_font").style;
	style.fontSize   = "28px";
	style.cursor     = "default";
	style.fontWeight = "900";
	style.marginTop  = "0px";
	style.height     = "60px";
	style.lineHeight = "60px";

	document.getElementById("site_title_underline").className = "site_title_underline";
}

// mouse over event for name.
function over_name() {
	document.getElementById("name_underline").className = "name_underline_hover";
}

// mouse out event for name.
function out_name() {
	document.getElementById("name_underline").className = "name_underline";
}
