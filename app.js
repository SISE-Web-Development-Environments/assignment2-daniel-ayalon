var context;
var shape = new Object();
var ghost5=new Object();
var ghost6=new Object();
var ghost7=new Object();
var ghost8=new Object();
var pokemonRandom=new Object();
//_________________changeeeeeeeeeeeeeeeeeee_________
var clockshow=new Object();
//_____________________stopppppppppppppppppppppp________
 
var board;
var score;
var pac_color;
var start_time;
var time_elapsed;
var interval;
var interval1;
var interval2;
var interval3;
var interval4;
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
var monster1Id=5;
var monster2Id=6;
var monster3Id=7;
var monster4Id=8;
var prevCell1=0;
var prevCell2=0;
var prevCell3=0;
var prevCell4=0;
var prevCell5=0;
var life;
var isMonster1=false;
var isMonster2=false;
var isMonster3=false;
var isMonster4=false;
var sugardaddy=false;
var numBalls=0;
var numMons=0;
var time=0;
var keyup=0;
var keydown=0;
var keyleft=0;
var keyright=0;
var activateMonster1=false;
var activateMonster2=false;
var activateMonster3=false;
var activateMonster4=false;
var pillsId=15;
var time1;
var pillTime=null;
var allTheBalls;
var column=10;
var pokemonId=30;
var isPokemon=true;
var usersList;
var passwordList;
var emailList;
var birthDateList;
var Firstnames;
var Lastnames;
//_________________changeeeeeeeeeeeeeeeeeee_________
				
var counter=0;
var clockId=40;
var clockOk=true;
//_____________________stopppppppppppppppppppppp________
 

$(document).ready(function() {
	context = canvas.getContext("2d");
	
	mouth1=0.15;mouth2=1.85;eye1=5;eye2=-15;
	sessionStorage.clear();
    localStorage.clear();
	createUsersList(); 
	

});

