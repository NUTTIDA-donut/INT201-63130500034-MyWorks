function getRandomNumbers() {
    var arr = new Array[5];
    for (i = 0; i < arr.length; i++) {
        arr[i] = parseInt(Math.random() * 100);
    }
    return arr;
}
var randNums = getRandomNumbers();
console.log(randNums);