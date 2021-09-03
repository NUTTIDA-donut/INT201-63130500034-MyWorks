const prompt = require('prompt-sync')()
var team1_goals = parseInt(prompt('จำนวนประตูทีมที่ 1 : '))
var team2_goals = parseInt(prompt('จำนวนประตูทีมที่ 2 : '))
if (team1_goals > team2_goals) {
    console.log('ทีมที่ 1 ชนะ')
} else if (team2_goals > team1_goals) {
    console.log('ทีมที่ 2 ชนะ')
} else {
    console.log('เสมอ')
}