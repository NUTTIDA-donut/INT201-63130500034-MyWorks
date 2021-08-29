function toCelsius(fahrenheit) {
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + ' °C'
}

function display(elementId, value) {
    document.getElementById(elementId).innerHTML = '<b>' + value + '</b>'
}

// function toFahrentheit() {
//     let celsius = prompt('Celsius :')
//     let value = (celsius * 9) / 5 + 32
//     document.getElementById('answer_CtoF').innerHTML = value.toFixed(2) + ' °F'
// }

function toFahrentheit(celsius) {
    let value = (celsius * 9) / 5 + 32
    return value.toFixed(2) + ' °F'
}
alert(toFahrentheit(50))
display('answer_CtoF', toFahrentheit(50))
alert(toCelsius(150))
display('answer_FtoC', toCelsius(150))