
const elements = [
  [1, "H", "Hidrogen"],
  [2, "He", "Helium"],
  [3, "Li", "Litium"],
  [4, "Be", "Berilium"],
  [5, "B", "Boron"],
  [6, "C", "Karbon"],
  [7, "N", "Nitrogen"],
  [8, "O", "Oksigen"],
  [9, "F", "Fluorin"],
  [10, "Ne", "Neon"],
  [11, "Na", "Natrium"],
  [12, "Mg", "Magnesium"],
  [13, "Al", "Aluminium"],
  [14, "Si", "Silikon"],
  [15, "P", "Fosfor"],
  [16, "S", "Sulfur"],
  [17, "Cl", "Klorin"],
  [18, "Ar", "Argon"],
  [19, "K", "Kalium"],
  [20, "Ca", "Kalsium"],
  [21, "Sc", "Skandium"],
  [22, "Ti", "Titanium"],
  [23, "V", "Vanadium"],
  [24, "Cr", "Kromium"],
  [25, "Mn", "Mangan"],
  [26, "Fe", "Besi"],
  [27, "Co", "Kobalt"],
  [28, "Ni", "Nikel"],
  [29, "Cu", "Tembaga"],
  [30, "Zn", "Seng"],
  [31, "Ga", "Galium"],
  [32, "Ge", "Germanium"],
  [33, "As", "Arsen"],
  [34, "Se", "Selenium"],
  [35, "Br", "Bromin"],
  [36, "Kr", "Kripton"],
  [37, "Rb", "Rubidium"],
  [38, "Sr", "Stronsium"],
  [39, "Y", "Itrium"],
  [40, "Zr", "Zirkonium"],
  [41, "Nb", "Niobium"],
  [42, "Mo", "Molibdenum"],
  [43, "Tc", "Teknesium"],
  [44, "Ru", "Rutenium"],
  [45, "Rh", "Rodium"],
  [46, "Pd", "Paladium"],
  [47, "Ag", "Perak"],
  [48, "Cd", "Kadmium"],
  [49, "In", "Indium"],
  [50, "Sn", "Timah"],
  [51, "Sb", "Antimon"],
  [52, "Te", "Telurium"],
  [53, "I", "Iodin"],
  [54, "Xe", "Xenon"],
  [55, "Cs", "Sesium"],
  [56, "Ba", "Barium"],
  [57, "La", "Lantanum"],
  [58, "Ce", "Serium"],
  [59, "Pr", "Praseodimium"],
  [60, "Nd", "Neodimium"],
  [61, "Pm", "Prometium"],
  [62, "Sm", "Samarium"],
  [63, "Eu", "Europium"],
  [64, "Gd", "Gadolinium"],
  [65, "Tb", "Terbium"],
  [66, "Dy", "Disprosium"],
  [67, "Ho", "Holmium"],
  [68, "Er", "Erbium"],
  [69, "Tm", "Tulium"],
  [70, "Yb", "Iterbium"],
  [71, "Lu", "Lutesium"],
  [72, "Hf", "Hafnium"],
  [73, "Ta", "Tantalum"],
  [74, "W", "Wolfram"],
  [75, "Re", "Renium"],
  [76, "Os", "Osmium"],
  [77, "Ir", "Iridium"],
  [78, "Pt", "Platina"],
  [79, "Au", "Emas"],
  [80, "Hg", "Raksa"],
  [81, "Tl", "Talium"],
  [82, "Pb", "Timbal"],
  [83, "Bi", "Bismut"],
  [84, "Po", "Polonium"],
  [85, "At", "Astatin"],
  [86, "Rn", "Radon"],
  [87, "Fr", "Fransium"],
  [88, "Ra", "Radium"],
  [89, "Ac", "Aktinium"],
  [90, "Th", "Torium"],
  [91, "Pa", "Protaktinium"],
  [92, "U", "Uranium"],
  [93, "Np", "Neptunium"],
  [94, "Pu", "Plutonium"],
  [95, "Am", "Amerisium"],
  [96, "Cm", "Kurium"],
  [97, "Bk", "Berkelium"],
  [98, "Cf", "Kalifornium"],
  [99, "Es", "Einsteinium"],
  [100, "Fm", "Fermium"],
  [101, "Md", "Mendelevium"],
  [102, "No", "Nobelium"],
  [103, "Lr", "Lawrensium"],
  [104, "Rf", "Rutherfordium"],
  [105, "Db", "Dubnium"],
  [106, "Sg", "Seaborgium"],
  [107, "Bh", "Bohrium"],
  [108, "Hs", "Hassium"],
  [109, "Mt", "Meitnerium"],
  [110, "Ds", "Darmstadtium"],
  [111, "Rg", "Roentgenium"],
  [112, "Cn", "Kopernisium"],
  [113, "Nh", "Nihonium"],
  [114, "Fl", "Flerovium"],
  [115, "Mc", "Moskovium"],
  [116, "Lv", "Livermorium"],
  [117, "Ts", "Tenesin"],
  [118, "Og", "Oganeson"]
].map(([id, symbol, name]) => ({ id, symbol, name }));


// Mengambil elemen HTML
const gameBoard = document.getElementById("gameBoard");
const roundDisplay = document.getElementById("round");
const matchedDisplay = document.getElementById("matched");
const movesDisplay = document.getElementById("moves");
const highScoreDisplay = document.getElementById("highScore");
const difficultyDisplay = document.getElementById("difficulty");
const messageDisplay = document.getElementById("message");
const nextBtn = document.getElementById("nextBtn");


