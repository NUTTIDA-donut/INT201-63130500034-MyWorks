var dt = new Date()
console.log(dt)

//set interval
let t = 5;
console.log('เหลือเวลาอีก: ');
let wait = () => {
    if (t > 0) {
        console.log(t);
        t--
    } else {
        console.log('Download Now');
        process.exit(1)
    }
}

setInterval(wait, 1000)