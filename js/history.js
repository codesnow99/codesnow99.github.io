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

function fill_in_data() {

  // get data from file:
  var xhr = new XMLHttpRequest();
  xhr.timeout = 10000;
  xhr.responseType = "text";
  xhr.open( 'GET',
            file_name,
            true );
  xhr.onload = function() { 
    var data = JSON.parse(xhr.response);
    var time    = document.getElementsByClassName('article-time-txt');
    var title   = document.getElementsByClassName('article-title');
    var content = document.getElementsByClassName('article-content');
    for (i = 0; i < data.length; i++) {
      time[i].innerHTML    = data[i].year + '-' + data[i].month + '-' + data[i].day;
      title[i].innerHTML   = data[i].title;
      content[i].innerHTML = data[i].introduce;
    };
  };
  xhr.send();
  
};