// Variabel permainan
let round = 1;
let moves = 0;
let matchedPairs = 0;

let firstCard = null;
let secondCard = null;

let lockBoard = false;
let gameActive = true;

let currentElements = [];

let highScore =
  Number(localStorage.getItem("chemistryHighScore")) || 0;

highScoreDisplay.textContent = highScore;


// Mengacak kartu
function shuffle(array) {
  const shuffled = [...array];

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [shuffled[i], shuffled[j]] =
      [shuffled[j], shuffled[i]];
  }

  return shuffled;
}


// Mengatur tingkat kesulitan
function getDifficulty() {
  if (round <= 2) return "Mudah";
  if (round <= 4) return "Normal";
  if (round <= 7) return "Sedang";

  return "Sulit";
}


// Jumlah pasangan bertambah satu setiap ronde, maksimal seluruh unsur.
function getPairCount() {
  return Math.min(4 + round, elements.length);
}

// Mengambil unsur sesuai jumlah pasangan ronde ini
function getNextElements() {
  const pairCount = getPairCount();
  const previousPairs = (round - 1) * 5 + ((round - 1) * (round - 2)) / 2;
  const startIndex = previousPairs % elements.length;

  const selected = [];

  for (let i = 0; i < pairCount; i++) {
    const index = (startIndex + i) % elements.length;

    selected.push(elements[index]);
  }

  return selected;
}


// Membuat kartu permainan
function createCards() {
  gameBoard.innerHTML = "";

  const cards = [];

  currentElements.forEach(element => {
    cards.push({
      id: element.id,
      type: "symbol",
      value: element.symbol
    });

    cards.push({
      id: element.id,
      type: "name",
      value: element.name
    });
  });

  const shuffledCards = shuffle(cards);

  shuffledCards.forEach(data => {
    const card = document.createElement("button");

    card.classList.add("card");
    card.textContent = "?";

    card.dataset.id = data.id;
    card.dataset.type = data.type;
    card.dataset.value = data.value;

    card.addEventListener("click", () => {
      flipCard(card);
    });

    gameBoard.appendChild(card);
  });
}


// Membuka dan menutup kartu
function flipCard(card) {
  if (!gameActive || lockBoard) return;

  if (card.classList.contains("matched")) return;

  // Menutup kartu pertama jika diklik kembali
  if (card === firstCard) {
    card.classList.remove("flipped");
    card.textContent = "?";

    firstCard = null;

    messageDisplay.textContent =
      "Kartu ditutup! Pilih kartu lainnya.";

    return;
  }

  // Mengabaikan kartu yang sudah terbuka
  if (card.classList.contains("flipped")) return;

  // Membuka kartu
  card.classList.add("flipped");
  card.textContent = card.dataset.value;

  // Jika belum ada kartu pertama
  if (!firstCard) {
    firstCard = card;

    messageDisplay.textContent =
      "Pilih satu kartu lagi!";

    return;
  }

  // Menyimpan kartu kedua
  secondCard = card;

  moves++;

  movesDisplay.textContent = moves;

  checkMatch();
}


// Memeriksa kecocokan kartu
function checkMatch() {
  const isMatch =
    firstCard.dataset.id === secondCard.dataset.id &&
    firstCard.dataset.type !== secondCard.dataset.type;

  if (isMatch) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");

    matchedPairs++;

    matchedDisplay.textContent =
      `${matchedPairs}/${getPairCount()}`;

    messageDisplay.textContent =
      "Hebat! Pasangan unsur ditemukan! ⚗️";

    resetTurn();

    if (matchedPairs === getPairCount()) {
      finishRound();
    }

  } else {
    lockBoard = true;

    messageDisplay.textContent =
      "Belum cocok! Coba lagi.";

    setTimeout(() => {
      firstCard.classList.remove("flipped");
      secondCard.classList.remove("flipped");

      firstCard.textContent = "?";
      secondCard.textContent = "?";

      resetTurn();

      messageDisplay.textContent =
        "Ayo cari pasangan lainnya!";
    }, 1000);
  }
}


// Mengatur ulang giliran
function resetTurn() {
  firstCard = null;
  secondCard = null;

  lockBoard = false;
}


// Menyelesaikan ronde
function finishRound() {
  gameActive = false;

  const score = Math.max(
    0,
    matchedPairs * 100 - moves * 10
  );

  messageDisplay.textContent =
    `Ronde selesai! Skor kamu: ${score} ⚛️`;

  if (score > highScore) {
    highScore = score;

    localStorage.setItem(
      "chemistryHighScore",
      highScore
    );

    highScoreDisplay.textContent = highScore;

    messageDisplay.textContent +=
      " | NEW HIGH SCORE!";
  }

  nextBtn.disabled = false;
}


// Memulai permainan
function beginGame() {
  moves = 0;
  matchedPairs = 0;

  firstCard = null;
  secondCard = null;

  lockBoard = false;
  gameActive = true;

  currentElements = getNextElements();

  roundDisplay.textContent = round;

  matchedDisplay.textContent = `0/${getPairCount()}`;
  movesDisplay.textContent = "0";

  difficultyDisplay.textContent =
    `⚛ Kesulitan: ${getDifficulty()} ⚛`;

  messageDisplay.textContent =
    "Temukan pasangan simbol dan nama unsur!";

  nextBtn.disabled = true;

  createCards();
}


// Menuju ronde selanjutnya
function nextRound() {
  if (gameActive) return;

  round++;

  beginGame();
}


// Mengulang permainan
function restartGame() {
  round = 1;

  beginGame();
}


// Menjalankan game pertama kali
beginGame();
