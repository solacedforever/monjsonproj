
let characters = document.querySelector(".githublist");


function displayCharacters () {
  let data = JSON.parse(this.responseText);
  let template = `
    <h2>${data.name}</h2>
    <div class="basic">The Basics</div>
    <div class="thestory">The Story</div>

    <ul><li><font color="#7DADAD">Name:</font> ${data.name}</li>
    <li><font color="#7DADAD">Github URL:</font> <a href="">${data.url}</a></li>
    <li><font color="#7DADAD">Company:</font> ${data.company}</li>
    <li><font color="#7DADAD">Website:</font> <a href="">${data.blog}</a></li></ul>
    <div class="bio">${data.bio}</div>`;

  characters.innerHTML = template;
  }

let req = new XMLHttpRequest();
req.open("GET", "https://api.github.com/users/solacedforever");
req.addEventListener("load", displayCharacters);
req.send();