function Start() {
	playMusic();
	
	board = new Array();
	score = 0;
	pac_color = "yellow";
	var cnt = 100;
	definitionsOutputs()
	food_remain=numBalls;
	
	time1=time;
	
	this.bigball=0.6*food_remain;
	
	this.mediumball=0.3*food_remain;
	
	this.smallball=0.1*food_remain;	
	
	allTheBalls=numBalls;
	
	if(allTheBalls>=70||numMons>2){
		canvas.width="850"
		column=14;
		// document.getElementById("game").className="col-md-8"
		// document.getElementById("showDefintion").className="col-md-3"
		
	}
	//  document.getElementById("game").className="col-md-8"
	//  document.getElementById("showDefintion").className="col-md-3"
	var pacman_remain = 1;
	start_time = new Date();
	
	for (var i = 0; i < column; i++) {
		board[i] = new Array();
		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
		           //walls//
		for (var j = 0; j < 10; j++) {
			board[i][j]=0;
		}
	}		
		//Draw()	
			//walls
			 if(column==14){
				
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
				board[11][7]=4;
				board[11][8]=4
				board[12][4]=4;
				board[13][4]=4;
				//pills
				board[9][6]=pillsId;
				board[4][4]=pillsId;
				board[13][3]=pillsId;
				//monsters
				ghost5.i=13;
				ghost5.j=9;
				ghost6.i=0;
				ghost6.j=0;
				ghost7.i=0;
				ghost7.j=9;
				ghost8.i=13;
				ghost8.j=0;

				board[ghost5.i][ghost5.j]=monster1Id;
				board[ghost6.i][ghost6.j]=monster2Id;
				board[ghost7.i][ghost7.j]=monster3Id;
				board[ghost8.i][ghost8.j]=monster4Id;
				
				if(numMons==1){
					pokemonRandom.i=0;
					pokemonRandom.j=0;
					board[pokemonRandom.i][pokemonRandom.j]==pokemonId;
				}
				else if(numMons==2){
					pokemonRandom.i=0;
					pokemonRandom.j=9;
					board[pokemonRandom.i][pokemonRandom.j]=pokemonId;
				}
				else if(numMons==3){
					pokemonRandom.i=13;
					pokemonRandom.j=0;
					board[pokemonRandom.i][pokemonRandom.j]=pokemonId;
				}
				else {
					pokemonRandom.i=10;
					pokemonRandom.j=0;
					board[pokemonRandom.i][pokemonRandom.j]=pokemonId;
				}
				//_________________changeeeeeeeeeeeeeeeeeee_________
				//clock
				clockshow.i=7;
				clockshow.j=7;
				board[clockshow.i][clockshow.j]=clockId;
				//_____________________stopppppppppppppppppppppp________
			}
			else{
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
				ghost5.i=9;
				ghost5.j=9;
				ghost6.i=0;
				ghost6.j=0;
				ghost7.i=0;
				ghost7.j=9;
				ghost8.i=9;
				ghost8.j=0;

				board[ghost5.i][ghost5.j]=monster1Id;
				board[ghost6.i][ghost6.j]=monster2Id;
				board[ghost7.i][ghost7.j]=monster3Id;
				board[ghost8.i][ghost8.j]=monster4Id;
						
			//_________________changeeeeeeeeeeeeeeeeeee_________
				//clock
			clockshow.i=7;
			clockshow.j=7;
			board[clockshow.i][clockshow.j]=clockId;
			//_____________________stopppppppppppppppppppppp________
				
				//pills
			board[9][6]=pillsId;
			board[4][4]=pillsId;
			

			//pokemon
			if(numMons==1){
				pokemonRandom.i=0;
				pokemonRandom.j=0;
				board[pokemonRandom.i][pokemonRandom.j]==pokemonId;
			}
			else if(numMons==2){
				pokemonRandom.i=0;
				pokemonRandom.j=9;
				board[pokemonRandom.i][pokemonRandom.j]=pokemonId;
			}
			else if(numMons==3){
				pokemonRandom.i=9;
				pokemonRandom.j=0;
				board[pokemonRandom.i][pokemonRandom.j]=pokemonId;
			}
			else {
				pokemonRandom.i=6;
				pokemonRandom.j=0;
				board[pokemonRandom.i][pokemonRandom.j]=pokemonId;
			}
			
		}		
			
			
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
		var finish=false;	
		if(bigball>0&&!finish){
			board[emptyCell[0]][emptyCell[1]] =bigballId;
			finish=true;
			bigball--;
			
		}
		if(mediumball>0&&!finish){
			board[emptyCell[0]][emptyCell[1]] =mediumballId;
			
			finish=true;
			mediumball--;
		}
	    if(smallball>0&&!finish){
			board[emptyCell[0]][emptyCell[1]]=smallballId;
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
//_________________changeeeeeeeeeeeeeeeeeee_________
				//clock	
	if(counter==1){
	
	interval = setInterval(UpdatePosition, 200);
	intrerval1=setInterval(updatePositionMonster1,1000);
	interval2 =setInterval(updatePositionMonster2,1000);
	interval3=setInterval(updatePositionMonster3,1000);
	interval4=setInterval(updatePositionMonster4,1000);
	interval5=setInterval(MovePokemon,1000);
	
	}
	else if(counter>1){
	clearInterval(interval);
	clearInterval(intrerval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
	clearInterval(interval5);
	interval = setInterval(UpdatePosition, 200);
	intrerval1=setInterval(updatePositionMonster1,1000);
	interval2 =setInterval(updatePositionMonster2,1000);
	interval3=setInterval(updatePositionMonster3,1000);
	interval4=setInterval(updatePositionMonster4,1000);
	interval5=setInterval(MovePokemon,1000);
	Life.value=5;
	
	}
//_____________________stopppppppppppppppppppppp________
}

function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() *column);	
	var j = Math.floor(Math.random() *10);
	
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * column);
		j = Math.floor(Math.random() *10);
	}
	
	return [i, j];
}

