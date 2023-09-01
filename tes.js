// Membuat array dengan 100 nilai random antara 1 dan 50
const arrayLength = 100;
const terkecilRandomValue = 1;
const terbesarRandomValue = 50;
const randomArray = [];

for (let i = 1; i < arrayLength; i++) {
  const randomValue = Math.floor(Math.random() * (terbesarRandomValue - terkecilRandomValue + 1)) + terkecilRandomValue;
  randomArray.push(randomValue);
}

// Membagi array menjadi array genap dan array ganjil
const evenArray = [];
const oddArray = [];

for (let i = 0; i < randomArray.length; i++) {
  if (i % 2 === 0) {
    evenArray.push(randomArray[i]);
  } else {
    oddArray.push(randomArray[i]);
  }
}

// Menghitung Min, Max, Total, dan Rata-rata dari masing-masing array
function minEven(array) {
  let minValue = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    }
  }

  return minValue;
}

function maxEven(array) {
  let maxValue = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  return maxValue;
}

function totalEven(array) {
  let total = 0;

  for (let i = 0; i < array.length; i++) {
    total += array[i];
  }

  return total;
}

function averageEven(array) {
  let Total = totalEven(array);
  let rataRata = Total / array.length;
  return rataRata;
}
// Membandingkan hasil dari kedua array
function perbandingan(evenArray, oddArray) {
  if (minEven(evenArray) < minEven(oddArray)) {
    console.log('Nilai minimum array Genap lebih kecil dari nilai minimum array Ganjil dengan nilai = ' + minEven(evenArray));
  } else {
    console.log('Nilai minimum array Ganjil lebih kecil dari nilai minimum array Genap dengan nilai = ' + minEven(oddArray));
  }

  if (maxEven(evenArray) > maxEven(oddArray)) {
    console.log('Nilai Maximum array Genap lebih besar dari nilai maximum array Ganjil dengan nilai = ' + maxEven(evenArray));
  } else {
    console.log('Nilai Maximum array Genap lebih besar dari nilai maximum array Genap dengan nilai = ' + maxEven(oddArray));
  }

  if (totalEven(evenArray) == totalEven(oddArray)) {
    console.log('nilai total arrayA sama dengan nilai total arrayB');
  } else {
    console.log('Nilai total array A dan B tidak sama');
  }

  if (averageEven(evenArray) < averageEven(oddArray)) {
    console.log('Nilai rata rata array Genap lebih kecil dari nilai rata rata array ganjil dengan nilai = ' + averageEven(evenArray));
  } else {
    console.log('Nilai minimum array Ganjil lebih kecil dari nilai rata rata array genap dengan nilai = ' + averageEven(oddArray));
  }
}

console.log('Nilai Random:', randomArray);
console.log('Array Genap:', evenArray);
console.log('Array Ganjil:', oddArray);
console.log('Nilai Minimum Array A : ' + minEven(evenArray));
console.log('Nilai Minimum Array B : ' + minEven(oddArray));

console.log('Nilai Maximum Array A : ' + maxEven(evenArray));
console.log('Nilai Maximum Array B : ' + maxEven(oddArray));

console.log('Nilai Total Array A : ' + totalEven(evenArray));
console.log('Nilai Total Array B : ' + totalEven(oddArray));

console.log('Nilai Rata Rata Array A : ' + averageEven(evenArray));
console.log('Nilai Rata Rata Array B : ' + averageEven(oddArray));

console.log(perbandingan(evenArray, oddArray));
