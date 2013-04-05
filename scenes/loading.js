var heart;
var gold;
var lava;
var player_man;
var player_woman;
var movableLava;
var movableWall;
var movableFinishTile;

var level = ["levels/map1.tsv", 
			"levels/map2.tsv", 
			"levels/map3.tsv",
			"levels/map4.tsv",
			"levels/map5.tsv",
			"levels/map6.tsv",
			"levels/map7.tsv",
			"levels/map8.tsv",
			"levels/map9.tsv",
			"levels/map10.tsv"];
var currentLevelIndex;

Crafty.sprite(16,"images/sprite1.png", {
	wall1: [0,0],
	wall2: [1,0],
	lava: [0,1],
	finishTile : [1,1]
});

Crafty.sprite(16,"images/sprite2.png", {
	man: [0,0],
	woman: [0,1]
});



Crafty.sprite(16,"images/sprite3.png", {
	gold: [0,0],
	heart: [0,1]
});

Crafty.scene("loading",function() {
	Crafty.load(["sprite1.png", 
				 "sprite2.png"], function() {
		//alert("Loaded!!!!!!!");							
		Crafty.scene("main");
	});
	Crafty.background("#333");
    Crafty.e("2D, DOM, Text").attr({ w: 100, h: 20, x: 150, y: 250 })
            .text("LOADING...")
			.textColor('#FFFFFF')
			.textFont({ size: '20px', weight: 'bold' })
            .css({ "text-align": "center" });
});


Crafty.audio.add("coin", "sounds/coin.wav");
Crafty.audio.add("heart", "sounds/heart.wav");
Crafty.audio.add("hurt", "sounds/hurt.wav");
Crafty.audio.add("finish", "sounds/finish.wav");

function loadMap(file, callback) {
	
		//alert("ollalalal");
	
		$.get(file,function(data) {
		var level = [];
		// Split out each row
		$.each(data.split("\n"),function(y,row) {
		  
		  var columns = row.split("\t");
		  level.push(columns);
		  
		  // Then split out each column
		  $.each(columns,function(x,column) {
			
			if(column == "1"){
				player_man = Crafty.e("2D, Canvas, PlayerControls, Slide, man, Collision").attr({x:x * 16, y: y * 16})
																			.collision(new Crafty.polygon([0,0],[12,0],[0,12]));				
			}
			
			else if(column == "2"){
				player_woman = Crafty.e("2D, Canvas, PlayerControls, Slide, woman, Collision").attr({x:x * 16, y: y * 16})
																			.collision(new Crafty.polygon([0,0],[12,0],[0,12]));
			}			
			
			//lava tiles
			else if(column == "L"){
				lava = Crafty.e("2D, Canvas, lava, lava").attr({x:x * 16, y: y * 16});
			}
			//finish tiles
			else if(column == "F"){
				Crafty.e("2D, Canvas, finishTile, finishTile, Collision").attr({x:x * 16, y: y * 16})
																		.collision(new Crafty.polygon([0,0],[12,0],[0,12]));
			}
			//heart tile
			else if(column == "H"){
				heart = Crafty.e("2D, Canvas, heart").attr({x:x * 16, y: y * 16});
			}
			//gold tile
			else if(column == "G"){
				gold = Crafty.e("2D, Canvas, gold").attr({x:x * 16, y: y * 16});
			}
			//movable wall tile
			else if(column == "w"){
				movableWall = Crafty.e("2D, Canvas, PlayerControls, Slide, wall2, wall1, Collision").attr({x:x * 16, y: y * 16})
																									.collision(new Crafty.polygon([0,0],[12,0],[0,12]));			
			}	
			//movable lava tile
			else if(column == "l"){
				movableLava = Crafty.e("2D, Canvas, PlayerControls, Slide, lava, lava").attr({x:x * 16, y: y * 16});			
			}
			//movable finish tile
			else if(column == "f"){
				movableFinishTile = Crafty.e("2D, Canvas, PlayerControls, Slide, finishTile, finishTile, Collision").attr({x:x * 16, y: y * 16})
																													.collision(new Crafty.polygon([0,0],[12,0],[0,12]));				
			}				
			
			//wall tiles
			else if(column){
				Crafty.e("2D, Canvas, wall1, wall1, Collision").attr({x:x * 16, y: y * 16})
																.collision(new Crafty.polygon([0,0],[12,0],[0,12]));
			}
			
		  });

		});

		// Phone back home when we're done
		callback(level);
		});
}