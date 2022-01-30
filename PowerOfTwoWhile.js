let power = prompt('Enter the number: ')

let result = 1
for (let i=1; i<=256; i++) {
    if (result <= lastValue) {
        result *= 2
        console.log(result)
    }
    else {
        break
    }
}