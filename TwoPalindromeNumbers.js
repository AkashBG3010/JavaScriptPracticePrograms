let firtsNumber = prompt('Enter number1: ')
let secondNumber = prompt('Enter number2: ')

function PalindromeChecker(number) {
    let reverseNumber = number.split('').reverse()
    if (number == reverseNumber.join('')) {
        return true
    }
    else {
        return false
    }
}

if (PalindromeChecker(firtsNumber) && PalindromeChecker(secondNumber)) {
    console.log('The Given Two Numbers are palindrome')
}
else if (PalindromeChecker(firtsNumber) || PalindromeChecker(secondNumber)) {
    console.log('Either number1 or number2 is palindrome')
}
else {
    console.log('The Given Numbers are Not palindrome')
}