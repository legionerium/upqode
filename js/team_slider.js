// Масив обьектов слайдера
var team = [];

team[0] = {
	name: 'Julia Harrington',
	post: 'ART DIRECTOR',
	disc: 'Have you ever had a problem with a burned light? Thanks to the effort of Thomas Edison we no longer need to invent a light bulb. We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.',
	facebook: 'https://www.facebook.com/',
	linkedin: 'https://www.linkedin.com/',
	twitter: 'https://www.twitter.com/',
	foto: '../img/team_ava_1.png'
}

team[1] = {
	name: 'Minnie Bell',
	post: 'DevOps',
	disc: 'Have you ever had a problem with a light bulb. We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.',
	facebook: 'https://www.facebook.com/',
	linkedin: 'https://www.linkedin.com/',
	twitter: 'https://www.twitter.com/',
	foto: '../img/team_ava_2.png'
}

team[2] = {
	name: 'Bell Minnie ',
	post: 'web',
	disc: 'Have you ever had a problem with a light bulb. We just go to the store or our cupboard and pull one out and screw it in. When we are feeling so low and deep in the pits, this is when we need light to see our way through.',
	facebook: 'https://www.facebook.com/',
	linkedin: 'https://www.linkedin.com/',
	twitter: 'https://www.twitter.com/',
	foto: '../img/team_ava_3.png'
}


window.onload = function () {
	var i = 0;
	var team_slide_button = document.getElementsByClassName('team_slide_button')[0].children;
	team_slide_button[0].addEventListener("click", function(event){
			event.preventDefault()
				++i
				if (i<=team.length) {
					teamSlider(i, team);
				}else{
					i=0;
					teamSlider(i, team);
				}
	}, false)
	team_slide_button[1].addEventListener("click", function(event){
			event.preventDefault()
				if (i==0) {
					i=team.length;
					teamSlider(i, team);
				}else{
					--i;
					teamSlider(i, team);
				}
	}, false)
}



function teamSlider(x, mass){

	var team_item_name = document.getElementsByClassName('discrition');
	var person_ava = document.getElementsByClassName('person_ava');
	var team_slide_name = document.getElementsByClassName('team_slide_name')[0];
	var i = 0;
	var j = 0;
	for (var key in mass[x]){
		//присвоение значений первым трем дочерным элементам класса "discrition"
		if (i<3) {
			team_item_name[0].children[i].innerHTML = mass[x][key];
			++i;
		//присвоение значений 4 и 5 дочерным элементам класса "discrition"
		}else{
			if (3<=i && i<6) {					
				let temp = mass[x][key];
				let elem = team_item_name[0].children[3].children[j].children;
				elem[0].setAttribute("href", temp);
				++j;
				++i;
			}else{
				// формирование фото слайдера
				for (var i = 0; i < person_ava.length; i++) {
					let temp = mass[x][key]
					person_ava[i].setAttribute("src", temp);
				}if (x+1>=mass.length){
					let temp = mass[0][key];				
					let elem = team_item_name[0].children[4].children[0].children;
					elem[0].setAttribute("src", temp);
				}else{
					let temp = mass[x+1][key];				
					let elem = team_item_name[0].children[4].children[0].children;
					elem[0].setAttribute("src", temp);
				}
			}
		}
	}
	// перебор имен следующего слайда
	for (var key in mass[x]){
		if (x+1>=mass.length) {
			team_slide_name.innerHTML = mass[0][key];
			break
		}else{
			team_slide_name.innerHTML = mass[x+1][key];
			break
		}
	}		
}