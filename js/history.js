// modify page turning previous:
window.onload = function() {
	// get the number of page and get how many pages:
	var numbers = getPageNumber();
	document.getElementById('pageturning_current').innerHTML = numbers[0].toString();
	if (numbers[0] != 1) {
		var previous = document.getElementById('pageturning_previous');
		previous.innerHTML = '上一页';
		previous.href = 'https://codesnow99.github.io/history/page'
		              + ( (numbers[0] - 1).toString() )
		              + '.html';
	}
	if (numbers[1] != numbers[0]) {
		var next = document.getElementById('pageturning_next');
		next.innerHTML = '下一页';
		next.href = 'https://codesnow99.github.io/history/page'
		          + ( (numbers[0] + 1).toString() )
		          + '.html';
	}
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

// mouseover event of post:
function mouseover_post(node) {
	// 统一:
	var parentNode = node.parentNode;
	parentNode.children[0].style.backgroundColor     = 'rgba(255,255,255,0.2)';
	parentNode.children[1].style.backgroundColor     = 'rgba(255,255,255,0.2)';
	parentNode.children[1].children[0].style.display = 'block';

	// 单独:
	node.style.backgroundColor = 'rgba(255,255,255,0.6)';
}

// mouseout event of post:
function mouseout_post(node) {
	// total:
	var parentNode = node.parentNode;
	parentNode.children[0].style.backgroundColor = 'rgba(255,255,255,0)';
	parentNode.children[1].style.backgroundColor = 'rgba(255,255,255,0)';
	parentNode.children[1].children[0].style.display = 'none';

	// alone:
	node.style.backgroundColor = 'rgba(255,255,255,0)';
}

// get the number of page and get how many pages:
function getPageNumber() {
	var content = document.getElementById('title').innerHTML;
	var content_sliced = content.slice(5, content.length);
	var start = content_sliced.indexOf('(');
	var end   = content_sliced.indexOf(')');
	var page_number  = parseInt( content_sliced.slice(0, start) );
	var pages_number = parseInt( content_sliced.slice(start + 1, end) );
	var numbers = [page_number, pages_number];
	return numbers;
}
