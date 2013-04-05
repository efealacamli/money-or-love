window.onload = (function(){
	//Start crafty
	
	Crafty.init(400, 320).canvas.init();
	
/*	
	function generateWorld() {
		// Create the bushes along the x-axis which will form the boundaries
		for (var i = 0; i < 25; i++) {
		  Crafty.e("2D, Canvas, wall_top, wall1"+Crafty.randRange(1,2))
			.attr({x: i * 16, y: 0, z: 2});
		  Crafty.e("2D, Canvas, wall_bottom, wall1"+Crafty.randRange(1,2))
			.attr({x: i * 16, y: 304, z: 2});
		}

		// Create the bushes along the y-axis
		// We need to start one more and one less to not overlap the previous bushes
		for (var i = 1; i < 19; i++) {
		  Crafty.e("2D, Canvas, wall_left, wall1" + Crafty.randRange(1,2))
			.attr({x: 0, y: i * 16, z: 2});
		  Crafty.e("2D, Canvas, wall_right, wall1" + Crafty.randRange(1,2))
			.attr({x: 384, y: i * 16, z: 2});
		}
  }
*/

		
		Crafty.scene("loading");
});