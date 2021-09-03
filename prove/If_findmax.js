const prompt = require('prompt-sync')()
var n1 = parseFloat(prompt('จำนวนที่ 1 : '))
var max = n1
var n2 = parseFloat(prompt('จำนวนที่ 2 : '))
if (n2 > n1) {
    max = n2
}
var n3 = parseFloat(prompt('จำนวนที่ 3 : '))
if (n3 > n2) {
    max = n3
}
console.log(`จำนวนที่มีค่ามากที่สุด : ${max}`)