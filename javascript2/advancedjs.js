/*import message from "./practice.js"
import { beast,dog } from "./practice.js"

console.log(`${beast} is the local champion of ${dog} agberos`)*/

/*setTimeout
setTimeout(function() {
    console.log(`waited 3 seconds`)
},3000);

let a,b;
a=5
b=6

function Sumation() {
    return a + b;
}
console.log(Sumation());*/


function greetme(name, callmeback) {
    setTimeout( function charles() { console.log("ths was printed after 3 seconds" + name);
        callmeback();
    }  , 3000)
  
  
}

function sayBye() {
  console.log("Bye!");
}

greetme("Alex", sayBye);

