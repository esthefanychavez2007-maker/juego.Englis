// ===============================
// CONFIGURACIÓN DEL JUEGO (NO CAMBIÉ TUS NIVELES)
// ===============================
const levels = [
  {
    name: "Present Simple",
    questions: [
      { q: "She ___ to school every day.", options: ["go", "goes", "going"], answer: 1 },
      { q: "They ___ football on Sundays.", options: ["play", "plays", "played"], answer: 0 },
      { q: "I ___ coffee in the morning.", options: ["drink", "drinks", "drinking"], answer: 0 },
      { q: "The dog ___ loudly.", options: ["bark", "barks", "barking"], answer: 1 },
      { q: "We ___ in New York.", options: ["live", "lives", "living"], answer: 0 },
      { q: "He ___ English very well.", options: ["speak", "speaks", "speaking"], answer: 1 },
      { q: "You ___ my best friend.", options: ["are", "is", "am"], answer: 0 },
      { q: "The train ___ at 6pm.", options: ["leave", "leaves", "leaving"], answer: 1 },
      { q: "She ___ like pizza.", options: ["don’t", "doesn’t", "isn’t"], answer: 1 },
      { q: "Birds ___ in the sky.", options: ["fly", "flies", "flying"], answer: 0 }
    ]
  },
  {
    name: "Present Continuous",
    questions: [
      { q: "She ___ to music now.", options: ["listens", "is listening", "listened"], answer: 1 },
      { q: "They ___ football at the moment.", options: ["play", "are playing", "played"], answer: 1 },
      { q: "I ___ dinner right now.", options: ["cook", "cooking", "am cooking"], answer: 2 },
      { q: "The baby ___.", options: ["crying", "is crying", "cries"], answer: 1 },
      { q: "We ___ TV this evening.", options: ["watch", "are watching", "watched"], answer: 1 },
      { q: "He ___ in the park.", options: ["is running", "runs", "running"], answer: 0 },
      { q: "You ___ too fast!", options: ["drive", "drives", "are driving"], answer: 2 },
      { q: "The kids ___ outside.", options: ["are playing", "play", "played"], answer: 0 },
      { q: "I ___ my homework right now.", options: ["do", "did", "am doing"], answer: 2 },
      { q: "She ___ to the teacher.", options: ["listens", "is listening", "listened"], answer: 1 }
    ]
  },
  {
    name: "Past Simple",
    questions: [
      { q: "She ___ to school yesterday.", options: ["go", "went", "goes"], answer: 1 },
      { q: "They ___ football last Sunday.", options: ["play", "played", "plays"], answer: 1 },
      { q: "I ___ coffee this morning.", options: ["drink", "drank", "drinks"], answer: 1 },
      { q: "The dog ___ loudly last night.", options: ["bark", "barked", "barks"], answer: 1 },
      { q: "We ___ in New York in 2010.", options: ["live", "lived", "lives"], answer: 1 },
      { q: "He ___ English yesterday.", options: ["speak", "spoke", "speaks"], answer: 1 },
      { q: "You ___ my best friend in school.", options: ["were", "was", "are"], answer: 0 },
      { q: "The train ___ at 6pm yesterday.", options: ["leave", "leaves", "left"], answer: 2 },
      { q: "She ___ like pizza before.", options: ["didn’t", "doesn’t", "isn’t"], answer: 0 },
      { q: "Birds ___ in the sky.", options: ["flew", "flies", "fly"], answer: 0 }
    ]
  },
  {
    name: "Past Continuous",
    questions: [
      { q: "She ___ to music when I called.", options: ["was listening", "listened", "listens"], answer: 0 },
      { q: "They ___ football at 5pm.", options: ["were playing", "played", "play"], answer: 0 },
      { q: "I ___ dinner at that time.", options: ["was cooking", "cooked", "cook"], answer: 0 },
      { q: "The baby ___ all night.", options: ["was crying", "cried", "crying"], answer: 0 },
      { q: "We ___ TV when she arrived.", options: ["were watching", "watched", "watch"], answer: 0 },
      { q: "He ___ in the park yesterday.", options: ["was running", "ran", "runs"], answer: 0 },
      { q: "You ___ too fast when it rained.", options: ["were driving", "drove", "drive"], answer: 0 },
      { q: "The kids ___ outside at noon.", options: ["were playing", "played", "play"], answer: 0 },
      { q: "I ___ my homework when you called.", options: ["was doing", "did", "do"], answer: 0 },
      { q: "She ___ to the teacher in class.", options: ["was listening", "listened", "listens"], answer: 0 }
    ]
  },
  {
    name: "Wh-Questions",
    questions: [
      { q: "___ is your name?", options: ["What", "Where", "Who"], answer: 0 },
      { q: "___ are you from?", options: ["What", "Where", "Who"], answer: 1 },
      { q: "___ is she?", options: ["What", "Who", "When"], answer: 1 },
      { q: "___ are you?", options: ["Who", "How", "What"], answer: 1 },
      { q: "___ is this?", options: ["Who", "What", "When"], answer: 1 },
      { q: "___ is that boy?", options: ["Who", "What", "When"], answer: 0 },
      { q: "___ is your favorite color?", options: ["What", "Where", "When"], answer: 0 },
      { q: "___ is your birthday?", options: ["When", "Who", "What"], answer: 0 },
      { q: "___ is your father?", options: ["Who", "When", "What"], answer: 0 },
      { q: "___ is your best friend?", options: ["Who", "What", "Where"], answer: 0 }
    ]
  },
  {
    name: "Final Mix",
    questions: [
      { q: "She ___ to music now.", options: ["is listening", "listened", "listens"], answer: 0 },
      { q: "They ___ football at 5pm yesterday.", options: ["were playing", "play", "played"], answer: 0 },
      { q: "I ___ coffee this morning.", options: ["drank", "drink", "drinks"], answer: 0 },
      { q: "The baby ___ loudly.", options: ["is crying", "cried", "cry"], answer: 0 },
      { q: "We ___ in New York in 2010.", options: ["live", "lived", "lives"], answer: 1 },
      { q: "He ___ English very well.", options: ["spoke", "speaks", "speaking"], answer: 1 },
      { q: "You ___ my best friend.", options: ["are", "was", "am"], answer: 0 },
      { q: "The train ___ at 6pm yesterday.", options: ["leave", "left", "leaves"], answer: 1 },
      { q: "She ___ like pizza.", options: ["doesn’t", "didn’t", "isn’t"], answer: 0 },
      { q: "Birds ___ in the sky.", options: ["fly", "flew", "flies"], answer: 0 }
    ]
  }
];

