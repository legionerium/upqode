// addEventListener()
//header slider
window.addEventListener('load', main, false)
window.addEventListener('load', togleMenu, false)
window.addEventListener('resize', togleMenu, false)

function togleMenu(){
  if(window.matchMedia('(max-width: 1024px)').matches){
    var nav = document.getElementsByTagName('nav');
    $(nav).click(function() {
      $(this).toggleClass('show');
      var close = document.createElement('p');
      if ($(this).hasClass('show')) {
        for (var i = 0; i < 2; i++) {
          $(this).append("<p />");
        }
      }else{
        $('nav').children('p').remove()
      }
    });    
  }
}  


function main () {
    var btn = document.getElementsByClassName('slider_button');
    var slide = document.getElementsByClassName('slider_item');
    var slider_dot = document.getElementsByName('radio');
    btn[0].addEventListener('click', scroll_left , false);
    btn[1].addEventListener('click', scroll_right , false);

  	function scroll_right(){
  		for (let i = 0; i < slide.length; i++) {
  			if (!$(slide[i]).hasClass('active')) {
  				continue;
  			}else{
  				$(slide[i]).removeClass('active');
  				$(slider_dot[i]).removeAttr('checked');
  				i++;
  				if (i<slide.length) {
  					$(slide[i]).addClass('active');
  					$(slider_dot[i]).attr('checked','');
  					return;
  				}else{
  					$(slide[0]).addClass('active');
  					$(slider_dot[0]).attr('checked', '');
  					return;
  				}
  			}
  		}
  	};

  	function scroll_left(){
  		for (let i = 0; i < slide.length; i++) {
  			if (!$(slide[i]).hasClass('active')) {
  				continue;
  			}else{
  				$(slide[i]).removeClass('active');
  				$(slider_dot[i]).removeAttr('checked');
  				if (i==0) {
  					$(slide[slide.length-1]).addClass('active');
  					$(slider_dot[slider_dot.length-1]).attr('checked', '');
  					return;
  				}else{
  					--i;
  					$(slide[i]).addClass('active');
  					$(slider_dot[i]).attr('checked','');
  				}
  			}
  		}
  	};
  };

$(function() {
  $(window).on("scroll", function() {
    if($(window).scrollTop() > 50) {
      $("header").css( "background", "rgba(242, 242, 242, 0.5)" );
    } else {
      $("header").css( "background", "unset" );
    }
    var temp_scroll = $(window).scrollTop()
    var menu_item = document.getElementsByClassName('menu_item')
    switch(true){
      case temp_scroll >= 0 && temp_scroll <= 500: 
        remove_class()
        menu_item[0].classList.add('current')
        break;
      case temp_scroll >= 500 && temp_scroll <= 2800: 
        remove_class()
        menu_item[1].classList.add('current')
        break;
      case temp_scroll >= 2800 && temp_scroll <= 4000: 
        remove_class()
        menu_item[2].classList.add('current')
        break;
      case temp_scroll >= 4000 && temp_scroll <= 5000: 
        remove_class()
        menu_item[3].classList.add('current')
        break;

    }
    function remove_class(){
      for (var i = 0; i < menu_item.length; i++) {
        menu_item[i].classList.remove('current')
      }
    }
  });
});


$(document).ready(function(){
  $("nav").on("click","a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();

    //забираем идентификатор бока с атрибута href
    var id  = $(this).attr('href'),

    //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({scrollTop: top}, 1500);
  });
});

//youtube API
  var tag = document.createElement('script');
  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  var player;
  var videoId = ['l6pDOwNeTrg', 'OiLdgNA6hlM', 'egwj2y7gpmY']
  var slide_video = document.getElementsByClassName('slide_video')

  function onYouTubeIframeAPIReady() {
  	for (var i = 0; i < slide_video.length; i++) {
  		player = new YT.Player(slide_video[i], {
          videoId: videoId[i],
          events: {
            'onReady': onPlayerReady
          },
          playerVars: {
          	'autoplay': 0,
			    	'modestbranding': 1, 
			    	'rel': 0, 
			    	'showinfo': 0, 
			    	'controls': 0, 
			    	'disablekb': 1, 
			    	'enablejsapi': 0, 
			    	'iv_load_policy': 3,
			    	'loop': 1,
			    	'playlist': videoId[i],
			    	'enablejsapi': 1
          }
      });
  	}
  }
  function onPlayerReady(event) {
      event.target.playVideo(); 
      event.target.mute();
  } 
  function stopVideo() {
      player.stopVideo();
  }



//canvas circle backgraund phone in servises block
  window.onload = function circle()
  {
  	var canvas = document.getElementsByClassName('circle');
  	for (var i = 0; i < canvas.length; i++) {
  		var obCanvas = canvas[i].getContext('2d');
    		obCanvas.canvas.width = 500;
    	  obCanvas.canvas.height = 500;
    		obCanvas.beginPath();
    		obCanvas.arc(250, 250, 170, 0, 2*Math.PI, false);
    		obCanvas.fillStyle = '#F2F2F2';
    		obCanvas.fill();
    		obCanvas.lineWidth = 70;
    		obCanvas.strokeStyle = '#E3EAE5';
    		obCanvas.stroke();
      if(window.matchMedia('(max-width: 1366px)').matches){
        obCanvas.canvas.width = 300;
        obCanvas.canvas.height = 300;
        obCanvas.beginPath();
        obCanvas.arc(150, 150, 100, 0, 2*Math.PI, false);
        obCanvas.fillStyle = '#F2F2F2';
        obCanvas.fill();
        obCanvas.lineWidth = 30;
        obCanvas.strokeStyle = '#E3EAE5';
        obCanvas.stroke();
      }
  	}
  }

// google maps
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 40.739011, lng: -73.981544},
    zoom: 12,
    styles: [
  {
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "weight": 0.5
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#518259"
      },
      {
        "weight": 0.5
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "landscape",
    "stylers": [
      {
        "color": "#ccffc4"
      }
    ]
  },
  {
    "featureType": "poi",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road",
    "stylers": [
      {
        "color": "#e2ffe6"
      },
      {
        "weight": 1
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "stylers": [
      {
        "color": "#c8eecc"
      }
    ]
  },
  {
    "featureType": "transit",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "water",
    "stylers": [
      {
        "color": "#009cd6"
      }
    ]
  }
]
  });
}