let num = [6 , 8 , 2 , 9 , 3]
num.sort()
num.push(1)
console.log(num)
console.log(`O vetor num tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(6)
if (pos == -1){
    console.log(`O valor não está no vetor`)
} else {
console.log(`O valor está na posição ${pos}`)
}