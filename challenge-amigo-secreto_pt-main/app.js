//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function addAmigos(){
    add = document.getElementById('amigo').value; 
    amigos.push(add);
    limparCampo();
    console.log(amigos);

    if (add == ""){
        alert('Insira um nome, por favor.')
        amigos.pop("")
    }
}

function exibirAmigos(){
    exibeAmigo = document.getElementById('listaAmigos')


}

function sortearAmigo(){

    númeroDoAmigo = parseInt(Math.random()*amigos.length);
    console.log(númeroDoAmigo); 
    console.log(amigos[númeroDoAmigo]);
    
}

// Função para limpar o campo de preenchimento dos nomes
function limparCampo() {
    amg = document.querySelector('input');
    amg.value = '';
}