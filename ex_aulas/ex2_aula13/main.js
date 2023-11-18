function tabuada(){
    var num_princ = document.getElementById('num')
    var tab = document.getElementById('tabuada')
    if (num_princ.value.length == 0){
        alert('[ERRO] Não foi localizado nenhum número digitado')
    } else{
        num_princ = Number(num_princ.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10){
        let item = document.createElement('option')
        item.text = `${num_princ} X ${c} = ${num_princ * c}`
        item.value = `tab${c}` //Isso é somente para outras linguagens como PHP, serve para definir o 'value' do option
        tab.appendChild(item)
        c++
        }
    }

}