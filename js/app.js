'use strict';
let userName1= prompt('What is your name?')
console.log(userName1)
alert ('Welcome '  +  userName1 );


let qusetion = prompt('Are you interested in development field?');
switch (qusetion = qusetion.toLocaleLowerCase ()) {
    case 'y':
    case 'yes':
        alert('Yes very interested!')
        break;
        case 'no':
        case 'n':
        alert('Not really!')
break;
default:
    alert ('Okay no problem')
}

let answer = prompt('Are you a student?');
switch (answer= answer.toLocaleLowerCase ()) {
    case 'y':
    case 'yes':
        alert('Yes I am!')
        break;
        case 'no':
        case 'n':
        alert('No I am not')
        break;
default:
    alert ('I work currently')
}

let qusetion1 = prompt('Are you from middle east?');
switch (qusetion1= qusetion1.toLocaleLowerCase ()) {
    case 'y':
    case 'yes':
        alert('Yes I am from middle east!')
        break;
        case 'no':
        case 'n':
        alert('No I am from another place!')
        }

let qusetion3 = prompt('Are you single?');
switch (qusetion3= qusetion3.toLocaleLowerCase ()) {
    case 'y':
    case 'yes':
        alert('Yes I am single!')
        break;
        case 'no':
        case 'n':
        alert('No I am married!')
        break;
        default:
            alert ('it is complicated')
    }

let qusetion4 = prompt('Are you happy in your life?');
switch (qusetion4= qusetion4.toLocaleLowerCase ()) {
    case 'y':
    case 'yes':
        alert('Yes thanks god!')
        break;
        case 'no':
        case 'n':
            alert ('hope you get better soon')
}



let score=0
for (let i=4; i>0; i--){
    let ownerAge = prompt ('Can you guess my birthday month?')  ; 
    ownerAge= parseInt(ownerAge)
    if (ownerAge ==7 ){
        alert('wow your amazing thats right!')
        score++
        break;
    }else if (ownerAge<7){
        alert('Too low')
    }else{ 
        alert('Too high')
    }
}
alert ('My birthday month is 7')

    let favSinger = ['enrique','akon','chris brown','massari','inna'];
       for(let j=0 ;j<6 ;i++){
            let question7 =prompt('Who do you think is my favourite singer?')
            favSinger=favSinger.toLowerCase();
            if(favSinger === question7[0] || favSinger === question7[1] || favSinger === question7[2] || favSinger === question7[3] || favSinger === question7[4]){
                alert('Thats right you guessed my favourite singer');
                score++;
                break;   
            }else{
                alert('You did not guess my favourite singer')
              }
    }



let userName = prompt ('What is your name?')
 console.log (userName)
 alert ('Welcome '  +  userName + ' to my website, hope your enjoying it ');



//lab02 
 // every thing is fine but i still feel my performance is slow and i keep forgetting how to write the commands 
 // it took me about 3.5 hours i thought it would take only 2 hours.

 //lab03
 // i faced a problem in the last question and it didnt work with me
 //it took me more than 5 hours and i couldnt solve the question