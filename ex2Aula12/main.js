function verificar(){
var data = new Date()
var ano_atual = data.getFullYear()
var nasc = document.getElementById('nascimento')
var res = document.getElementById('res')

if (Number(nasc.value) > ano_atual){
    window.alert('[ERRO] O ano de nascimento é maior que o ano atual')
} else{
    var fsex = document.getElementsByName('sexo')
    var idade = ano_atual - Number(nasc.value)
    var genero = ''
    var img = document.createElement('img') // cria um elemento dinamico chamado 'img'
    img.setAttribute('id', 'foto') //transforma ele quase em uma variavel
    if (fsex[0].checked){
        genero = 'Homem'
        if (idade > 0 && idade < 12){
            //criança
            img.setAttribute('src', 'imagens/Menino-criança.jpg')//Atribuindo a imagem ao elemento 'img' (dependendo da condição)
        } else if(idade < 21 ){
            //adolescente
            img.setAttribute('src', 'imagens/Menino-adolescente.jpg')
        } else if(idade < 60){
            //adulto
            img.setAttribute('src', 'imagens/Homem.jpg')
        } else {
            //veio
            img.setAttribute('src', 'imagens/Idoso.jpg')
        }
    } else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade > 0 && idade < 12){
            //criança
            img.setAttribute('src', 'imagens/Menina-criança.jpg')
        } else if(idade < 21 ){
            //adolescente
            img.setAttribute('src', 'imagens/Menina-adolescente.jpg')
        } else if(idade < 60){
            //adulto
            img.setAttribute('src', 'imagens/Mulher.jpg')
        } else {
            //veio
            img.setAttribute('src', 'imagens/Idosa.jpg')
        }
    }
   
    res.style.textAlign='center'
    res.innerHTML=(`<p>Detectamos ${genero} de ${idade} anos</p>`)
    res.appendChild(img)//Mostra o elemento 'img' na tela
}
}