 let turn='O';
 let total_turn=0;


 let winner=[
    [0,1,2],[3,4,5],[6,7,8], //same row me winner wala case
    [0,3,6],[1,4,7],[2,5,8], //same column me winner wala case
    [0,4,8],[2,4,6]          //same diagonal me winner wala case
 ]

 const board_array= new Array(9).fill("E"); //Initially har koi empty hai (It is an array for checking who is the winner )

 function checkWinner(){
    for(let [index0,index1,index2] of winner){
        if(board_array[index0]!="E" && board_array[index0]===board_array[index1]&& board_array[index1]===board_array[index2]){
            return 1;
        }
    }
    return 0;

 }



// print ho 0 ya X grid  ke square me

const printer=(event)=>{

    const element=event.target;
 
  if(board_array[element.id]==="E"){
    total_turn++;
 
    if(turn=='O'){
    element.innerHTML="O";
    board_array[element.id]="O";
    if(checkWinner()){
     document.getElementById('winnerMessage').innerHTML="Winner is O";
     board.removeEventListener('click',printer);
    }
    turn='X';
 }
 
 else{
     element.innerHTML="X";
     board_array[element.id]="X";
     if(checkWinner()){
         document.getElementById('winnerMessage').innerHTML="Winner is X";
         board.removeEventListener('click',printer);
        }
    turn='O';   
   }

   if(total_turn==9){
    document.getElementById('winnerMessage').innerHTML="Match drawn";

   }
  }
 
 
 
 }





//parent ki access lelo
const board=document.querySelector('.game-container');
board.addEventListener('click',printer);

const Restart=document.getElementById('restatButton');
Restart.addEventListener('click',()=>{
     const cell=document.getElementsByClassName('cell');
     Array.from(cell).forEach((value)=>{
        value.innerHTML="";
     })

})




// Homework Project: Rock Paper and Scissor Banao