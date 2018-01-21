

var pics = [['accent_t_copy1.jpg', 1400, 1], ['accord_t.jpg', 1400, 1], ['agria_t_copy1.jpg', 1400, 1], ['almera_t_copy1.jpg', 1400, 1], ['ambo_t_copy4.jpg', 1400, 1], ['amora_t.jpg', 1400, 1], ['amorosa_t.jpg', 1400, 1], ['annabelle_t.jpg', 1400, 1], ['anna_t.jpg', 1400, 1], ['anna_t_copy1.jpg', 1400, 1], ['anya_t_copy1.jpg', 1400, 1], ['argos_t_copy3.jpg', 1400, 1], ['arranbanner_t.jpg', 1400, 1], ['arrancomet_t.jpg', 1400, 1], ['arranpilot_t_copy9.jpg', 1400, 1], ['arranvictory2_t.jpg', 1400, 1], ['arrow_t.jpg', 1400, 1], ['asterix_t.jpg', 1400, 1], ['atlantic_t_copy2.jpg', 1400, 1], ['avalanche_t.jpg', 1400, 1], ['avondale_t_copy1.jpg', 1400, 1], ['axona_t.jpg', 1400, 1], ['ballydoon_t.jpg', 1400, 1], ['balmoral.jpg', 1400, 1], ['bambino_t_copy2.jpg', 1400, 1], ['banba_t_copy1.jpg', 1400, 1], ['barna_t_copy1.jpg', 1400, 1], ['belledefontenay_t.jpg', 1400, 1], ['bluebelle_t.jpg', 1400, 1], ['bluedanube_t.jpg', 1400, 1], ['bonnie_t_copy2.jpg', 1400, 1], ['britishqueen_t_copy2.jpg', 1400, 1], ['brooke_t.jpg', 1400, 1], ['burren_t_copy2.jpg', 1400, 1], ['cabaret_t_copy2.jpg', 1400, 1], ['caesar_t.jpg', 1400, 1], ['camelot_t.jpg', 1400, 1], ['cara_t_copy2.jpg', 1400, 1], ['carlingford_t_copy1.jpg', 1400, 1], ['carnaval2_t.jpg', 1400, 1], ['casablanca_t.jpg', 1400, 1], ['catriona_t.jpg', 1400, 1], ['celine_t_copy2.jpg', 1400, 1], ['charlemont_t.jpg', 1400, 1], ['charlotte_t_copy2.jpg', 1400, 1], ['chincha_t.jpg', 1400, 1], ['cosmos_t_copy2.jpg', 1400, 1], ['dunbarrover_t.jpg', 1400, 1], ['dunbarstandard_t.jpg', 1400, 1], ['dundrod_t.jpg', 1400, 1], ['dunluce_t.jpg', 1400, 1], ['heh.jpg', 1400, 1], ['incadawn_t.jpg', 1400, 1], ['Jonathan Kozol.jpg', 1400, 1], ['madeleine_t.jpg', 1400, 1], ['madingley_t.jpg', 1400, 1], ['marispeer2_t.jpg', 1400, 1], ['markies_t_copy1.jpg', 1400, 1], ['rangerrussett_t.jpg', 1400, 1], ['robinta_t.jpg', 1400, 1], ['romano_t_copy2.jpg', 1400, 1], ['russetburbank_t_copy2.jpg', 1400, 1], ['Some Random Guy.jpg', 1400, 1], ['The Best Linear Algebra Textbook I have Ever Read.jpg', 1400, 1]];

// Declaring Variables for hoisting

var Sa = 0;
var Sb = 0;
var randomNumberLeft = Math.floor(Math.random() * pics.length);
var randomNumberRight = Math.floor(Math.random() * pics.length);
var Ra;
var Rb;

if(document.getElementsByTagName("title")[0].innerHTML === "FaceMush") {
	window.onload = start;
} else {
	display();
}

// Creates initial random pictures and sets default elo for all pics

function start() {

	document.getElementById("rightPic").src = "images/" + pics[Math.floor(Math.random() * pics.length)][0];
	
	while(document.getElementById("leftPic").src === document.getElementById("rightPic").src || document.getElementById("leftPic").src === "https://whatislife85.github.io/FaceMush/index.html") {
		document.getElementById("leftPic").src = "images/" + pics[Math.floor(Math.random() * pics.length)][0];
	}
}

// Replace old image with new random, prevent repetition w/ last pic + other side, update rank

