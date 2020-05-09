let div = document.getElementById("joke");
let image = document.getElementById("icon");
let button = document.getElementById("button")

let url = 'https://api.chucknorris.io/jokes/random';
let chuckArray = [];

function chuckAPI(){
    fetch(url).then( (response) => {
        return response.json();
    }).then( (data) => {
        let icon = data.icon_url;
        let joke = data.value;
        div.innerText = joke;
        image.src = icon;
        chuckArray.push(joke);
    }).catch((error) => {
        console.log("Error: " + error);
        let randArrayNum = Math.floor(Math.random() * chuckArray.length);
        div.innerText = chuckArray[randArrayNum];
    });
}

window.addEventListener("load", chuckAPI);
button.addEventListener("click", chuckAPI);