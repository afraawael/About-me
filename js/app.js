'use strict';

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



let userName = prompt ('What is your name?')
 console.log (userName)
 alert ('Welcome '  +  userName + ' to my website, hope your enjoying it ');