function newLeftPic() {

	Sa = 1;
	
	randomNumberLeft = Math.floor(Math.random() * pics.length);
	randomNumberRight = Math.floor(Math.random() * pics.length);

	console.log("RIGHT IMAGE: " + pics[randomNumberLeft][0], "  Ra (LEFT RATING): " + Ra, "  Rb (RIGHT RATING): " + Rb);

	if ("https://whatislife85.github.io/FaceMush/images/" + pics[randomNumberLeft][0] === document.getElementById("leftPic").src
	|| document.getElementById("rightPic").src === "https://whatislife85.github.io/FaceMush/images/" + pics[randomNumberLeft][0]
	//|| Rb < (Ra - 20)
	) {
		console.log("OH NO");
		newLeftPic();
	} else {
		document.getElementById("rightPic").src = "images/" + pics[randomNumberLeft][0];
		elo();

		Sa = 0;

		for(i = 0; i < pics.length; i++) {
			if (document.getElementById("leftPic").src === "https://whatislife85.github.io/FaceMush/images/" + pics[i][0] && Sa === 0) {
				randomNumberRight = i;
		
		$(document).ready(function() {
			$.ajax({
			type: "POST",
			url: "http://127.0.0.1:5000/",
			data: {"name": pics[randomNumberRight][0], "rank": pics[randomNumberRight][1], "clicks": 1},
			success: console.log("POSTED MAYBE"),
			dataType: "text"
			});
		});
	}
	}
	}
}

function newRightPic() {

	Sb = 1;

	randomNumberRight = Math.floor(Math.random() * pics.length);

	console.log("LEFT IMAGE: " + pics[randomNumberRight][0], "  Ra (LEFT RATING): " + Ra, "  Rb: (RIGHT RATING)" + Rb);

	if ("https://whatislife85.github.io/FaceMush/images/" + pics[randomNumberRight][0] === document.getElementById("rightPic").src
	|| document.getElementById("leftPic").src === "https://whatislife85.github.io/FaceMush/images/" + pics[randomNumberRight][0]
	//|| Ra < (Rb - 20)
	)	{
		console.log("OH NO");
		newRightPic();
	} else {
		
		document.getElementById("leftPic").src = "images/" + pics[randomNumberRight][0];

		elo();
	
		Sb = 0;

		for(i = 0; i < pics.length; i++) {
			if (document.getElementById("rightPic").src === "https://whatislife85.github.io/FaceMush/images/" + pics[i][0] && Sb === 0) {
				randomNumberLeft = i;
		$(document).ready(function() {
			$.ajax({
			type: "POST",
			url: "http://127.0.0.1:5000/",
			data: {"name": pics[randomNumberLeft][0], "rank": pics[randomNumberLeft][1], "clicks": 1},
			success: console.log("POSTED MAYBE"),
			dataType: "text"
			});
	});
	}
	}
	}		
}

//Elo rating system to rank each picture cuz it was in the movie

function elo() {

	Ra = pics[randomNumberLeft][1];
	Rb = pics[randomNumberRight][1];
	
	var Ea = (1 / (1 + Math.pow(10, (Rb - Ra)/400)));
	var Eb = (1 / (1 + Math.pow(10, (Ra - Rb)/400)));

	pics[randomNumberLeft][1] = Math.round(Ra + (32 * (Sa - Ea)) );
	pics[randomNumberRight][1] = Math.round(Rb + (32 * (Sb - Eb)) );

}

//Display Ranks of all pics

function display() {
	console.log(pics);	
}

function test() {
	$.ajax({
	type: "GET",
	url: "http://127.0.0.1:5000/",

	success: function() {
		console.log(ranking_list);
		$("ul").html("");
		for (i = ranking_list.length - 1; i >=0; i--) {
			var ranking_pic = "http://localhost/images/" + ranking_list[i][1];
			$("ul").append("<li><img src = "+ranking_pic+"></img><div>Clicks: "+ranking_list[i][0]+"<br>Image Name: "+ranking_list[i][1]+"<br>Image Elo Ranking: "+ranking_list[i][2]+"</div></li><br><br>");
		}
	},
	error: function(data, xhr, Status, error,  err) {
		console.log(xhr.responseText, xhr.responseText, xhr.status, xhr.textStatus, xhr.error, xhr.err);
		alert("Error");
		},
		dataType: "script"
	});
}
