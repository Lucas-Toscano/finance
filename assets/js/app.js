// valor notas
const nota200 = document.getElementById('200');
const nota100 = document.getElementById('100');
const nota50 = document.getElementById('50');
const nota20 = document.getElementById('20');
const nota10 = document.getElementById('10');
const nota5 = document.getElementById('5');
const nota2 = document.getElementById('2');

// valor moedas
const moeda1 = document.getElementById('1');
const moeda5 = document.getElementById('m5');
const moeda10 = document.getElementById('m10');
const moeda25 = document.getElementById('m25');
const moeda50 = document.getElementById('m50');

const totalValue = document.querySelector('.valorTotal');

function result() {
  const number200 = parseFloat(nota200.value);
  const number100 = parseFloat(nota100.value);
  const number50 = parseFloat(nota50.value);
  const number20 = parseFloat(nota20.value);
  const number10 = parseFloat(nota10.value);
  const number5 = parseFloat(nota5.value);
  const number2 = parseFloat(nota2.value);

  const coin1 = parseFloat(moeda1.value);
  const coin50 = parseFloat(moeda50.value);
  const coin25 = parseFloat(moeda25.value);
  const coin10 = parseFloat(moeda10.value);
  const coin5 = parseFloat(moeda5.value);

  console.log(number200 * 5);

  const sum = (200 * number200) + (100 * number100) + (50 * number50) + 
  (20 * number20)+ (10 * number10)+ (5 * number5)+ (2 * number2) + (coin1) + 
  (coin50 / 2) + (coin25 / 4)+ (coin10 / 10)+ (coin5 / 20);

  if (sum != 0) {
    totalValue.innerHTML = `R$ ${sum.toFixed(2)}`
  } else {
    totalValue.innerHTML = `R$ 0.00`
  }
}