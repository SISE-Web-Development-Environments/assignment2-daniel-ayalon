var context;
var shape = new Object();
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var ballsForEat;
var bigball;
var mediumball;
var smallball;
var bigballId=20;
var smallballId=21;
var mediumballId=22;
var mouth1;
var mouth2;
var eye1;
var eye2;
var monster1Id=10;
var monster2Id=11;
var monster3Id=12;
var monster4Id=13;




$(document).ready(function() {
	context = canvas.getContext("2d");
	Start();
	mouth1=0.15;mouth2=1.85;eye1=5;eye2=-15; 
	

});

function Start() {
	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 100;
	var food_remain=60;
	console.log(food_remain);
	this.bigball=0.6*food_remain;
	console.log(this.bigball);
	this.mediumball=0.3*food_remain;
	console.log(this.mediumball);
	this.smallball=0.1*food_remain;	
	console.log(this.smallball);
	var pacman_remain = 1;
	start_time = new Date();
	
	for (var i = 0; i < 10; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		           //walls//
		for (var j = 0; j < 10; j++) {
			board[i][j]=0;
		}
	}		
			
			
			// if (
			// 	(i == 3 && j == 3) ||
			// 	(i == 3 && j == 4) ||
			// 	(i == 3 && j == 5) ||
			// 	(i == 6 && j == 1) ||
			// 	(i == 6 && j == 2)||
			// 	(i== 8&& j==7)||
			// 	(i==9&& j==7)||
			// 	(i==8&&j==6)||
			// 	(i==5&&j==9)||
			// 	(i==6&&j==9)
			// ) {
				
			
			
				//walls
				board[3][3]=4;
				board[3][4]=4;
				board[3][5]=4;
				board[6][1]=4;
				board[6][2]=4;
				board[8][7]=4;
				board[9][7]=4;
				board[8][6]=4;
				board[5][9]=4;
				board[6][9]=4;
			 
			//monsters
				board[9][9]=5;
				board[0][0]=6;
				board[0][9]=7;
				board[9][0]=8;
			
			// 	var randomNum = Math.random();
			// 	if (randomNum <= (1.0 * food_remain) / cnt) {
			// 		food_remain--;
			// 		board[i][j] = 1;
			//  } 
			//     else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
			// 		shape.i = i;
			// 		shape.j = j;
			// 		pacman_remain--;
			// 		board[i][j] = 2;
			// 	} else {
			// 		board[i][j] = 0;
			// 	}
			// 	cnt--;
			

			//pacman
			if(pacman_remain>0){
			var cellForPacman = findRandomEmptyCell(board);
			
			shape.i = cellForPacman[0];
			shape.j = cellForPacman[1];
			board[shape.i][shape.j] = 2;
			pacman_remain--;	
			}

	
	
			//food
		while (food_remain>0) {
		var emptyCell = findRandomEmptyCell(board);	
		//console.log(emptyCell)
		var finish=false;	
		if(bigball>0&&!finish){
			board[emptyCell[0]][emptyCell[1]] =bigballId;
			
			finish=true;
			//console.log(finish);
			bigball--;
			//console.log(bigball);
			//console.log(food_remain);
		}
		if(mediumball>0&&!finish){
			board[emptyCell[0]][emptyCell[1]] =mediumballId;
			
			finish=true;
			mediumball--;
		}
	    if(smallball>0&&!finish){
			board[emptyCell[0]][emptyCell[1]]=smallballId;
			//console.log(board[emptyCell[0]][emptyCell[1]])
			finish=true;
			smallball--;
		}
		food_remain--;
	}
	
	
	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	interval = setInterval(UpdatePosition, 250);
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() *10);
	var j = Math.floor(Math.random() * 10);
	
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 10);
		j = Math.floor(Math.random() *10);
	}
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[38]) {
		return 1;
	}
	if (keysDown[40]) {
		return 2;
	}
	if (keysDown[37]) {
		return 3;
	}
	if (keysDown[39]) {
		return 4;
	}
}
//play with the Mouth//
function PacmanSmile(x,y){
	if(GetKeyPressed()==1){
		//up
		context.beginPath();
		context.arc(x, y, 30, -0.35 * Math.PI, 1.35 * Math.PI); // half circle
		context.lineTo(x, y);
		context.fillStyle = pac_color; //color
		context.fill();
		context.beginPath();
		context.arc(x + 15, y - 5, 5, 0, 2 * Math.PI); // circle
		context.fillStyle = "black"; //color
		context.fill();
		mouth1=-0.35;
		mouth2=1.35;
		eye1=15;
		eye2=-5;		
	}
	//down
	else if(GetKeyPressed()==2){
		context.beginPath();
		context.arc(x, y, 30, -1.35 * Math.PI, 0.35 * Math.PI); // half circle
				context.lineTo(x, y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(x -15, y +5, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
				mouth1=-1.35;
				mouth2=0.35;
				eye1=-15;
				eye2=5;
	}
	//right
	else if(GetKeyPressed()==4){
		context.beginPath();
		context.arc(x, y, 30, 0.15 * Math.PI, 1.85 * Math.PI); // half circle
		context.lineTo(x, y);
		context.fillStyle = pac_color; //color
		context.fill();
		context.beginPath();
		context.arc(x + 5, y - 15, 5, 0, 2 * Math.PI); // circle
		context.fillStyle = "black"; //color
		context.fill();
		mouth1=0.15;
		mouth2=1.85;
		eye1=5;
		eye2=-15;

	}
	//left
	else if(GetKeyPressed()==3){
		context.beginPath();
		context.arc(x, y, 30,-0.85 * Math.PI, 0.85 * Math.PI); // half circle
		context.lineTo(x, y);
		context.fillStyle = pac_color; //color
		context.fill();
		context.beginPath();
		context.arc(x - 5, y -15, 5, 0, 2 * Math.PI); // circle
		context.fillStyle = "black"; //color
		context.fill();
		mouth1=-0.85;
		mouth2=0.85;
		eye1=-5;
		eye2=-15;

	}
	else{
		context.beginPath();
				context.arc(x, y, 30, mouth1 * Math.PI, mouth2 * Math.PI); // half circle
				context.lineTo(x, y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(x + eye1, y+eye2, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
	}


}



function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	lblTime.value = time_elapsed;
	var count=1;
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) {
				this.PacmanSmile(center.x,center.y);	
			} else if (board[i][j]==bigballId ) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI);
				context.fillStyle ="red";		
				context.fill(); //color
				}
				else if(board[i][j]==mediumballId){	
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI);
				context.fillStyle="green";				
				context.fill();
				}
				else if(board[i][j]==smallballId){
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI);
				context.fillStyle= "blue";
				context.fill();	
				}	
				 else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
			else if(board[i][j] == 5){
				context.drawImage(ghost1,center.x-30,center.y-30,60,60);
			}
			else if(board[i][j] == 6){
				context.drawImage(ghost2,center.x-30,center.y-30,60,60);
			}
			else if(board[i][j] == 7){
				context.drawImage(ghost3,center.x-30,center.y-30,60,60);
			}
			else if(board[i][j] == 8){
				context.drawImage(ghost4,center.x-30,center.y-30,60,60);
			}
		
		
		}


	}
}

function UpdatePosition() {
	board[shape.i][shape.j] = 0;
	var x = GetKeyPressed();
	if (x == 1) {
		if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
			shape.j--;
		}
	}
	if (x == 2) {
		if (shape.j < 9 && board[shape.i][shape.j + 1] != 4) {
			shape.j++;
		}
	}
	if (x == 3) {
		if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
			shape.i--;
		}
	}
	if (x == 4) {
		if (shape.i < 9 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if (board[shape.i][shape.j] == 1) {
		score++;
	}
	board[shape.i][shape.j] = 2;
	var currentTime = new Date();
	time_elapsed = (currentTime - start_time) / 1000;
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (score == 50) {
		window.clearInterval(interval);
		window.alert("Game completed");
	} else {
		Draw();
	}

function updatePositionMonster(){

}







}

