let low = 1;
let high = 100;
let x;

document.getElementById('startBtn').addEventListener('click', startGame);

function startGame() {
    displayX();
}

function displayX() {
    x = Math.floor((low + high) / 2);
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p>¿Es ${x} tu número?</p>
        <button class="btn btn-handleYes" onclick="handleYes()">Sí</button>
        <button class="btn btn-handleNo" onclick="handleNo()">No</button>
    `;
}

function displayHigherLower() {
    const resultDiv = document.getElementById('result');

    resultDiv.innerHTML = `
        <p>¿Es tu número mayor o menor que ${x}?</p>
        <button class="btn btn-handleHigher" onclick="handleHigher()">Mayor</button>
        <button class="btn btn-handleLower" onclick="handleLower()">Menor</button>
    `;
}

function handleYes() {
    document.getElementById('result').innerHTML = `<div class="correct">¡Tu número es ${x}! Fue complicado.</div>`;
}

function handleNo() {
    displayHigherLower();
}

function handleHigher() {
    low = x + 1;
    displayX();
}

function handleLower() {
    high = x - 1;

    if (low <= high) {
        displayX();
    } else {
        document.getElementById('result').innerHTML = `<div class="incorrect">¡Ups! No he adivinado tu número.</div>`;
    }
}
