/* 

var valorBoleto = 100;

console.log(valorBoleto);

*/

let telefone = document.getElementById("telefone");

telefone.disabled = true;
console.log(telefone.disabled)

function habilitarTelefone() {
  telefone.disabled = false;
  console.log(telefone.disabled);
}
