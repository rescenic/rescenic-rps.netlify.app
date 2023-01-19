var playerChoice = "";
var computerChoice = "";
/*
 * Note that the scissors emoji has to have an extra space!
 */
var emojis = ["✂️ ", "📄", "🗿"];
var currentEmojiNumber = 0;

var shuffleIntervalID = setInterval(shuffleEmojis, 150);

var playerChoiceContainer = document.querySelector("#player-choice-container");
var emojiShuffleElement = document.querySelector("#emoji-shuffle");

playerChoiceContainer.addEventListener("click", handlePlayerChoice);

function mulai() {
    window.location.reload()
}

function determineGameWinner() {
    var gameResultMessageElement = document.querySelector("#game-result-message");
    var gameResultMessage = "";

    if (playerChoice === computerChoice) {
        gameResultMessage = "Seri, Ulang lagi!";
    } else if (playerChoice === "🗿" && computerChoice === "✂️ ") {
        gameResultMessage = "Kamu menang!";
    } else if (playerChoice === "📄" && computerChoice === "🗿") {
        gameResultMessage = "Kamu menang!";
    } else if (playerChoice === "✂️ " && computerChoice === "📄") {
        gameResultMessage = "Kamu menang!";
    } else {
        gameResultMessage = "Rescenic menang!";
    }

    gameResultMessageElement.textContent = gameResultMessage;
    document.getElementById("mulaiLagi").innerHTML = '<button onclick="mulai()">Main Lagi</button>'
}

function handlePlayerChoice(event) {
    if (!event.target.classList.contains("emoji")) return;
    playerChoice = event.target.textContent;
    playerChoiceContainer.innerHTML = `<p class="emoji">${playerChoice}</p>`;
    clearInterval(shuffleIntervalID);
    determineGameWinner();
}

function shuffleEmojis() {
    computerChoice = emojis[currentEmojiNumber];
    emojiShuffleElement.textContent = computerChoice;

    if (currentEmojiNumber < emojis.length - 1) {
        currentEmojiNumber++;
    } else {
        currentEmojiNumber = 0;
    }
}