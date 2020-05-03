


    //________________________________login_______________________________________


if(typeof(Storage)!=="undefined"){
    sessionStorage.setItem("p","p");
    }
else{
    alert("Sorry,your browser does not in the web storage ")
}
function findInArray()
{
    let isFound=false;
    let tmp=$("#Uname").value;
    for(i=0;i<AllUsers.length;i++){
        if(tmp==AllUsers[i])
            isFound=true;
    }
    if(isFound==false){
        AllUsers.push(tmp);
    }
        } 

 function correctDetails()
{
    let name=$("#Uname").value;
    let UserPassword=$("#Upassword").value;
    if(sessionStorage.getItem(name).localeCompare(UserPassword)!=0){
        document.getElementById("note").showModal();
    }
   else{
                $(".sc").hide();
                $("#definition").show();
   }
    }    function func2(){
    document.getElementById("note").close();

    }






//_____________________definition__________________________________________

//buttons


// function moveup(event) {
//     var buttonup1=event.which || event.keyCode;;
//     console.log(buttonup1);    
// }
function moveup(event) {
    var buttonup= event.keyCode;
    console.log(buttonup); 
    return buttonup;   
}



function movedown(event) {
    var buttondown= event.keyCode;
    console.log(buttondown); 
    return buttondown;    
}


function moveright(event) {
    var buttonright= event.keyCode;
    console.log(buttonright);
    return buttonright;    
}

function moveleft(event) {
    var buttonleft= event.keyCode;
    console.log(buttonleft); 
    return buttonleft;   
}


function numberBalls(){
    // event.preventDefault();
    var ballsnumber=document.getElementById("numberofballs").value;
    if(ballsnumber<50||ballsnumber>90){
        alert("number must be between 50 to 90") 
    }
    else if(ballsnumber>=50||ballsnumber<=90){
    console.log(ballsnumber);        
    return ballsnumber;
    }
}
    // return ballsnumber;
    // return ballsnumber
    // ballsnumber=prompt("please choose number of balls");
    // while(ballsnumber<50||ballsnumber>90){
    //     alert("number must be between 50 to 90")
    //     ballsnumber=prompt("please choose number of balls");
    // }	
    // insertballs.value=ballsnumber;
    
 

// function numberofFood(){
//     var allfoood=ballsnumber;
//     console.log(allfoood)
//     return allfoood ;
// }

// color1
function colorOfBall1(){
var color1=favcolor1.value;  
    return color1;  
}
// color2
function colorOfBall2(){
    var color2=favcolor2.value;
    return color2;  
  }

//   color3
  function colorOfBall3(){
    var color3=favcolor3.value;
    return color3;  
  }





// function timer(){
//     var time=document.getElementById("TimeOfGame").value;  
//     while(time!=0){
//         setTimeout(timer,1000*time);
//     }
// }

// time of game
function timedefintion(){
    var time=document.getElementById("TimeOfGame").value;
    if(time<60){
        alert("number must bigger then 60") 
    }
    else if(time>=60){
    console.log(time);        
    return time;  
    } 
}
// function chooseButton() {
//     var x = up.value.which;
//     insertToUp.value=x;
    
//   }
// monsters
  function numberofMonsters(){
    var monsters=document.getElementById("monsters").value;
    if(monsters<1||monsters>4){
        alert("number must be between 1 to 4") 
    }
    else if(monsters>=1||monsters<=4){
    console.log(monsters);        
    return monsters;
    }
    
    
    return monsters;
}


// random
function randomDefinion(){
    numberofballs.value=Math.floor((Math.random()*41)+50);
    console.log(numberofballs.value);
    monsters.value=Math.floor((Math.random()*4)+1);
    console.log(monsters.value);
    favcolor1.value='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    console.log(favcolor1.value);
    favcolor2.value='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    console.log(favcolor2.value);
    favcolor3.value='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    console.log(favcolor3.value);
    TimeOfGame.value=Math.floor((Math.random()*200)+60);

}

