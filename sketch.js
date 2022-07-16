//variables - memory saving things
var number;
var letter;
var word; 
var object; 
var image; 
var i=0;



function preload(){
  //loading images 
  image=loadImage("assets/balloon1.png")

}

function setup(){
  //create canvas
  createCanvas(600,600)

  //once time reading, creating my objects
  balloon= createSprite(300,300,20,20);
  //ARRAYS 
  //box that saves lots of variables at the same time in a specific order
  //NOTE : ARRAYS USE []
  box= [1,2,3,4,5];
  //console.log(box);
  //COMPUTERS WILL COUNT POSITION STARTING FROM 0 
  //I CAN REFER TO SPECIFIC POSITIONS BY USING []
  //console.log(box[2]);

  //PUSH - ADDING TO THE ARRAY (it will always add it to the END of the array)
  box.push(6)

  //POP - REMOVING FROM THE ARRAY
  box.pop();
  //console.log(box);


  //JSON VARIABLES 
  //LISTS  
  //NOTE: NO ";" OR "=", INSTEAD USE "," OR ":"
  var list_student ={
    name:"Ivan",
    grade:"7",
    favcolor:"green",
    height:"1.78"
  }
  //I CAN REFER TO A PART OF THE LIST WITH "."
  console.log(list_student.name)
  //I CAN CHANGE THE VALUES TO THE LIST WITH "."
  list_student.name="Daniel"; 
  
}

function draw(){

  //call my function by writing the name of it 
  functionname();

  //main function - loop
  drawSprites();


  
  //conditionals - if something happens, a result happens too

  if(keyDown("space")){
    balloon.shapeColor="blue";
  }

  //multiple conditions
  //AND && - ALL OF THE CONDITIONS NEED TO BE TRUE
  if(keyDown("space") && keyDown("up_arrow")){
    balloon.shapeColor="pink"; 
  }

  //OR || - AT LEAST ONE OF THE CONDITIONS NEED TO BE TRUE
  if(keyDown("left_arrow") || keyDown("right_arrow")){
    balloon.shapeColor="purple";
  }

  ///////////////////////////////////////
  //FOR LOOPS 
  //things that you can repeat but controlling them 
  //i need a COUNTER (i) to see when shall it repeat or not
  //1. tell the computer where is the counter starting
  //2. tell the computer for how long shall it work
  //3. tell the computer how much is it "JUMPING"
  for(i;i<3;i=i+1){
    //console.log(i);
  }


}


//FUNCTIONS 
//Piece of code i can ask to my computor to run whenever i want to 
//1. create the function
//2. call the function 
//NOTE: I NEVER MAKE A FUNCTION INSIDE OF A FUNCTION. 

//create functions 
function functionname(){
  background("black");
}