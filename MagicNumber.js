console.log('Think a number from the range 1-100. And remember it for a while..!!')
let firstNum= 0,lastNum = 100, actualGussedNum= 0, gussed= 0


while (firstNum <= lastNum && found != 1) {
    let middle = Math.round(firstNum + (lastNum - firstNum) / 2)
    console.log('Enter "1" if this is your number ' +middle)
    console.log('Enter "2" if your number is less than '+middle)
    console.log('Enter "3" if your number is more than '+middle)

    let choice = prompt("Choose the option for your Choice : ")
    switch (choice) {
        case "1":
            actualGussedNum = middle
            gussed = 1
            break

        case "2":
            lastNum = middle - 1
            break

        case "3":
            firstNum = middle + 1
            break
    }
}
if (gussed == 1) {
    console.log('Your choosen number is: ' +actualGussedNum)
}