let num = prompt('Enter the n\'th number: ')
let result = 1.00
for(let i=2; i<=num; i++) {
    result += parseFloat(1) / i
}
console.log('Harmonic is:' +result)