function GetKeyPressed() {
	if (keysDown[keyup]) {
		return 1;
	}
	if (keysDown[keydown]) {
		return 2;
	}
	if (keysDown[keyleft]) {
		return 3;
	}
	if (keysDown[keyright]) {
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
	if(allTheBalls>=70||numMons>2){
		canvas.width="850"
		column=14;
		
	}
	
	for (var i = 0; i < column; i++) {
		for (var j = 0; j < 10; j++) {
			var center = new Object();
			
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] == 2) {
				this.PacmanSmile(center.x,center.y);	
			} else if (board[i][j]==bigballId ) {
				context.beginPath();
				context.arc(center.x, center.y, 10, 0, 2 * Math.PI);
				context.fillStyle =colorOfBall1();		
				context.fill(); //color
				}
				else if(board[i][j]==mediumballId){	
				context.beginPath();
				context.arc(center.x, center.y, 14, 0, 2 * Math.PI);
				context.fillStyle=colorOfBall2();				
				context.fill();
				}
				else if(board[i][j]==smallballId){
				context.beginPath();
				context.arc(center.x, center.y, 17, 0, 2 * Math.PI);
				context.fillStyle= colorOfBall3();
				context.fill();	
				}	
				 else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
			else if(board[i][j] == monster1Id&& activateMonster1){
				context.drawImage(ghost1,center.x-30,center.y-30,60,60);
			}
			else if(board[i][j] == monster2Id&& activateMonster2){
				context.drawImage(ghost2,center.x-30,center.y-30,60,60);
			}
			else if(board[i][j] == monster3Id&& activateMonster3){
				context.drawImage(ghost3,center.x-30,center.y-30,60,60);
			}
			else if(board[i][j] == monster4Id&& activateMonster4){
				context.drawImage(ghost4,center.x-30,center.y-30,60,60);
			}
			else if(board[i][j] ==pillsId){
				context.drawImage(pills,center.x-30,center.y-30,60,60);
			}
			else if(board[i][j]==pokemonId && isPokemon){
				context.drawImage(pokemon,center.x-30,center.y-30,60,60);
			}
			
			//_________________changeeeeeeeeeeeeeeeeeee_________
			else if(board[i][j]==clockId && clockOk){
				context.drawImage(clock,center.x-30,center.y-30,60,60);
			}
		//_____________________stopppppppppppppppppppppp________
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
		if (shape.i < 14 && board[shape.i + 1][shape.j] != 4) {
			shape.i++;
		}
	}
	if(board[shape.i][shape.j]==bigballId){
		score=score+5;
		allTheBalls--;
	}
	if(board[shape.i][shape.j]==mediumballId){
		score=score+15;
		allTheBalls--;
	}
	if(board[shape.i][shape.j]==smallballId){
		score=score+25;
		allTheBalls--;
	}
	if(board[shape.i][shape.j]==pokemonId){
		("hola")
		board[shape.i][shape.j]=0;
		isPokemon==false;
		score=score+50;
		clearInterval(interval5);
	}
	//_________________changeeeeeeeeeeeeeeeeeee_________
	//clock
	if(board[shape.i][shape.j]==clockId){
	start_time=new Date(start_time.getTime()+10*1000)
	clockOk=false;
	}
	//_____________________stopppppppppppppppppppppp________
	//pills
		var currentTime = new Date(); 
	if(board[shape.i][shape.j]==pillsId&&pillTime==null){
		clearInterval(interval);
		interval=setInterval(UpdatePosition,100);
		pillTime=new Date();

		
	}
	else if(pillTime!=null &&board[shape.i][shape.j]==pillsId){
		pillTime=new Date()
		//console.log(pillTime);


	}
	else if(pillTime!=null&&(currentTime-pillTime)/1000>=4){
		console.log("in");
		clearInterval(interval);
		interval= setInterval(UpdatePosition, 250);
		pillTime=null;

	}

	
	if(sugardaddy){
		board[shape.i][shape.j]=0;
		let findEmptyCell=findRandomEmptyCell(board);
		let i=findEmptyCell[0];
		let j=findEmptyCell[1];
		var isGood=true;
		if(column==10){
			while(isGood){
			if(i!=9 && j!=9 || i!=0 && j!=0 || i!=0 && j!=9 || i!=9 && j!=0 ){
				board[findEmptyCell[0]][findEmptyCell[1]] = 2;
				shape.i=findEmptyCell[0];
				shape.j=findEmptyCell[1];
				sugardaddy=false;
				isGood=false;
			}
			else{
				findEmptyCell=findRandomEmptyCell(board);
				i=findEmptyCell[0];
				j=findEmptyCell[1];
			}	
		} 
	}
	 else if(column==14){
		while(isGood){
		if(i!=13 && j!=9 || i!=0 && j!=0 || i!=0 && j!=9 || i!=13 && j!=0 ){
			board[findEmptyCell[0]][findEmptyCell[1]] = 2;
			shape.i=findEmptyCell[0];
			shape.j=findEmptyCell[1];
			sugardaddy=false;
			isGood=false;
		}
		else{
			findEmptyCell=findRandomEmptyCell(board);
			i=findEmptyCell[0];
			j=findEmptyCell[1];
		}	
	} 
}
}
	else {
		board[shape.i][shape.j]=2;
	}
	 
	
	//_________________changeeeeeeeeeeeeeeeeeee_________
	 time_elapsed = ( currentTime-start_time) / 1000;
	 if(time_elapsed>=time1){
		if(score<100){
		setTimeout(function(){alert("You are better than"+' '+ score +' '+"points!" );},1000);
		clearInterval(interval);
		stopMusic();
		}
		else if(score>=100){
		setTimeout(function(){alert("Winner!!!" );},1000);
		stopMusic();
		clearInterval(interval);
		}

	}	
	 
	 
	 //setInterval(UpdatePosition,250);
	
	
	
	
	if (score >= 20 && time_elapsed <= 10) {
		pac_color = "green";
	}
	if (allTheBalls==0) {
		window.clearInterval(interval);
		window.alert("Game completed");
		stopMusic();
	} else {
		Draw();
	}
//_____________________stopppppppppppppppppppppp________
}

