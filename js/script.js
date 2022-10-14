let recepcaoSpan = document.querySelector("#span-main");
let resultado = document.querySelector("#resultado");
let campoTexto = document.querySelector("#campo-texto")
let btn = document.querySelector("#btn")


let nome = window.prompt("Digite seu nome:");
while(nome === null || nome == ""){
  alert('Digite seu nome, por favor!')
  nome = window.prompt("Digite seu nome:");
}
recepcaoSpan.textContent = `${nome}`

function Responder(campo) {

  let resposta = campo.toLowerCase();

  let perguntas = 
  {
    "qual seu nome?": "Meu nome é ChatBot!",
    "como você está?": `Estou ótimo ${nome} :)`,
    "quantos anos você tem?": "Mais do que a soma de todas as pessoas na Terra :o",
    "onde você mora?": "Eu moro no coração de todos :D", 
    "você bebe água?": "Água? O que seria isso?",
    "qual meu nome?": `Todos da minha espécie sabem seu ${nome}!`,
  };
  
  console.log(perguntas)
  if(resposta in perguntas){
    console.log("existe");
    console.log(perguntas[resposta])
  }
  else{console.log('não existe')}
  
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  Responder(campoTexto.value);
})

