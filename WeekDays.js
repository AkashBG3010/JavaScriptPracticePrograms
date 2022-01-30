week = prompt('Enter a number between 1-7 to konw the day: ')
week = parseInt(week)

switch(week) {
   
    case 1:
    console.log('Entered number is "SUNDAY"')
    break

    case 2:
    console.log('Entered number is "MONDAY"')
    break

    case 3:
    console.log('Entered number is "TUESDAY"')
    break

    case 4:
    console.log('Entered number is "WEDNESDAY"')
    break

    case 5:
    console.log('Entered number is "THURSDAY"')
    break

    case 6:
    console.log('Entered number is "FRIDAY"')
    break

    case 7:
    console.log('Entered number is "SATURDAY"')
    break

    default :
    console.log('Invalid!! Please enter a number between 1-7')
    break
}