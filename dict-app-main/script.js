const url = "https://api.dictionaryapi.dev/api/v2/entries/en/"

const result = document.getElementById("result");
const sound = document.getElementById("sound")
const btn = document.getElementById("search-btn")
const N = "NULL"

btn.addEventListener("click", (err) => {
    let inpword = document.getElementById("inp-word").value
    fetch(`${url}${inpword}`)
    .then((response) => response.json())
    .then((data) =>{
        console.log(data);
        result.innerHTML = `
        <div class="word">
            <h3>${inpword}</h3>
            <button onclick="playSound()">
                <i class="fas fa-volume-up"></i>
            </button>
        </div>
        <div class="details">
            <p>${data[0].meanings[0].partOfSpeech ? data[0].meanings[0].partOfSpeech : N}</p>
            <p>/${data[0].phonetic}/</p>
        </div>
        <p class="word-meaning">
            ${data[0].meanings[0].definitions[0].definition}
        </p>
        <p class="word-example">
            ${data[0].meanings[0].definitions[0].example || ""}
        </p>`
        sound.setAttribute("src", `${data[0].phonetics[1].audio}`)
        console.log(sound)
    })
    
})

function playSound() {
    sound.play();
}

let heading = document.getElementById("greeting")


let today = new Date();
let hourNow = today.getHours();
let Greeting;

if (hourNow > 18) {
    Greeting = "Good Evening!";
}

else if (hourNow > 12) {
    Greeting = "Good Afternoon!";
}

else if( hourNow > 0) {
    Greeting = "Good Morning!";
}

else{
    Greeting = "Welcome!";
}

heading.textContent = Greeting;