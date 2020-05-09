
function showMenu(){
	$('#welcome').css('display', 'block');
	$('#register').css('display', 'none');
	$('#definition').css('display', 'none');
	$('#game').css('display', 'none');
	$('#score').css('display', 'none');
    $('#login').css('display', 'none');
    $('#game').css('display', 'none');

}
function gotoLogin (){
	$('#welcome').css('display', 'none');
	$('#register').css('display', 'none');
	$('#definition').css('display', 'none');
	$('#game').css('display', 'none');
	$('#score').css('display', 'none');
    $('#login').css('display', 'block');
    $('#game').css('display', 'none');

}
function gotoRegister(){
	$('#welcome').css('display', 'none');
	$('#register').css('display', 'block');
	$('#definition').css('display', 'none');
	$('#game').css('display', 'none');
	$('#score').css('display', 'none');
    $('#login').css('display', 'none');
    $('#game').css('display', 'none');

} 

    //________________________________login_______________________________________
    function areCorrectUsersInfoSaved() {
        let users = localStorage.getItem('usersList');
        let passwords = localStorage.getItem('passwordList');
        let birthdays = localStorage.getItem('birthDateList');
        let emails = localStorage.getItem('emailList');
    
        if (users && passwords  && birthdays && emails) {
            let users2 = getStorage('usersList');
            let passwords2 = getStorage('passwordList');
            alert(users2[0]);
            if (users2[0] == 'p' && passwords2[0] == 'p')
                return true;
        }
        return false;
    }
    function findInArray()
    {
        let isFound=false;
        let tmp=$("#Uname").value;
        for(i=0;i<usersList.length;i++){
            if(tmp==usersList[i])
                isFound=true;
        }
        if(isFound==false){
            usersList.push(tmp);
        }
     } 
    
     function findUserIndex(name){
        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i] == name)
                return i;
        }
        return 'false'
     }
    
     function correctDetails()
    {   
    
    
        let name=$("#Uname").value;
        let UserPassword=$("#Upassword").value;
        if(!findUser(name)){
            $('#Uname').after('<span class="error">User is not exist.</span>');
        }
        else{
            let userIndex = findUserIndex(name);
            if(UserPassword!=passwordList[userIndex]){
                $('#Upassword').after('<span class="error">Wrong password</span>');
            }
            else{
                $(".sc").hide();
                $("#definition").show();
            }
        }
    }
if(typeof(Storage)!=="undefined"){
    sessionStorage.setItem("p","p");
    }
else{
    alert("Sorry,your browser does not in the web storage ")
}
// function findInArray()
// {
//     let isFound=false;
//     let tmp=$("#Uname").value;
//     for(i=0;i<AllUsers.length;i++){
//         if(tmp==AllUsers[i])
//             isFound=true;
//     }
//     if(isFound==false){
//         AllUsers.push(tmp);
//     }
//         } 

//  function correctDetails()
// {
//     let name=$("#Uname").value;
//     let UserPassword=$("#Upassword").value;
//     if(sessionStorage.getItem(name).localeCompare(UserPassword)!=0){
//         document.getElementById("note").showModal();
//     }
//    else{
//                 $(".sc").hide();
//                 $("#definition").show();
//    }
//     }    function func2(){
//     document.getElementById("note").close();

//     }




//_____________________definition__________________________________________

//buttons



function moveup(event) {
    var buttonup= event.keyCode;
    console.log(buttonup); 
    insertToUp.value=buttonup;
    return buttonup;   
}



function movedown(event) {
    var buttondown= event.keyCode;
    console.log(buttondown); 
    insertTodown.value=buttondown;
    return buttondown;    
}


function moveright(event) {
    var buttonright= event.keyCode;
    //console.log(buttonright);
    insertToRight.value=buttonright;
    return buttonright;    
}

function moveleft(event) {
    var buttonleft= event.keyCode;
    //console.log(buttonleft); 
    insertToleft.value=buttonleft;
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
    insertballs.value=ballsnumber;
    return ballsnumber;
    }
}
  
    
 

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


// time of game
function timedefintion(){
    var time=document.getElementById("TimeOfGame").value;
    if(time<60){
        alert("time must bigger then 60 seconds") 
    }
    else if(time>=60){      
        return time;  
    } 
}

