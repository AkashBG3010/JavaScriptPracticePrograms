console.log('Enter the date accordingly to be validated: ')

day = prompt('Enter the day(1-31) in a month: ')
month = prompt('Enter the month(1-12): ')
year = prompt('Enter the year: ')

console.log('Enterded date is: ' +day+':'+month+':'+year)
console.log('Validating for the given condition.....')

if (month<3 || month>6) 
	console.log('Result is: "False"') 
else if((date<20 && month==3) || (date>20 && month==6)) 
	console.log('Result is: "False"')
else
    console.log('Result is: "True"')