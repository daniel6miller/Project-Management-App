//  ------- Date & Weather -----------
window.onload = function() {
  dateText()
  weatherText( 4671654 );
}

function dateText() {
  var d = new Date();
    var day = d.getDay()
    var dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    var day = dayArr[day]
    var date = d.getDate();
    var year = d.getFullYear();
    var month = d.getMonth();
    var monthArr = ["January", "February","March", "April", "May", "June", "July", "August", "September", "October", "November","December"];
    month = monthArr[month];
    if (date%10 == 1) {date+="st";}
    if (date%10 == 2) {date+="nd";}
    if (date%10 == 3) {date+="rd";}
    if (date%10 == 0 || date%10 > 3) {date+="th";}
    document.getElementById("date").innerHTML = day+", "+month+" "+date;
}

// ------------ Weather --------------
function weatherText( cityID ) {
  var key = '7b5d8c854c559a04c7b042f6cd7bbcba';
	fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID+ '&appid=' + key)  
	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		drawWeather(data); // Call drawWeather
	})
	.catch(function() {
		// catch any errors
	});
}

function drawWeather( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32); 
	var description = d.weather[0].description;
	
	document.getElementById('description').innerHTML = '      ' + description;
	document.getElementById('temp').innerHTML = '     ' + fahrenheit + '&deg;' + 'F';
	document.getElementById('location').innerHTML = d.name +', Texas';
	
	if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  }
}

// ---------- Menu --------------
function open_menu() {
    var x, m;
    m = (document.getElementById("leftmenu") || document.getElementById("sidenav"));
    if (m.style.display == "block") {
      close_menu();
    } else {
      w3_close_all_nav();  
      m.style.display = "block";
      if (document.getElementsByClassName) {
        x = document.getElementsByClassName("chapter")
        for (i = 0; i < x.length; i++) {
          x[i].style.visibility = "hidden";
        }
        x = document.getElementsByClassName("nav")
        for (i = 0; i < x.length; i++) {
          x[i].style.visibility = "hidden";
        }
        x = document.getElementsByClassName("sharethis")
        for (i = 0; i < x.length; i++) {
          x[i].style.visibility = "hidden";
        }
      }
      fix_sidemenu();
    }
}

function w3_close_all_nav() {
  w3_close_all_topnav();
  close_menu();
}

function close_all_topnav() {
  close_nav("tutorials");
  close_nav("references");
  close_nav("exercises");
}

function close_menu() {
  var m;
  m = (document.getElementById("leftmenu") || document.getElementById("sidenav"));
  m.style.display = "none";  
  if (document.getElementsByClassName) {
    x = document.getElementsByClassName("chapter")
    for (i = 0; i < x.length; i++) {
      x[i].style.visibility = "visible";
    }
    x = document.getElementsByClassName("nav")
    for (i = 0; i < x.length; i++) {
      x[i].style.visibility = "visible";
    }
    x = document.getElementsByClassName("sharethis")
    for (i = 0; i < x.length; i++) {
      x[i].style.visibility = "visible";
    }            
  }
}

function fix_sidemenu() {
  var w, top;
  w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  top = scrolltop()    
    if (top == 0) {
      document.getElementById("sidenav").style.top = "118px";      
    }
    if (top > 0 && top < 73) {
      document.getElementById("sidenav").style.top = (118 - top) + "px";      
    }
    if (top > 73) {
      document.getElementById("sidenav").style.top = "44px";
      if (w > 992) {document.getElementById("leftmenuinner").style.paddingTop = "44px";}
      document.getElementById("belowtopnav").style.paddingTop = "44px";    
      document.getElementById("topnav").style.position = "fixed";
      document.getElementById("topnav").style.top = "0";
      document.getElementById("myAccordion").style.paddingTop = "44px";
      document.getElementById("googleSearch").style.position = "fixed";
      document.getElementById("googleSearch").style.top = "0";
      document.getElementById("google_translate_element").style.position = "fixed";
      document.getElementById("google_translate_element").style.top = "0";
    } else {
      if (w > 992) {
        document.getElementById("leftmenuinner").style.paddingTop = (118 - top) + "px";
      } else { //ELSEN ER NY
        document.getElementById("leftmenuinner").style.paddingTop = 0;
      }
      document.getElementById("belowtopnav").style.paddingTop = "0";
      document.getElementById("myAccordion").style.paddingTop = "0";
      document.getElementById("topnav").style.position = "relative";
      document.getElementById("googleSearch").style.position = "absolute";
      document.getElementById("googleSearch").style.top = "";
      document.getElementById("google_translate_element").style.position = "absolute";
      document.getElementById("google_translate_element").style.top = "";
    }
}

function scrolltop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}

function gSearch(el) {
    var cx = '012971019331610648934:m2tou3_miwy';
    var gcse = document.createElement('script'); gcse.id = 'gSearch'; gcse.type = 'text/javascript'; gcse.async = true;
    gcse.src = 'https://www.google.com/cse/cse.js?cx=' + cx;
    var el = document.getElementById('gSearch');
    if (el == null) {
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gcse, s);
    }
    open_search(el);
  };
  
  function open_search(elmnt) {
    var a = document.getElementById("googleSearch");
    if (a.style.display == "") {
      a.style.display = "none";
      a.style.paddingRight = "";
      elmnt.innerHTML = "&#xe802;";    
    } else {
      a.style.display = "";  
      if (window.innerWidth > 700) {
        a.style.width = "40%";
      } else {
        a.style.width = "80%";
      }
  //  if (document.getElementById("gsc-i-id1")) {document.getElementById("gsc-i-id1").focus(); }
  //  elmnt.innerHTML = "<span style='font-family:verdana;font-weight:bold;'>X</span>";
      window.setTimeout(function () {
          if (document.getElementById("gsc-i-id1")) {
            document.getElementById("gsc-i-id1").focus();
          }
        }, 400);
    }
  }

  function gTra(el) {
    var gtra = document.createElement('script'); gtra.id = 'gTra'; gtra.type = 'text/javascript'; gtra.async = true;
    gtra.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    var el = document.getElementById('gTra');
    if (el == null) {
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(gtra, s);
    }
    open_translate(el);
  };

  function open_translate(elmnt) {
    var a = document.getElementById("google_translate_element");
    if (a.style.display == "") {
      a.style.display = "none";
      elmnt.innerHTML = "&#xe801;";
    } else {
      a.style.display = "";
      if (window.innerWidth > 500) {
        a.style.width = "40%";
      } else {
        a.style.width = "100%";
      }
      elmnt.innerHTML = "<span style='font-family:verdana;font-weight:bold;'>X</span>";
    }
  }
