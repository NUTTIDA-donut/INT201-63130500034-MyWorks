let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ : ")
let random_number = Math.floor(Math.random() * 1000)
document.getElementById("random").innerHTML = random_number
if (lotto_number == random_number) {
    document.getElementById("result").innerHTML = 'คุณถูกรางวัลเลขท้ายสามตัว'
} else {
    document.getElementById("result").innerHTML = 'เสียใจด้วยคุณไม่ถูกรางวัล'
}

// let age = prompt('อายุของคุณ :')
// if (age == 12) {
//     console.log('ไปเรียน ป หก นะ')
// } else if (age == 13) {
//     console.log('เรียน ม 1')
// } else {

// }