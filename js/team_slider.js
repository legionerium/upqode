window.onload = function () {
	
	teamSlider(0);

	var team_slide_button = document.getElementsByClassName('team_slide_button')[0].children;
	team_slide_button.addEventListener('click', function(event){
		if (event.target == team_slide_button[0]) {
			teamSlider(1);
		}
	}, false)
}



function teamSlider(x){
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

	var team_item_name = document.getElementsByClassName('discrition');
	var person_ava = document.getElementsByClassName('person_ava');
	var i = 0;
	var j = 0;
	for (var key in team[x]){
		if (i<3) {
			team_item_name[0].children[i].innerHTML = team[x][key];
			++i;
		}else{
			if (3<=i && i<6) {					
				let temp = team[x][key];
				let elem = team_item_name[0].children[3].children[j].children;
				elem[0].setAttribute("href", temp);
				++j;
				++i;
			}else{
				let temp = team[x+1][key];				
				let elem = team_item_name[0].children[4].children[0].children;
				elem[0].setAttribute("src", temp);
				for (var i = 0; i < person_ava.length; i++) {
					let temp = team[x][key]
					person_ava[i].setAttribute("src", temp);
				}
			}
		}
	}		
}


// var team_slide_btn = document.getElementsByClassName('team_slide_button')[0].children;
// team_slide_btn.addEventListener('click', function(event){

