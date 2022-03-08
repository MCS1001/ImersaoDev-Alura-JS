var nome = "Mateus"

var notaDoPrimeiroBimestre = 9.5
var notaDoSegundoBimestre = 8.5
var notaDoTerceiroBimestre = 6
var notaDoQuartoBimestre = 7.7

var notaFinal = (notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) /4

var notaFixada = notaFinal.toFixed(2)

console.log("Olá " + nome + " seja bem vindo!")
console.log("Nota do 1 bimestre " + notaDoPrimeiroBimestre)
console.log("Nota do 2 bimestre " + notaDoSegundoBimestre)
console.log("Nota do 3 bimestre " + notaDoTerceiroBimestre)
console.log("Nota do 4 bimestre " + notaDoQuartoBimestre)
console.log("Nota Final " + notaFixada)
if(notaFixada > 6){
  console.log("Muito bem " + nome + " você passou de ano")}
else{
  console.log(nome + ", infelizmente você não passou de ano")
}