//_____________moveghost5___________
function updatePositionMonster1(){
	var x;	
	let i=ghost5.i;
	let j=ghost5.j;
	if(activateMonster1){
		if(shape.i<ghost5.i&&board[i-1][j]!=4&&board[i-1][j]!=monster2Id&&board[i-1][j]!=monster3Id&&board[i-1][j]!=monster4Id  && board[i-1][j]!=pokemonId)
		{	//_________________changeeeeeeeeeeeeeeeeeee_________
				if(board[i-1][j]==2){
					board[i][j]=prevCell1;
					isMonster1=true;
					PacmanLoosing();
				}
				//_____________________stopppppppppppppppppppppp________
				else{
				board[i][j]=prevCell1;	
				prevCell1=board[i-1][j];
				ghost5.i=i-1;
				board[i-1][j]=monster1Id;
				}	
				
		}
		else if(shape.i>ghost5.i&&board[i+1][j]!=4&&board[i+1][j]!=monster2Id&&board[i+1][j]!=monster3Id&&board[i+1][j]!=monster4Id  && board[i+1][j]!=pokemonId)
		{
			if(board[i+1][j]==2){
				board[i][j]=prevCell1;
				isMonster1=true;
				PacmanLoosing();	
			}
			
			else{board[i][j]=prevCell1;	
				prevCell1=board[i+1][j];
				ghost5.i=i+1;
				board[i+1][j]=monster1Id;				
			}
			}
			else if(shape.j>ghost5.j&&board[i][j+1]!=4&&board[i][j+1]!=monster2Id&&board[i][j+1]!=monster3Id&&board[i][j+1]!=monster4Id  && board[i][j+1]!=pokemonId)
			{		
				
				if(board[i][j+1]==2){
					board[i][j]=prevCell1;
					isMonster1=true;
					PacmanLoosing();
				}
				else{
				board[i][j]=prevCell1;	
				prevCell1=board[i][j+1];
				ghost5.j=j+1;
				board[i][j+1]=monster1Id;				
				}
				}
				else if(shape.j<ghost5.j&&board[i][j-1]!=4&&board[i][j-1]!=monster2Id&&board[i][j-1]!=monster3Id&&board[i][j-1]!=monster4Id  && board[i][j-1]!=pokemonId)
				{
						
					if(board[i][j-1]==2){
						board[i][j]=prevCell1;
						isMonster1=true;
						PacmanLoosing();
					}
					
					else{board[i][j]=prevCell1;	
						prevCell1=board[i][j-1];
						ghost5.j=j-1;
						board[i][j-1]=monster1Id;				
					}
					}			
					else if(board[i][j]==2){
						board[i][j]=0;
						isMonster1=true;
						PacmanLoosing();
						
						}

				}	
			}
				//		_________move ghost6________________
