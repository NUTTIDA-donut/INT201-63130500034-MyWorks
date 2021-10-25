var repeatString = (str, times) => {
    if (!Number.isInteger(times)) {
        return
    }

    for (i = 0; i < times; i++) {
        console.log(str)
    }
}

repeatString('*', 10)