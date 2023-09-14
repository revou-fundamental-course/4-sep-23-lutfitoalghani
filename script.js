// Variables
const btnPersegi = document.getElementById('btnPersegi');
const btnPersegiPanjang = document.getElementById('btnPersegiPanjang');
const shapeImage = document.getElementById('shapeImage');
const formulaText = document.getElementById('formulaText');
const calculateTitle = document.getElementById('calculateTitle');
const inputContainer = document.getElementById('inputContainer');
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const resultText = document.getElementById('resultText');
const calculationSteps = document.getElementById('calculationSteps');
const btnCalculate = document.getElementById('btnCalculate');
const btnReset = document.getElementById('btnReset');

// Event Listeners
btnPersegi.addEventListener('click', setPersegi);
btnPersegiPanjang.addEventListener('click', setPersegiPanjang);
btnCalculate.addEventListener('click', calculate);
btnReset.addEventListener('click', reset);

// Initial state
setPersegi();

// Functions
function setPersegi() {
    formulaText.style.marginLeft = '75px'; // Mengatur margin
    formulaText.style.marginRight = '75px'; // Mengatur margin
    shapeImage.style.width = '100px';
    shapeImage.style.height = '100px';
    formulaText.style.fontSize = '16px'; // Menambah ukuran font
    formulaText.innerText = '"Persegi adalah bangun datar dengan keempat sisi yang sama panjang dan memiliki keempat sudut yang sejajar dan berukuran 90 derajat."';
    calculateTitle.innerText = 'Hitung Persegi';
    widthInput.style.display = 'none';
    calculationSteps.innerHTML = ''; // Menghapus langkah-langkah hitung
    inputContainer.style.justifyContent = 'center';
}

function setPersegiPanjang() {
    formulaText.style.marginLeft = '75px'; // Mengatur margin
    formulaText.style.marginRight = '75px';
    shapeImage.style.width = '200px';
    shapeImage.style.height = '100px';
    formulaText.style.fontSize = '16px'; // Menambah ukuran font
    formulaText.innerText = '"Persegi panjang adalah bangun datar dengan dua pasang sisi sejajar, salah satu pasang sisi memiliki panjang yang lebih besar daripada pasang sisi yang lain."';
    calculateTitle.innerText = 'Hitung Persegi Panjang';
    widthInput.style.display = '';
    calculationSteps.innerHTML = ''; // Menghapus langkah-langkah hitung
    inputContainer.style.justifyContent = 'center';
}

function calculate() {
    const length = parseFloat(lengthInput.value);
    const width = parseFloat(widthInput.value);

    if (isNaN(length) || (isNaN(width) && widthInput.style.display === 'block')) {
        resultText.innerText = 'Masukkan nilai yang valid.';
    } else {
        let calculationStepsText = ''; // Variabel untuk mengumpulkan langkah-langkah hitung

        if (widthInput.style.display === '') {
            const area = length * width;
            const perimeter = 2 * (length + width);

            calculationStepsText = 
            `<b>Luas Persegi Panjang</b><br>
            = Panjang x Lebar<br>
            = ${length} x ${width}<br>
            = ${area}<br><br>`;

            calculationStepsText += 
            `<b>Keliling Persegi Panjang</b><br>
            = Panjang + Panjang + Lebar + Lebar<br>
            = ${length} + ${length} + ${width} + ${width}<br>
            = ${perimeter}<br><br>`;
        } else {
            const area = length * length;
            const perimeter = 4 * length;

            calculationStepsText = 
            `<b>Luas Persegi</b><br>
            = Sisi x Sisi<br>
            = ${length} x ${length}<br>
            = ${area}<br><br>`;

            calculationStepsText += 
            `<b>Keliling Persegi</b><br>
            = Sisi + Sisi + Sisi + Sisi<br>
            = ${length} + ${length} + ${length} + ${length}<br>
            = ${perimeter}<br><br>`;
        }

        // Menampilkan langkah-langkah hitung dalam elemen HTML yang sesuai
        calculationSteps.innerHTML = calculationStepsText;
    }
}


function reset() {
    lengthInput.value = '';
    widthInput.value = '';
    resultText.innerText = '';
    calculationSteps.innerHTML = ''; // Menghapus langkah-langkah hitung
}
