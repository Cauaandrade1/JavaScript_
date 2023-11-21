let amigo = {nome: 'cauã',
 idade:18,
peso:85.4,
engordar(p=0){
    console.log('engordou')
    this.peso += p
}}
amigo.engordar(2)
console.log(`O ${amigo.nome} pesa ${amigo.peso}Kg`)