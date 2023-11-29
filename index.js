let nome = prompt("Qual é o seu nome piloto ?")
let pergunta2 = prompt("Que velocidade gostaria de acelerar a nave ?")
let confirmation = confirm(
  "Deseja confirmar que está indo para velocidade " + pergunta2 + " km/s ? "
)

if (pergunta2 <= 0) {
  alert(
    " Olá " +
      nome +
      " a Nave está parada. Considere partir ou aumentar a velocidade"
  )
} else if (pergunta2 <= 40) {
  alert(" Olá " + nome + " Você está devagar, podemos aumentar mais")
} else if (pergunta2 >= 40 && pergunta2 < 80) {
  alert(" Olá " + nome + " Parece uma boa velocidade")
} else if (pergunta2 >= 80 && pergunta2 < 100) {
  alert(" Olá " + nome + " a Velocidade alta. Considere diminuir")
} else if (pergunta2 >= 100) {
  alert(
    " Olá " + nome + " a Velocidade é perigosa. Controle automático forçado."
  )
}

alert(" Piloto: " + nome + "\n" + " Velocidade de: " + pergunta2 + " km/s ")