// monsters
  function numberofMonsters(){
    var monsters=document.getElementById("monsters").value;
    if(monsters<1||monsters>4){
        alert("number must be between 1 to 4") 
    }
    else if(monsters>=1||monsters<=4){
        numberofMonsters1.value=monsters      
        return monsters;
    }  
}


//definitions on sideGame

function displayDefinition(){
    //var correctDetails=false; 
    if(numberofballs.value!=""&&favcolor1.value!=""&& favcolor2.value!=""&& favcolor3.value!=""&& TimeOfGame.value!=""&& monsters.value!="" ){
    var allballs=numberofballs.value;
    var favotiteColor1=favcolor1.value;
    var favotiteColor2=favcolor2.value;
    var favotiteColor3=favcolor3.value;
    var timelimit= TimeOfGame.value;
    var allmonsters=monsters.value;
    var userName=Uname.value;
    $("#colorchoosen1").html('');
    $("#colorchoosen2").html('');
    $("#colorchoosen3").html('');
    $("#timeChoosen").html('');
    $("#monsterChoosen").html('');
    $("#nameOfUser").html('');
    $("#numberOfBallsChoosen").html(''); 
     $("#nameOfUser").append(" name: "+userName);
    $("#numberOfBallsChoosen").append("Number of balls:"+allballs );
    $("#colorchoosen1").append("Color of 5 points balls :"+favotiteColor1 );
    $("#colorchoosen2").append("Color of 15 points balls :"+favotiteColor2 );
    $("#colorchoosen3").append("Color of 25 points balls :"+favotiteColor3 );
    $("#timeChoosen").append("Time limit is(in seconds) :"+ timelimit);
    $("#monsterChoosen").append("Number of monsers is :"+ allmonsters);

    //correctDetails=true;
    //$("#Begin").click(function (){
        console.log("La pratizanos");
        $(".sc").hide();
        $("#score").show();	
        $("#game").show();
        $("#showDefintion").show();
        $(".papi").show();
    
        counter++;
        Start();
    }
    else{
        alert("please insert correct Details");
        document.getElementById("definition").show;
        document.getElementsByClassName('sc').hide;
        document.getElementsByClassName('row').hide;   
    }
}



// random
function randomDefinion(){
    numberofballs.value=Math.floor((Math.random()*41)+50);
    insertballs.value=numberofballs.value;
    monsters.value=Math.floor((Math.random()*4)+1);
    numberofMonsters1.value=monsters.value;  
    favcolor1.value='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6); 
    favcolor2.value='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    favcolor3.value='#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
    TimeOfGame.value=Math.floor((Math.random()*200)+60);
    insertToUp.value="38";
    insertTodown.value="40";
    insertToleft.value="37";
    insertToRight.value="39";
}

//________________________________makeStorage___________________________________________


function createUsersList(){
	if(localStorage.getItem('usersList')){
        this.usersList = getStorage("usersList");
        this.passwords = getStorage("passwordList");
		this.emails = getStorage("emailList");
        this.birthdays = getStorage("birthDateList");
		
	}
	else{
		this.Firstnames=['p'];
		this.Lastnames=['p'];
		this.usersList=['p'];
		this.passwordList=['p'];
		this.emailList =['dani.kol@gmail.com'];
		this.birthDateList=['']
		updateStorage();
	}
}
function updateStorage(){
	localStorage.clear();
    localStorage.setItem("usersList", JSON.stringify(this.usersList));
    localStorage.setItem("passwordList", JSON.stringify(this.passwordList));
    localStorage.setItem("emailList", JSON.stringify(this.emailList));
    localStorage.setItem("birthDateList", JSON.stringify(this.birthDateList));
}
function findUser(name) {
    for (var i = 0; i < this.usersList.length; i++) {
        if (name == this.usersList[i])
            return true;
    }
    return false;
}
function getStorage(obj) {
    if (localStorage.getItem(obj)) {
        let retrievedData = localStorage.getItem(obj);
        let arr = JSON.parse(retrievedData);
        return arr;
    }
    return false;
}
//_____________________music_________________________________



function playMusic() {
	document.getElementById('music').play();
	document.getElementById('music').volume = 0.2;
}

function stopMusic(){
    document.getElementById('music').currentTime = 0;
    document.getElementById('music').pause();
}