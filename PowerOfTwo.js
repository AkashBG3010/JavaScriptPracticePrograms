let power = prompt('Enter the highest power required: ')
let lastValue = Math.pow(2, power)

let result = 1
for (let i=1; i<=lastValue; i++) {
    if (result <= lastValue) {
        result *= 2
        console.log(result)
    }
    else {
        break
    }
}