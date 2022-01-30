year = prompt('Enter a year to check if it is a Leap Year: ')

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    console.log(year+ ' is a leap year')
}
else {
    console.log(year+ ' is not a leap year')
}