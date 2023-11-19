function add(){
let num = document.getElementById('num')
let mostra = document.getElementById('valores')
let resultado_final = []
let res = document.getElementById('res')
    if (num.value.length == 0){
         alert('[ERRO] Não foi localizado nenhum número digitado')
    } else {
        num = Number(num.value)
        valor = document.createElement('option')
        if(num < 1 || num > 100){
            alert('[ERRO] Número inválido')
        } else{
         let pos = resultado_final.indexOf(num)
            if (pos == -1){      
              valor.text = `Valor ${num} adicionado`
               mostra.appendChild(valor)
                resultado_final.push(num)
            } else{
                alert('Número já adicionado')
            }
        }
    }
    res.innerHTML += `${resultado_final} ,`
}
