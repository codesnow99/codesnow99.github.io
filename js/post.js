// @fill_in_data()
window.onload = function() {
  var note = document.getElementById("content-adaptation-note");
  note.onload = function() {
    note.style.height = note.contentDocument.documentElement.scrollHeight + "px";
  }
  fill_in_data()
  document.getElementById('loading-content').style.display = 'none';
  window.setTimeout( function() {
    document.getElementById('loading').style.opacity = '0';
  }, 500 );
  window.setTimeout( function() {
    document.getElementById('loading').style.display = 'none';
  }, 900 );
}

// be relied by:
// @window.onload()
function fill_in_data() {
  // https://marsno.github.io/article/000000.html
  // https://marsno.github.io/post/000000.html
  document.getElementById("content-adaptation-note").src = window.location.href.replace("article", "post");
};
