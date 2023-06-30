
//Atividade 02

var sistema_operacional =  prompt ("Qual o sistema operacional? ");

if (sistema_operacional === "linux") {
  console.log("O Linux é um sistema operacional de código aberto.");
} else if (sistema_operacional === "windows") {
  console.log("O Windows é um sistema operacional da empresa Microsoft.");
} else if (sistema_operacional === "macOS") {
  console.log("O macOS é um sistema operacional da empresa Apple.");
} else if (sistema_operacional === "Chrome OS") {
  console.log("O Chrome OS é um sistema operacional da empresa Google.");
} else {
  console.log("Há a possibilidade de você estar utilizando um sistema mobile.");
}