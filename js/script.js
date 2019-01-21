/*global $*/


//var go here

//pls keep male and female name balance, I'm too lazy to add extra code... so yeah just keep them balanced
var maleName = ["Bob","Tom","James","Jay","Wilson","George","William","Scott","Victor","Jeff","Jackie","Alex"];
var femaleName = ["Diasy","Emily","Mary","Sarah","Kate","Sophia","Amy","Jamie","Caitlyn","Karen","Kaitlyn","Jessica"];
var lastName = ["Hanson","Huang","Jefferson","Miller","Johnson","Davis","Smith","Sue"];

var genders = ["male","female"];

var job = ["gunner","medic","mage","swordMan","soldier"];
var job2=["herbist","explorer","professor","merchant","machinist"];

var personsID = [];
var created = []

// var person = {
//     name:{
//         firstName:"",
//         lastName:""
//         },
        
//     age: "",
//     gender: "",
    
//     profession:{
//         profession1:"", 
//         profession2:""
//     },
// };

//functions---------------------------------------------------------------------

function random(max){
    return Math.floor(Math.random()*max);
}

//creat person, basically blue print, like saying what 'a person' have.
function person(fn,ln,yr,gdr,pro1,pro2){
    this.name = {firstName: fn, lastName: ln};
    this.age = yr;
    this.gender = gdr;
    this.profession = {profession1: pro1, profession2: pro2};
}



//assigning X Y chromosomes... assuming nondisjunction doesn't occur during meiosis
function chromosomes(){ 
    var X = random(2);
    if(X === 1){
        generateCharacter(/*assignPid("M"),*/maleName,"male");
    }else{
        generateCharacter(/*assignPid("F"),*/femaleName,"female")
    }
}

function generateCharacter(/*Pid,*/firstNameArray,XY){
var /*Pid*/ generatedPerson = new person(
    firstNameArray[random(12)], //first name, the array used varies depending on the variable 'gender'(see: chromosome())
    lastName[random(8)],        //last name
    random(11)+16,              //age, should add a way to change max and min in future
    XY,                         //'gender'(see: chromosome())
    job[random(5)],             //pro1
    job2[random(5)]             //pro2
);
   //console.log(Pid+" "+Pid.Name.firstName+" "+Pid.name.lastName); 
  //console.log(Pid.gender+" "+Pid.age+" "+Pid.profession.profession1+" "+Pid.profession.profession2);
  
  created.push(generatedPerson);
}

//Pid <---useless acutally
function assignPid(x){
    var string = x+"-";
    var array = Math.random().toString().split("");
    array.splice(array.indexOf('.'),1);
    console.log(array);
    
    array.forEach(function(i){
        string+=i;
        // console.log(i);
        // console.log(string);
    });
    
    if(personsID.indexOf(string)===-1){
        personsID.push(string);
        console.log(personsID);
    }else{
        assignPid(x);
    }
}



//executive branch
$("#generate").click(function(){
    chromosomes();
    console.log(created)
});

$("#numberB").click(function(){
    console.log(random(5));
    console.log("maleName"+":"+maleName.length);
    console.log("femaleName"+":"+femaleName.length);
    console.log("lastName"+":"+lastName.length);
    console.log("genders"+":"+genders.length);
    console.log("job"+":"+job.length);
    console.log("job2"+":"+job2.length);
});