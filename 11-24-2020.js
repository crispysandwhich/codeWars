/*
    So this is going to be a basically a mini start towards me doing code wars, the way of this may possibly end, i may create a folder with the date in it instead of creating something like this,
    but yeah, just something for me, going to make sure i can keep track and at least do this like 3 of them a day or something!
    Eventually i want to create a UI for this, that i can mark if i comepleted or not and get myself my own points but eh thats me.
*/

// Kata 8kyu Multiplication table for number - https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce

function multiTable(number) {
    let num = ''

    for(let i = 1; i <= 10;i++){
        num += `${i} * ${number} = ${i * number}`
        i < 10 ? num += '\n' : null
    }
    return num
}

console.log(multiTable(5))

// Simpler
function multiTable2(n){
    return [...Array(10)].map((_,i)=>`${i+1} * ${n} = ${n*i+n}`).join('\n')
}
console.log(multiTable2(10))