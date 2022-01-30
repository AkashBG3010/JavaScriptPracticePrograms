console.log('The Coin is Flipped!')
let tailCount = 0
let headCount = 0

while (headCount != 11 || tailCount != 11) {
    if(headCount<11 || tailCount<11) {

        let num = (Math.random())
        if (num < 0.5) {
            console.log('The result is "Tail"')
            tailCount++
        }
        else {
            console.log('The result is "Head"')
            headCount++
        }
    }
    else {
        break
    }
}
if (headCount == 11) {
    console.log('Head reached 11 iterations')
}
else {
    console.log('Tail reached 11 iterations')
}