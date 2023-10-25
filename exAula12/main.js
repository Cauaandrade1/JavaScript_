agora = new Date()
horario = agora.getHours()

var conteudo = document.getElementById('horario')
conteudo.innerHTML=(`<p>Agora são ${horario} horas.`)

if (horario > 5 && horario < 12){
    document.body.style.background='rgb(209, 161, 10)'
    conteudo.innerHTML += '<img src="imagens/imagem-manha.jpg" alt="imagem manha">'
} else if(horario >= 12 && horario < 18){
    document.body.style.background='rgb(167, 108, 32)'
    conteudo.innerHTML += '<img src="imagens/imagem-tarde.jpg" alt="imagem tarde">'
} else{
    document.body.style.background='rgb(63, 63, 63);'
    conteudo.innerHTML += '<img src="imagens/imagem-noite.png" alt="imagem noite">'
}

