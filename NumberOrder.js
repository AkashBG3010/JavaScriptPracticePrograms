num = prompt('Enter a number to get its order: ')

if (num >0 && num < 10){
console.log('Entered number is in UNIT order')
}
else if (num > 9 && num <100){
    console.log('Entered number is in TEN order')
}
else if (num > 99 && num <1000){
    console.log('Entered number is in HUNDRED order')
}
else if (num > 999 && num <10000){
    console.log('Entered number is in THOUSAND order')
}
else if (num > 9999 && num <100000){
    console.log('Entered number is in TEN-THOUSAND order')
}
else if (num > 99999 && num <1000000){
    console.log('Entered number is in HUNDRED-THOUSAND order')
}
else if (num > 999999 && num <10000000){
    console.log('Entered number is in MILLIONS order')
}
else if (num > 9999999 && num <100000000){
    console.log('Entered number is in TEN-MILLIONS order')
}
else if (num > 9999999 && num <100000000){
    console.log('Entered number is in HUNDRED-MILLIONS order')
}
else {
    console.log('Invalid!! Please enter a number between 0-9')
}