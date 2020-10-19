// @fill_in_data()
window.onload = function() {
  fill_in_data()
  var note = document.getElementById("note");
  note.onload = function() {
    note.style.height = note.contentDocument.documentElement.scrollHeight; + "px";
  }
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
  // https://codesnow99.github.io/article/000000.html
  // https://codesnow99.github.io/post/000000.html
  document.getElementById("note").src = window.location.href.replace("article", "post");
};
