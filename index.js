/* Algoritmo para controle de login
 * Ainda em desenvolvimento e evolução
 * Inicialmente como exercício
 */

const prompt = require('prompt-sync')();

let usuario = "misael.sena";
let senha = 1234;



function login(){
    let usuarioDigitado = prompt("Usuário: ");
    let senhaDigitada = prompt("Senha: ");

    if(usuarioDigitado !== usuario){
        console.log("Usuário informado inválido!");
        return login();
    }else if(senhaDigitada != senha){
        console.log("Senha informada inválida!");
        return login();
    }else{
        console.log("Logado!");
    }
}
login();



