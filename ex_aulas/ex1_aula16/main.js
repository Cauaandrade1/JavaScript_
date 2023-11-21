let resultado_final = []
let final = document.getElementById('res')

function add(){
    let num = document.getElementById('num')
    let mostra = document.getElementById('valores')
    if (num.value.length == 0){
        alert('[ERRO] Não foi localizado nenhum número digitado')
   } else{
        num = Number(num.value)
        let ver = VerificarMaior(num)
        if (ver == 0){
            alert('[ERRO] Número inválido')
        } else if (VerificaLista(num) == 1){
             let valor = document.createElement('option')
             valor.text = `Valor ${num} adicionado`
             mostra.appendChild(valor)
             final.innerHTML = ''
        } else{
            alert('[ERRO] Número já está na lista')
        }
   }
}

function VerificarMaior(n){
    if(n < 1 || n > 100){
        return 0
    } else{
        return 1
    }
}   

function VerificaLista(n){
    let TemLista = resultado_final.indexOf(n)
    if (TemLista == -1){
        resultado_final.push(n)
        return 1
    } else {
        return 0
    }
}

function finalizar(){
    final.innerHTML = (`<p>Ao todo temos ${resultado_final.length} números cadastrados</p>`)

    let soma = 0
    let pos = 0
    for (pos in resultado_final){
        soma += resultado_final[pos]
    }
    let media = soma / (Number(pos)+1)
    resultado_final.sort()

    final.innerHTML += `<p>O maior número encontrado foi: ${resultado_final[pos]}</p>`
    final.innerHTML += `<p>O menor número encontrado foi ${resultado_final[0]}</p>`
    final.innerHTML += `<p>A soma de todos os números é ${soma}</p>`
    final.innerHTML += `<p>A média dos valores digitados é ${media}</p>`
}