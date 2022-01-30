console.log('1) Feet to Inch')
console.log('2) Feet to Meter')
console.log('3) Inch to Feet')
console.log('4) Meter to Feet')
operation = prompt('Select a method of conversion from the above list(1-4): ')
operation = parseInt(operation)

switch(operation){

    case 1 :
    feet = prompt('Enter the value in "feet" to be converted: ')
    inch = (feet * 12)
    console.log(+feet+'feet(s) = '+inch+'inch(es)')
    break

    case 2 :
    feet = prompt('Enter the value in "feet" to be converted: ')
    meter = (feet * 0.3048)
    console.log(+feet+'feet(s) = '+meter+'meter(s)')
    break

    case 3 :
    inch = prompt('Enter the value in "inch" to be converted: ')
    feet = (inch * 0.0833333)
    console.log(+inch+'inch(es) = '+feet+'feet(s)')
    break

    case 4 :
    meter = prompt('Enter the value in "meter" to be converted: ')
    feet = (meter * 3.28084)
    console.log(+meter+'meter(s) = '+feet+'feet(s)')
    break

    default :
        console.log('Please select a valid method!!')
}