function updatePositionMonster2(){
	let i=ghost6.i;
	let j=ghost6.j;
	if(activateMonster2){			
		if(shape.i<ghost6.i&&board[i-1][j]!=4&&board[i-1][j]!=monster1Id&&board[i-1][j]!=monster3Id&&board[i-1][j]!=monster4Id  && board[i-1][j]!=pokemonId)
		{	
			if(board[i-1][j]==2){
				board[i][j]=prevCell2;
				isMonster2=true;
				PacmanLoosing();
			}
			else{
				board[i][j]=prevCell2;	
				prevCell2=board[i-1][j];
				ghost6.i=i-1;
				board[i-1][j]=monster2Id;
			}
		
		
		}
		else if(shape.i>ghost6.i&&board[i+1][j]!=4&&board[i+1][j]!=monster1Id&&board[i+1][j]!=monster3Id&&board[i+1][j]!=monster4Id  && board[i+1][j]!=pokemonId)
		{
			if(board[i+1][j]==2){
				board[i][j]=prevCell2;
				isMonster2=true;
				PacmanLoosing();
			}
			else{
				board[i][j]=prevCell2;	
				prevCell2=board[i+1][j];
				ghost6.i=i+1;
				board[i+1][j]=monster2Id;				
			}
			}
			else if(shape.j>ghost6.j&&board[i][j+1]!=4&&board[i][j+1]!=monster1Id&&board[i][j+1]!=monster3Id&&board[i][j+1]!=monster4Id  && board[i][j+1]!=pokemonId)
			{		
				
				if(board[i][j+1]==2){
					board[i][j]=prevCell2;
					isMonster2=true;
					PacmanLoosing();
				}
				else{
				board[i][j]=prevCell2;	
				prevCell2=board[i][j+1];
				ghost6.j=j+1;
				board[i][j+1]=monster2Id;				
				}
				}
				else if(shape.j<ghost6.j&&board[i][j-1]!=4&&board[i][j-1]!=monster1Id&&board[i][j-1]!=monster3Id&&board[i][j-1]!=monster4Id  && board[i][j-1]!=pokemonId)
				{
						
					if(board[i][j-1]==2){
						board[i][j]=prevCell2;
						isMonster2=true;
						PacmanLoosing();
					}
					else{
						board[i][j]=prevCell2;	
						prevCell2=board[i][j-1];
						ghost6.j=j-1;
						board[i][j-1]=monster2Id;				
					}
					}	
					else if(board[i][j]==2){
						board[shape.i][shape.j]=0;
						isMonster2=true;
						PacmanLoosing();
						}
				}
			}
//__________________________moveghost7_______________

function updatePositionMonster3(){
	let i=ghost7.i;
	let j=ghost7.j;
	if(activateMonster3){		
		if(shape.i<ghost7.i&&board[i-1][j]!=4&&board[i-1][j]!=monster1Id&&board[i-1][j]!=monster2Id&&board[i-1][j]!=monster4Id  && board[i-1][j]!=pokemonId)
		{		
			if(board[i-1][j]==2){
				board[i][j]=prevCell3;
				isMonster3=true;
				PacmanLoosing();
			}
			else{
				board[i][j]=prevCell3;	
				prevCell3=board[i-1][j];
				ghost7.i=i-1;
				board[i-1][j]=monster3Id;
			}
				
		}
		else if(shape.i>ghost7.i&&board[i+1][j]!=4&&board[i+1][j]!=monster1Id&&board[i+1][j]!=monster2Id&&board[i+1][j]!=monster4Id  && board[i+1][j]!=pokemonId)
		{
				
			if(board[i+1][j]==2){
				board[i][j]=prevCell3;
				isMonster3=true;
				PacmanLoosing();
			}
			else{	
				board[i][j]=prevCell3;	
				prevCell3=board[i+1][j];
				ghost7.i=i+1;
				board[i+1][j]=monster3Id;				
			}
			}
			else if(shape.j>ghost7.j&&board[i][j+1]!=4&&board[i][j+1]!=monster1Id&&board[i][j+1]!=monster2Id&&board[i][j+1]!=monster4Id  && board[i][j+1]!=pokemonId)
			{		
				if(board[i][j+1]==2){
					board[i][j]=prevCell3;
					isMonster3=true;
					PacmanLoosing();
				}
				else{
				board[i][j]=prevCell3;	
				prevCell3=board[i][j+1];
				ghost7.j=j+1;
				board[i][j+1]=monster3Id;				
				}
				}
				else if(shape.j<ghost7.j&&board[i][j-1]!=4&&board[i][j-1]!=monster1Id&&board[i][j-1]!=monster2Id&&board[i][j-1]!=monster4Id  && board[i][j-1]!=pokemonId)
				{
						
					if(board[i][j-1]==2){
						board[i][j]=prevCell3;
						isMonster3=true;
						PacmanLoosing();
					}
					else{
						board[i][j]=prevCell3;	
						prevCell3=board[i][j-1];
						ghost7.j=j-1;
						board[i][j-1]=monster3Id;				
					}
					}	
				else if(board[i][j]==2){
					isMonster3=true;
					board[shape.i][shape.j]=0;
					PacmanLoosing();
					
				}
			}
		}
			//______________moveghost8______________________

