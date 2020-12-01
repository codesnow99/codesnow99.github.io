window.onload = function() {
  fill_in_data();
  var height = document.documentElement.clientHeight;
  var half_height = (height / 2) + 'px'
  document.getElementsByTagName('header')[0].style.height = half_height;
  document.getElementsByTagName('footer')[0].style.height = half_height;
  document.getElementById('loading-content').style.display = 'none';
  window.setTimeout( function() {
    document.getElementById('loading').style.opacity = '0';
  }, 500 );
  window.setTimeout( function() {
    document.getElementById('loading').style.display = 'none';
  }, 900 );
  window.setTimeout( function() {
    document.getElementById('nav-content').style.opacity = '1';
    document.getElementById('tools-content').style.opacity = '1';
  }, 1400 );
};

window.onresize = function() {
  var height = document.documentElement.clientHeight;
  var half_height = (height / 2) + 'px'
  document.getElementsByTagName('header')[0].style.height = half_height;
  document.getElementsByTagName('footer')[0].style.height = half_height;
};

// used by <window.onload>:
function fill_in_data() {

  // get data from file:
  var xhr = new XMLHttpRequest();
  xhr.timeout = 10000;
  xhr.responseType = "text";
  xhr.open( "GET",
            window.location.href.replace(".html", ".json"),
            true );
  xhr.onload = function() { 
    var data    = JSON.parse(xhr.response);
    var article = document.getElementsByClassName("article");
    var time    = document.getElementsByClassName('article-time-txt');
    var title   = document.getElementsByClassName('article-title');
    var content = document.getElementsByClassName('article-content');
    for (i = 0; i < data.article_list.length; i++) {
      time[i].innerHTML = data.article_list[i].creation_time;
      title[i].innerHTML = data.article_list[i].title;
      id = ("00000" + data.article_list[i].id).slice(-6)
      title[i].href = 'https://marsno.github.io/article/' + id + ".html";
      content[i].innerHTML = data.article_list[i].brief_introduction;
    };
    for (j = data.article_list.length; j < 10; j++) {
      article[j].style.display = "none";
    };
    if (data.page == 1) {
      document.getElementById("tools-content-previous").style.display = "none";
    };
    if (data.is_last_page) {
      document.getElementById("tools-content-next").style.display = "none";
    };
  };
  xhr.send();

};
