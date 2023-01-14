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
  console.log(nome)
  let resposta = campo.toLowerCase();
  let perguntas = 
  {
    "qual seu nome?": " \u{1F916}: Meu nome é ChatBot, prazer!",
    "como você está?": `\u{1F916}: Tive um dia ótimo até agora, ${nome} :)`,
    "quantos anos você tem?": `\u{1F916}: Minha idade é um número irracional, incompreendido pela humanidade ‍ \u{1F62E}`,
    "onde você mora?": "\u{1F916}: Eu moro no coração de todos :D", 
    "você bebe água?": "\u{1F916}: Água? O que seria isso?",
    "qual meu nome?": `\u{1F916}: Todos da minha espécie sabem seu nome ${nome}!`,
    "você é legal": `\u{1F916}: Muito obrigado ${nome}, fico feliz em receber essa notícia!`,
    "quem criou você?": "\u{1F916}: O nome dele é Pedro Henrique",
    "1+1": "\u{1F916}: Em meus cálculos, 1 + 1 é igual a 2, acertei?",
    "sim": "\u{1F916}: Eu sempre acerto ",
  };
  if(resposta in perguntas){
    let respostaBot = perguntas[resposta];
    resultado.textContent = respostaBot;
  } else if(campoTexto.value == ""){
    resultado.textContent = "\u{1F916}: Me pergunte algo!"
  }
  else{
    let respostaErro = "\u{1F916}: Desculpe, não compreendi a pergunta. Ainda não estou preparado para responder todas as perguntas, verifique acentuações e sinais de pontuação!"
    resultado.textContent = respostaErro;
  }
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  Responder(campoTexto.value);
})

