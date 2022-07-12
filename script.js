
const ulDoHtml = document.getElementById("ListaDeResultados")

function rolandoDados(){
    let arrDeRetorno = [
        {
           nome: "O Resultado foi 2",
           vezes: 0
        },
        {
            nome: "O Resultado foi 3",
            vezes: 0
        },
        {
            nome: "O Resultado foi 4",
            vezes: 0
        },
        {
            nome: "O Resultado foi 5",
            vezes: 0
        },
        {
            nome: "O Resultado foi 6",
            vezes: 0
        },
        {
            nome: "O Resultado foi 7",
            vezes: 0
        },
        {
            nome: "O Resultado foi 8",
            vezes: 0
        },
        {
            nome: "O Resultado foi 9",
            vezes: 0
        }, 
        {
            nome: "O Resultado foi 10",
            vezes: 0
        },
        {
            nome: "O Resultado foi 11",
            vezes: 0
        },
        {
            nome: "O Resultado foi 12",
            vezes: 0
        },]
    for(let i = 0; i < 1000 ; i++){
        let dado1 = Math.floor(Math.random() * 6 + 1)
        let dado2 = Math.floor(Math.random() * 6 + 1)

        let somaDosDados = dado1 + dado2
        if(somaDosDados == 2){
            arrDeRetorno[0].vezes += 1
        }
        else if(somaDosDados == 3){
            arrDeRetorno[1].vezes += 1
        }
        else if(somaDosDados == 4){
            arrDeRetorno[2].vezes += 1
        }
        else if(somaDosDados == 5){
            arrDeRetorno[3].vezes += 1
        }
        else if(somaDosDados == 6){
            arrDeRetorno[4].vezes += 1
        }
        else if(somaDosDados == 7){
            arrDeRetorno[5].vezes += 1
        }
        else if(somaDosDados == 8){
            arrDeRetorno[6].vezes += 1
        }
        else if(somaDosDados == 9){
            arrDeRetorno[7].vezes += 1
        }
        else if(somaDosDados == 10){
            arrDeRetorno[8].vezes += 1
        }
        else if(somaDosDados == 11){
            arrDeRetorno[9].vezes += 1
        }
        else if(somaDosDados == 12){
            arrDeRetorno[10].vezes += 1
        }

    }
    return arrDeRetorno
}

let variavelTeste = rolandoDados()
console.log(variavelTeste)

function mostrandoGrafico(arr){
    for(let i = 0; i < arr.length; i++){
        let resultado = arr[i]
        let card      = criandoTags(resultado)
        
    }
}

function criandoTags(item){

    let tagLi  = document.createElement("li")
    let tagH3  = document.createElement("h3")
    let tagDiv = document.createElement("div")

    tagH3.innerText = item.nome
    tagDiv.style.height = `20px`
    tagDiv.innerText    = item.vezes
    tagDiv.style.color  = "black"
    tagDiv.style.maxWidth  = `${item.vezes}px`
    tagDiv.style.backgroundColor = "red"

    tagLi.appendChild(tagH3)
    tagLi.appendChild(tagDiv)
    ulDoHtml.appendChild(tagLi)

}

console.log(mostrandoGrafico(rolandoDados()))
