function calculatorBMI(weight, height) {
    let kg = changePoundtoKilo(weight)
    let meter = changeInchtoMeter(height)
    let bmi = (kg / meter * meter).toFixed(2)
    console.log(bmi)
}

function changePoundtoKilo(weight) {
    return weight * 0.453592
}

function changeInchtoMeter(height) {
    return height * 0.0254
}

calculatorBMI(36.5, 39)