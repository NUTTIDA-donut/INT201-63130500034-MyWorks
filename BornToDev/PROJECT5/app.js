let round = prompt('คุณจะเล่นทั้งหมดกี่รอบ')
for (var i = 1; i <= round; i++) {
    var ans = prompt('Head or Tail')
    var random_answer = ''

    if (Math.floor(Math.random() * 10) < 4) {
        random_answer = 'Head'
    } else {
        random_answer = 'Tail'
    }

    if (ans == random_answer) {
        alert('ยินดีด้วย')
        document.getElementById('game-list').innerHTML += 'รอบที่' + i + ' เลือก ' + ans + ' ได้ ' + random_answer + '<br>'
    } else {
        alert('เสียใจด้วย')
        document.getElementById('game-list').innerHTML += 'รอบที่' + i + ' เลือก ' + ans + ' ได้ ' + random_answer + '<br>'
    }

}