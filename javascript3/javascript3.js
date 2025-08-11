async function getJoke()  {
  try {
    const response = await fetch("https://official-joke-api.appspot.com/random_joke");
    const data = await response.json();
    document.getElementById("joke").textContent = `${data.setup} 😂 ${data.punchline}`;
  } catch (error) {
    document.getElementById("joke").textContent = "Oops! Could not fetch a joke.";
  }
};


document.getElementById("jokeBtn").addEventListener("click", function()  {
  getJoke();
});
// if I want to see all the jokes https://official-joke-api.appspot.com/jokes/programming/ten
