const name = "Alex-Ojukwu";
const skills = [
  "Variables & Operators",
  "Functions & Scope",
  "Objects & Destructuring",
  "Control Flow & Loops",
  "Event Handling & DOM Manipulation"
];

const welcome = document.createElement("p");
welcome.textContent = `Hi, I'm ${name}. Here are some things I’ve learned in JavaScript:`;
document.getElementById("about").appendChild(welcome);


const ul = document.createElement("ul");
skills.forEach(function(skill) {
  const li = document.createElement("li");
  li.textContent = skill;
  ul.appendChild(li);
});
document.getElementById("about").appendChild(ul);


function submit(event) {
   

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const course = document.getElementById("cousre").value;
  const rating = document.getElementById("rating").value;

  alert(`Submitted!\nName: ${name}\nEmail: ${email}\nCourse: ${course}\nRating: ${rating}`);
}


document.getElementById("submitBtn").addEventListener("click", submit);