function updatePositionMonster4(){
	let i=ghost8.i;
	let j=ghost8.j;
				
	if(activateMonster4){
		if(shape.i<ghost8.i&&board[i-1][j]!=4&&board[i-1][j]!=monster1Id&&board[i-1][j]!=monster2Id&&board[i-1][j]!=monster3Id  && board[i-1][j]!=pokemonId)
		{	
			if(board[i-1][j]==2){
				board[i][j]=prevCell4;
				isMonster4=true;
				PacmanLoosing();
			}
			else{
				board[i][j]=prevCell4;	
				prevCell4=board[i-1][j];
				ghost8.i=i-1;
				board[i-1][j]=monster4Id;	
			}
		}
		else if(shape.i>ghost8.i&&board[i+1][j]!=4&&board[i+1][j]!=monster1Id&&board[i+1][j]!=monster2Id&&board[i+1][j]!=monster3Id  && board[i+1][j]!=pokemonId)
		{
				
			if(board[i+1][j]==2){
				board[i][j]=prevCell4;
				isMonster4=true;
				PacmanLoosing();
			}
				board[i][j]=prevCell4;	
				prevCell4=board[i][j];
				ghost8.i=i+1;
				board[i+1][j]=monster4Id;				
			
			}
			else if(shape.j>ghost8.j&&board[i][j+1]!=4&&board[i][j+1]!=monster1Id&&board[i][j+1]!=monster2Id&&board[i][j+1]!=monster3Id  && board[i][j+1]!=pokemonId)
			{		
				
				if(board[i][j+1]==2){
					board[i][j]=prevCell4;
					isMonster4=true;
					PacmanLoosing();
				}
				else{
				board[i][j]=prevCell4;	
				prevCell4=board[i][j];
				ghost8.j=j+1;
				board[i][j+1]=monster4Id;				
				}
				}
				else if(shape.j<ghost8.j&&board[i][j-1]!=4&&board[i][j-1]!=monster1Id&&board[i][j-1]!=monster2Id&&board[i][j-1]!=monster3Id && board[i][j-1]!=pokemonId)
				{
						
					if(board[i][j-1]==2){
						board[i][j]=prevCell4;
						isMonster4=true;
						PacmanLoosing();
					}
					else{
						board[i][j]=prevCell4;	
						prevCell4=board[i][j-1];
						ghost8.j=j-1;
						board[i][j-1]=monster4Id;				
					}
					}	
					else if(board[i][j]==2){
						board[shape.i][shape.j]=0;
						isMonster4=true;
						PacmanLoosing();
						}
		}
	}

