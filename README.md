# Typing Speed Test

This project is an **interactive web tool** that lets users practice typing by typing a presented sentence within a time limit.  
It's built with **HTML, Tailwind CSS, and JavaScript**, and provides a **clean, responsive interface** that shows accuracy, time taken, and a final score.

---

## Live Demo

[Live Demo]([#](https://shorookkhaled559.github.io/Typing-Speed-Test/))

---

## Features

- **Random Sentence Selection** — Picks a random sentence from a local list each round.
- **Start / Finish Flow** — Sentence appears and timer starts only after the user clicks **Start**.
- **Accuracy Calculation** — Compares typed text to the original sentence and computes accuracy (%) using character-based matching.
- **Time Tracking** — Measures time taken and factors it into the final score.
- **Responsive UI** — Fully responsive layout made with Tailwind CSS.

---

## Technologies Used

- **HTML5** — Structure of the page.
- **Tailwind CSS** — Utility-first styling and layout.
- **JavaScript (ES6)** — App logic (separated in `script.js`).

---

## How It Works

1. User clicks **Start**.
2. The app selects a random sentence and displays it.
3. The timer (default: 10 seconds) begins and the input field is enabled.
4. When time ends or user clicks **Finish**, the app compares the typed text with the original.
5. The results are shown:
   - **Accuracy (%)**
   - **Time Taken (seconds)**
   - **Final Score (%)** — mix of accuracy and time performance.

---

## Example (JavaScript)

```js
const quotes = [
  "JavaScript is very powerful",
  "Front end development is fun",
  "Typing speed test project"
];

let randomQuote = "";
let timeLeft = 10;
let timer;

function getRandomQuote() {
  randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = randomQuote;
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
  // display results...
}
```

---

## Project Structure

```
Typing-Speed-Test/
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── index.html
└── README.md
```

---

## How to Run Locally

1. **Clone the repository:**
```bash
git clone https://github.com/shorookkhaled559/Typing-Speed-Test.git
```

2. **Navigate to the project folder:**
```bash
cd Typing-Speed-Test
```

3. **Open the project:**
   - Double-click `index.html`, or  
   - Right-click → *Open with browser*

---

## Future Enhancements

- Fetch dynamic sentences from a stable API.
- Make timer configurable.
- Add difficulty levels (easy / medium / hard).
- Add WPM (Words Per Minute) calculation.
- Add light/dark mode.
- Save results in `localStorage` to track progress.
- Add animations and sound effects.

---

##  License

This project is **open-source** and free for learning and personal use.  
Developed by **Shorouk Khaled**.
