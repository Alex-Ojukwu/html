let a = Date();
console.log(a);





function alexo() {
    document.getElementById("hide").style.display = "none";
}

let y = "sam",z;
var x= 10;
{
    var x =5;
}
{
   let y = "john";
}
z = "kpajie";

/*Variables, data types, and operators
Functions, scope, and closures
Arrays, objects, and destructuring
Control flow and loops
Event handling and DOM manipulation*/

const Person = {
    firstname: "Alex",
    lastname: "Ojukwu",
    Age: 34,
    fullname: function() {
        return this.firstname +" "+ this.lastname;
    }

};

let staff = {
    staffid: 212334,
    department: "engineering",
    logintime : "8:00",
    staffage: 32

}

//this is a constructor even though it looks similar to a function 
function Employee(name, age, salary) { 
    this.fullname = name;
    this.Age = age;
    this.salary = salary;
    this.location = "England"
}
 let myArray = Object.values(staff);

 let cleaners = new Employee("Jane", 24, 40000);
 console.log(cleaners.fullname);
 

let supervisor = new Employee("Sammy", 45, 50000);

console.log(myArray[1])
console.log(Object.values(staff))
console.log(supervisor.location)
 console.log("My name is "+ supervisor.fullname + " and I make over " + supervisor.salary+ " a Year")
console.log("My name is: "+Person.fullname());
console.log("my Age is: "+Person.Age)



console.log( x);
console.log(y);