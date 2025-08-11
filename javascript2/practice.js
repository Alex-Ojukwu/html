/*let a, b;
a = true;
b= false;
let c=5;
    let d= 10;

if(c>10) {    

    function addition() {
        return c + d;

    }
    console.log(addition());
} 
else if (d < 20) {
    function sub() {
      return  d - c
    }
    console.log(sub());
    
} else {
   
    console.log(` you get ${d} billion dollars`);

    
} 




for (let i = 0; i < 5; i++) {
  
  console.log("The number is " + i);
}*/

function message () {
    const name = "james"
    const age = 40
};
 export default message;

let beast = "best";
let dog = 5;
 export {beast,dog};




const sports = {
    name: "football",
    players: 22,
    goat: "messi and ronaldo"
}
 for(let x in sports) {
    console.log (sports[x]);
    
 }
 
 console.log(Object.values(sports));

 let Text = "javascript" // for..of is used for strings and Array basically iteratable objects

 for (let x of Text) {
    console.log(x);
 }