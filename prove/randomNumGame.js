const prompt = require('prompt-sync')()
let randomNum = (Math.random() * 100).toFixed(2)
let count
for (count = 1; count <= 7; count++) {
    console.log(`round : ${count}`)
    num = prompt('กรุณาใส่ตัวเลขที่ จะทาย: ')
    check(num)
}

function check(input) {
    if (input <= 0) {
        console.log('มากกว่านี้')
    } else if (input > 100) {
        console.log('น้อยกว่านี้')
    } else {
        compare(input);
    }
}

function compare(input) {
    if (input == randomNum) {
        console.log('คุณทายถูก คุณชนะ')
    } else { console.log('คุณทายผิด คุณแพ้') }
}