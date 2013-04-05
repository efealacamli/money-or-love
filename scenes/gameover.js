Crafty.scene("gameover",function() {

	Crafty.background("#333");
    Crafty.e("2D, DOM, Text").attr({ w: 100, h: 20, x: 150, y: 120 })
            .text("GAME OVER Press 'R' key to restart the level")
			.textColor('#FFFFFF')
			.textFont({ size: '20px', weight: 'bold' })
            .css({ "text-align": "center" });
			
	Crafty.bind('KeyDown', function(e) {
		if(e.key == Crafty.keys['R']) {
		  Crafty.scene("loading");
		}
	  });			
});