// ===============================
// VARIABLES
// ===============================
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;
let lives = 3;
let timer;
let timeLeft = 12; // 12 segundos por pregunta
let globalCorrect = 0;
const totalQuestions = levels.reduce((acc, lvl) => acc + lvl.questions.length, 0);
let miniGameUsed = false; // controlar minijuego único

// ===============================
// ELEMENTOS DOM
// ===============================
const hudLives = document.getElementById("hud-lives");
const hudTimer = document.getElementById("hud-timer");
const hudScore = document.getElementById("hud-score");
const questionArea = document.getElementById("question-area");
const questionText = document.getElementById("question-text");
const optionsArea = document.getElementById("options-area");
const progressText = document.getElementById("progress-text");
const levelName = document.getElementById("level-name");
const statusText = document.getElementById("status-text");
const startScreen = document.getElementById("start-screen");
const matchArea = document.getElementById("match-area");
const matchBoard = document.getElementById("match-board");
const matchCorrect = document.getElementById("match-correct");
const levelCompleteArea = document.getElementById("level-complete-area");
const overlay = document.getElementById("overlay");
const overlayModal = document.getElementById("overlay-modal");

// ===============================
// FUNCIONES
// ===============================
function startGame() {
  startScreen.style.display = "none";
  questionArea.style.display = "block";
  currentLevel = 0;
  currentQuestion = 0;
  score = 0;
  lives = 3;
  globalCorrect = 0;
  miniGameUsed = false;
  updateHUD();
  showQuestion();
}

function updateHUD() {
  hudLives.textContent = "❤️".repeat(Math.max(0, lives));
  hudTimer.textContent = `⏱️ ${timeLeft}s`;
  hudScore.textContent = `Score: ${score}`;
  levelName.textContent = levels[currentLevel].name;
  progressText.textContent = `${Math.min(currentQuestion + 1, levels[currentLevel].questions.length)} / ${levels[currentLevel].questions.length}`;
  statusText.textContent = `Playing...`;
}

function showQuestion() {
  clearInterval(timer);

  if (currentQuestion >= levels[currentLevel].questions.length) {
    currentLevel++;
    if (currentLevel >= levels.length) {
      return gameOver(true); // win
    }
    currentQuestion = 0;
    levelCompleteArea.style.display = "block";
    questionArea.style.display = "none";
    return;
  }

  const q = levels[currentLevel].questions[currentQuestion];
  questionText.textContent = q.q;
  optionsArea.innerHTML = "";
  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(i);
    optionsArea.appendChild(btn);
  });

  timeLeft = 12;
  hudTimer.textContent = `⏱️ ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    hudTimer.textContent = `⏱️ ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      if (currentQuestion < levels[currentLevel].questions.length) {
        currentQuestion++;
      }
      loseLife();
    }
  }, 1000);

  updateHUD();
}

function checkAnswer(selected) {
  clearInterval(timer);
  const q = levels[currentLevel].questions[currentQuestion];
  if (selected === q.answer) {
    score += 10;
    globalCorrect++;
    currentQuestion++;
    updateHUD();
    showQuestion();
  } else {
    if (currentQuestion < levels[currentLevel].questions.length) {
      currentQuestion++;
    }
    loseLife();
  }
}

