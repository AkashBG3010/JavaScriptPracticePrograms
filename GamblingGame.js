console.log('Welcome to the Gambling Game! The game is starting....')
let capital = 100
while (capital>0 && capital<200) {
    let num = (Math.random())
if (num < 0.5) {
    console.log('The gambler looses a bet')
    capital--
}
else {
    console.log('The gambler wins a bet')
    capital++
}
}
if (capital == 0){
    console.log('Gamer has lost all the money. So, Quiting the game!')
}
else {
    console.log('Achieved his goal of 200. So, Quiting the game!')
}