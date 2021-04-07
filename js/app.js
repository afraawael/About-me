'use strict';
let userName1= prompt('What is your name?');
console.log(userName1);
alert ('Welcome ' + userName1 );
let score=0;

function qOne(){
  let qusetion = prompt('Are you interested in development field?');
  switch (qusetion = qusetion.toLocaleLowerCase ()) {
  case 'y':
  case 'yes':
    alert('Yes very interested!');
    break;
  case 'no':
  case 'n':
    alert('Not really!');
    break;
  default:
    alert ('Okay no problem');
  }
}
qOne();

function qTwo(){
  let answer = prompt('Are you a student?');
  switch (answer= answer.toLocaleLowerCase ()) {
  case 'y':
  case 'yes':
    alert('Yes I am!');
    break;
  case 'no':
  case 'n':
    alert('No I am not');
    break;
  default:
    alert ('I work currently');
  }

}
qTwo();

function qThree(){
  let qusetion1 = prompt('Are you from middle east?');
  switch (qusetion1= qusetion1.toLocaleLowerCase ()) {
  case 'y':
  case 'yes':
    alert('Yes I am from middle east!');
    break;
  case 'no':
  case 'n':
    alert('No I am from another place!');
  }

}
qThree();

function qFour(){
  let qusetion3 = prompt('Are you single?');
  switch (qusetion3= qusetion3.toLocaleLowerCase ()) {
  case 'y':
  case 'yes':
    alert('Yes I am single!');
    break;
  case 'no':
  case 'n':
    alert('No I am married!');
    break;
  default:
    alert ('it is complicated');
  }
}
qFour();

function qFive(){
  let qusetion4 = prompt('Are you happy in your life?');
  switch (qusetion4= qusetion4.toLocaleLowerCase ()) {
  case 'y':
  case 'yes':
    alert('Yes thanks god!');
    break;
  case 'no':
  case 'n':
    alert ('hope you get better soon');
  }
}

qFive();

function qSix(){
  for (let i=4; i>0; i--){
    let ownerAge = prompt ('Can you guess my birthday month?') ;
    ownerAge= parseInt(ownerAge);
    if (ownerAge === 7 ){
      alert('wow your amazing thats right!');
      score++;
      break;
    }else if (ownerAge<7){
      alert('Too low');
    }else{
      alert('Too high');
    }
  }
  alert ('My birthday month is 7');
}

qSix();



let favSinger = ['enrique','akon','chris brown','massari','inna'];
let question7 = null;
let attemps = 6;
attemps=parseInt(attemps);
nameofloop: while(attemps>0){
  attemps--;
  question7 = prompt ('Who is my favourite singer?');
  for (let i = 0; i<favSinger.length; i++){
    if (question7 === favSinger[i]){
      alert ('Correct Answer');
      score++;
      break nameofloop;
    }


  }
  if ( attemps === 0){
    alert (favSinger);
  }
}





alert (score);
let userName = prompt ('What is your name?');
console.log (userName);
alert ('Welcome ' + userName + ' to my website, hope your enjoying it ');



//lab02
// every thing is fine but i still feel my performance is slow and i keep forgetting how to write the code
//i don't have questions
// it took me about 3.5 hours i thought it would take only 2 hours.



//lab03
// i faced a problem in the last question and it didnt work with me
//it took me more than 5 hours and i couldnt solve the question
