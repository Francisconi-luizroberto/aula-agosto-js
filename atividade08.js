/** 
 * 8 Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:
a média das idades das pessoas que responderam ótimo;
a quantidade de pessoas que responderam regular;
a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.

*/

let pesquisas = [1,2,3,1,2,3,1,2,3,1,2,3,1,2,3]

let idades= [10,60,30,20,23,10,60,30,20,23,10,60,30,20,23]

let totalIdadeOtimo=0;

let respostaOtimo=0

// soma todos os valores do array



for (let i = 0; i < pesquisas.length; i++) {
    const pesquisa = pesquisas[i];
    if(pesquisa==3) {
        totalIdadeOtimo=totalIdadeOtimo+idades[i] // ou totalIdadeOtimo+=idades[i]
        respostaOtimo++
    }
}

const media=totalIdadeOtimo/idades.length;

alert(`A média de pessoas que responderam ótimo é: ${media}`)