window.onload = function() {
  var note = document.getElementById("note");
	var height = note.contentDocument.documentElement.scrollHeight;
	note.style.height = height + "px";
  document.getElementById('loading-content').style.display = 'none';
  window.setTimeout( function() {
    document.getElementById('loading').style.opacity = '0';
  }, 500 );
  window.setTimeout( function() {
    document.getElementById('loading').style.display = 'none';
  }, 900 );
}
