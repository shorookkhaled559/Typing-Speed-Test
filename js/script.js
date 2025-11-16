const quotes = [
    "JavaScript is very powerful",
    "Front end development is fun",
    "Typing speed test project",
    "Practice makes perfect",
    "Hello from Shorouk",
    "Learning never stops",
    "Consistency is key"
];

let randomQuote = "";
let timeLeft = 10;
let timer;
let startTime;

function getRandomQuote() {
    randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("quote").textContent = randomQuote;
}

function startTest() {
    getRandomQuote();
    timeLeft = 10;
    document.getElementById("timer").textContent = timeLeft;
    document.getElementById("input").disabled = false;
    document.getElementById("input").value = "";
    document.getElementById("input").focus();
    document.getElementById("result").classList.add("hidden");

    startTime = Date.now();
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) finishTest();
    }, 1000);
}

function compareStrings(original, typed) {
    let matchCount = 0;
    for (let i = 0; i < Math.min(original.length, typed.length); i++) {
        if (original[i] === typed[i]) matchCount++;
    }
    return Math.round((matchCount / original.length) * 100);
}

function finishTest() {
    clearInterval(timer);

    const typedText = document.getElementById("input").value;
    const accuracy = compareStrings(randomQuote, typedText);
    const timeTaken = 10 - timeLeft;
    const timeScore = Math.max(0, 100 - (timeTaken * 10));
    const finalScore = Math.round((accuracy * 0.7) + (timeScore * 0.3));

    const resultDiv = document.getElementById("result");
    resultDiv.classList.remove("hidden");
    resultDiv.innerHTML =
        `Accuracy: <span class="text-yellow-300">${accuracy}%</span><br>
         Time Taken: <span class="text-yellow-300">${timeTaken} sec</span><br>
         Final Score: <span class="text-green-400">${finalScore}%</span>`;

    document.getElementById("input").disabled = true;
}

document.getElementById("startBtn").addEventListener("click", startTest);
document.getElementById("finishBtn").addEventListener("click", finishTest);
