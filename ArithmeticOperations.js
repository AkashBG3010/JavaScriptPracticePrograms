let a = prompt('Enter the number "a": ')
let b = prompt('Enter the number "b": ')
let c = prompt('Enter the number "c": ')

console.log('1) a + b * c')
console.log('2) a % b + c')
console.log('3) c + a / b')
console.log('4) a * b + c')

let num = prompt('Select an operation from above(1-4): ')
if (num == 1){
    d = ((a + b) * c)
    console.log('The output of the arethmetic operation-1 is: ' +d)
    }
    else if (num == 2){
        e = ((a % b) + c)
        console.log('The output of the arethmetic operation-2 is: '+e)
    }
    else if (num == 3){
        f = ((c + a) / b)
        console.log('The output of the arethmetic operation-3 is: '+f)
    }
    else if (num == 4){
        g = ((a * b) + c)
        console.log('The output of the arethmetic operation-2 is: '+g)
    }
    else { 
        console.log('Please enter the valid operation!!')
    }