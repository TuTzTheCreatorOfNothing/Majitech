/*  fetch  = conectar com o server
    await (esperar) obrigatoriamente ao usar await use async atras da funcao
    json = formato amigavel  

*/







let inputtext = document.querySelector(".input-text");

 async function traduzir(){

 let link = "https://api.mymemory.translated.net/get?q=" + inputtext.value + "&langpair=pt-BR|en-US";

 let resposta = await fetch(link)

  let dados = await resposta.json()
 console.log(resposta)
}