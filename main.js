const lettersBox = document.querySelector(".box-holder .letters");
const letters = "abcdefghijklmnopqrstuvwxyz";
let lettersArray = letters.split("");
for (let i = 0; i < lettersArray.length; i++) {
    let span = document.createElement("span");
    span.className = "letterSpan";
    span.textContent = lettersArray[i];
    lettersBox.appendChild(span);
}

const words = {
    programming: ["javascript", "html", "kotlin", "pyscript"],
    countries: ["morocco", "egypt", "usa", "canada", "france"],
    cities: ["marrakech", "paris", "newyork", "roma", "berlin", "tokyo"],
    movies: ["parasite", "alizaoua", "titanic", "spiderman"]
}

let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);

let randomPropName = allKeys[randomPropNumber];

let randomPropValue = words[randomPropName];

let randomNameNumber = Math.floor(Math.random() * randomPropValue.length);

let randomNameValue = randomPropValue[randomNameNumber];

document.querySelector(".container .info span").innerHTML = randomPropName;


let guessLetters = document.querySelector(".guessLetters");
let wordLetters = Array.from(randomNameValue);

wordLetters.forEach(letter => {
    // create sapn
    let emptySpan = document.createElement("span");
    // append empty spans
    guessLetters.appendChild(emptySpan);
})

let guessSpan = document.querySelectorAll(".guessLetters span");
let theDraw = document.querySelector(".the-draw");
let containerLetters = document.querySelectorAll(".letters span");
let count = 0;

document.addEventListener("click", (e) => {
    let status = false;
    if (e.target.className === "letterSpan") {
        e.target.classList.add("clicked");

        let clickedLetter = e.target.innerHTML.toLowerCase();

        wordLetters.forEach((ele, index) => {
            if (clickedLetter === ele) {
                status = true;

                guessSpan.forEach((span, indexSpan) => {

                    if (index === indexSpan) {
                        span.innerHTML = clickedLetter;
                    }

                });
            }
        });
        if (status !== true) {

            theDraw.classList.add(`wrong-${++count}`);

            document.getElementById("failure").play();

            if (count === 9) {

                endGame();
                containerLetters.forEach(ele => {
                    ele.classList.add("finished");
                });
            }

        } else {
            document.getElementById("success").play();
        }
    }
});

function endGame() {

    // create popup div
    let div = document.createElement("div");

    // create a span
    let popSpan = document.createElement("span");

    // create a button
    let button = document.createElement("button");

    // Give It A Class
    div.className = "popup";

    // Text Node for div
    let textNode = document.createTextNode(`The Word Is: `);

    // text node for span
    let textSpan = document.createTextNode(`${randomNameValue}`);

    // text node for span
    let textButton = document.createTextNode("TRY AGAIN");

    // Append The Text In The Popup
    div.appendChild(textNode);

    // Append The Text In The span
    popSpan.appendChild(textSpan);

    // Append The Text In The button
    button.appendChild(textButton);

    // Append The Span In The Popup
    div.appendChild(popSpan);

    // Append The Text In The Popup
    div.appendChild(button);

    // Append The Div To Body
    document.body.appendChild(div);

    button.onclick = () => {
        location.reload();
    }
}