function loseLife() {
  lives--;
  updateHUD();

  if (lives <= 0) {
    if (!miniGameUsed) {
      setTimeout(() => startMinigame(), 300);
    } else {
      gameOver(false);
    }
  } else {
    showQuestion();
  }
}

// ===============================
// MINIJUEGO (20s) 
// ===============================
function startMinigame() {
  clearInterval(timer);
  questionArea.style.display = "none";
  matchArea.style.display = "block";
  matchBoard.innerHTML = "";
  matchCorrect.textContent = "0";

  miniGameUsed = true;

  let correctPairs = 0;
  let attempts = 0;
  let timeLeftMini = 20; // 20 segundos
  let miniTimer;

  const words = [
    ["Dog", "Perro"],
    ["Cat", "Gato"],
    ["House", "Casa"],
    ["Book", "Libro"],
    ["Sun", "Sol"]
  ];

  const cards = [];
  words.forEach(([en, es]) => {
    cards.push({ word: en, match: es });
    cards.push({ word: es, match: en });
  });
  cards.sort(() => Math.random() - 0.5);

  cards.forEach(c => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = c.word;
    btn.onclick = () => selectCard(c, btn);
    matchBoard.appendChild(btn);
  });

  hudTimer.textContent = `⏱️ ${timeLeftMini}s`;

  let firstCard = null;

  function selectCard(card, btn) {
    if (btn.disabled) return;
    if (!firstCard) {
      firstCard = { card, btn };
      btn.disabled = true;
      btn.classList.add("selected");
    } else {
      if (card.match === firstCard.card.word) {
        correctPairs++;
        matchCorrect.textContent = correctPairs;
        btn.disabled = true;
        firstCard.btn.disabled = true;
        btn.classList.add("matched");
        firstCard.btn.classList.add("matched");
      } else {
        firstCard.btn.disabled = false;
        firstCard.btn.classList.remove("selected");
      }
      firstCard = null;
      attempts++;
      if (attempts >= 5 || correctPairs >= 5) {
        endMinigame(correctPairs >= 3);
      }
    }
  }

  miniTimer = setInterval(() => {
    timeLeftMini--;
    hudTimer.textContent = `⏱️ ${timeLeftMini}s`;
    if (timeLeftMini <= 0) {
      clearInterval(miniTimer);
      endMinigame(correctPairs >= 3);
    }
  }, 1000);

  function endMinigame(success) {
    clearInterval(miniTimer);
    matchArea.style.display = "none";

    if (success) {
      lives = Math.min(3, lives + 1); // recuperar 1 vida
      updateHUD();
      showOverlay(`<h2>✅ Bien hecho</h2><p>Conseguiste ${correctPairs} parejas. Recuperaste 1 vida.</p><div style="margin-top:12px;"><button class="btn" onclick="closeOverlay(); resumeAfterMinigame()">Continuar</button></div>`);
    } else {
      showOverlay(`<h2>💀 Minijuego fallado</h2><p>Conseguiste ${correctPairs} parejas. Necesitabas 3. Game Over.</p><div style="margin-top:12px;"><button class="btn" onclick="confirmGameOver()">OK</button></div>`);
    }
  }
}

function resumeAfterMinigame() {
  closeOverlay();
  questionArea.style.display = "block";
  showQuestion();
}

function confirmGameOver() {
  closeOverlay();
  gameOver(false);
}

// ===============================
// GAME OVER / WIN con confeti
// ===============================
function gameOver(win) {
  clearInterval(timer);
  questionArea.style.display = "none";
  matchArea.style.display = "none";
  levelCompleteArea.style.display = "none";

  overlay.style.display = "flex";

  overlayModal.innerHTML = `
    <h2>${win ? "🎉 ¡Has completado todos los niveles!" : "💀 Game Over"}</h2>
    <p>Acertaste <strong>${globalCorrect}</strong> / ${totalQuestions}</p>
    <div style="display:flex;gap:8px;justify-content:center;margin-top:12px;">
      <button class="btn" onclick="location.reload()">Reiniciar</button>
    </div>
  `;

  if (win && typeof confetti === "function") {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// ===============================
// HELPER OVERLAY
// ===============================
function showOverlay(html) {
  overlayModal.innerHTML = html;
  overlay.style.display = "flex";
  overlay.setAttribute("aria-hidden", "false");
}
function closeOverlay() {
  overlay.style.display = "none";
  overlay.setAttribute("aria-hidden", "true");
  overlayModal.innerHTML = '';
}

// ===============================
// EVENTOS
// ===============================
document.getElementById("start-btn").addEventListener("click", startGame);
document.getElementById("continue-btn").addEventListener("click", () => {
  levelCompleteArea.style.display = "none";
  questionArea.style.display = "block";
  showQuestion();
});
document.getElementById("restart-btn").addEventListener("click", () => location.reload());
document.getElementById("match-skip").addEventListener("click", () => {
  gameOver(false);
});

// inicializar HUD al cargar
updateHUD();