//_________________________movePokemon__________________
function MovePokemon(){
	var i=pokemonRandom.i;
	var j=pokemonRandom.j;
	
	var isOk=true;
	var x=Math.floor((Math.random()*4)+1);
	
	while(isOk){
		if(x==1 && i-1>=0 && board[i-1][j]!=4 && board[i-1][j]!=monster1Id && board[i-1][j]!=monster2Id && board[i-1][j]!=monster3Id && board[i-1][j]!=monster4Id ){
					
				
					if(board[i-1][j]==2){
						score=score+50;
						clearInterval(interval5);
						isPokemon=false;
					}
					else{
					board[i][j]=prevCell5;	
					prevCell5=board[i-1][j];
					pokemonRandom.i=i-1;
					board[i-1][j]=pokemonId;
					isOk=false;
					
			}
	}
		if(x==2 && i+1<column && board[i+1][j]!=4 && board[i+1][j]!=monster1Id && board[i+1][j]!=monster2Id && board[i+1][j]!=monster3Id && board[i+1][j]!=monster4Id    ){
					
			if( board[i+1][j]==2){
				score=score+50;
				clearInterval(interval5);
				isPokemon=false;
			}
			else{
					board[i][j]=prevCell5;	
					prevCell5=board[i+1][j];
					pokemonRandom.i=pokemonRandom.i+1;
					board[i+1][j]=pokemonId;
					isOk=false;
	}		
					
		}
		if(x==3 && j+1<10 && board[i][j+1]!=4 && board[i][j+1]!=monster1Id && board[i][j+1]!=monster2Id && board[i][j+1]!=monster3Id && board[i][j+1]!=monster4Id ){
					
			
			if( board[i][j+1]==2){
				score=score+50;
				clearInterval(interval5);
				isPokemon=false;
			}
			else{
					board[i][j]=prevCell5;	
					prevCell5=board[i][j+1];
					pokemonRandom.j=pokemonRandom.j+1;
					board[i][j+1]=pokemonId;
					isOk=false;
					
	}	
		}
		if(x==4 && j-1>=0 && board[i][j-1]!=4 && board[i][j-1]!=monster1Id && board[i][j-1]!=monster2Id && board[i][j-1]!=monster3Id && board[i][j-1]!=monster4Id ){
						
			if(board[i][j-1]==2){
				score=score+50;
				clearInterval(interval5);
				isPokemon=false;
			}
			else{
				board[i][j]=prevCell5;	
				prevCell5=board[i][j-1];
				pokemonRandom.j=pokemonRandom.j-1;
				board[i][j-1]=pokemonId;
				isOk=false;
			
	}
		} 
		x=Math.floor((Math.random()*4)+1);	
	}				
}
//_________________________pacmanLoosing______________
	function PacmanLoosing(){
	
	score=score-10;
	Life.value=Life.value-1;
	sugardaddy=true;
	if(Life.value==0){
	stopMusic();
	clearInterval(interval);
	clearInterval(interval1);
	clearInterval(interval2);
	clearInterval(interval3);
	clearInterval(interval4);
	alert("Loser!");
}
if(isMonster1==true){
	if(column==10){
		ghost5.i=9;
		ghost5.j=9;
		board[ghost5.i][ghost5.j]=monster1Id;
		isMonster1=false;
	}
	else if(column==14){
		console.log(column);
		ghost5.i=13;
		ghost5.j=9;
		board[ghost5.i][ghost5.j]=monster1Id;
		isMonster1=false;
	}

}
else if(isMonster2==true){	
	ghost6.i=0;
	ghost6.j=0;
	board[ghost6.i][ghost6.j]=monster2Id;
	isMonster2=false;	
}
else if(isMonster3==true){
	ghost7.i=0;
	ghost7.j=9;
	board[ghost7.i][ghost7.j]=monster3Id;
	isMonster2=false;
}
else if(isMonster4==true){
	
	if(column===10){
		ghost8.i=9;
		ghost8.j=0;
		board[ghost8.i][ghost8.j]=monster4Id;
		isMonster2=false;
	}
	else if(column===14){
		console.log(column);
		ghost8.i=13;
		ghost8.j=0;
		board[ghost8.i][ghost8.j]=monster4Id;
		isMonster2=false;
	}
}

}

//_______________________________defintionOfOutout_________________________
function definitionsOutputs(){
	//_________________changeeeeeeeeeeeeeeeeeee_________
	activateMonster1=false;
	activateMonster2=false;
	activateMonster3=false;
	activateMonster4=false;	
	//_____________________stopppppppppppppppppppppp________
	keyup=insertToUp.value;
	keydown=insertTodown.value;
	keyright=insertToRight.value;
	keyleft=insertToleft.value;
	numBalls=insertballs.value;
	numMons=numberofMonsters1.value;
	if(numMons==1){
		activateMonster1=true;
	}
	else if(numMons==2){
		activateMonster1=true;
		activateMonster2=true;
	}
	else if(numMons==3){
		activateMonster1=true;
		activateMonster2=true;
		activateMonster3=true;
	}
	else if(numMons==4) {
		activateMonster1=true;
		activateMonster2=true;
		activateMonster3=true;
		activateMonster4=true;
	}
	time=timedefintion();

}