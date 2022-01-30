const first = parseInt(prompt('Enter first number: '));
const last = parseInt(prompt('Enter last number: '));

console.log('The prime numbers between '+first+' and '+last+' are: ')
for (let i=first; i<= last; i++) {
    let flag = 0;

    for (let j=2; j<i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}