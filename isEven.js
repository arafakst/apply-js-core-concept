// console.log(4/2);
// console.log(98/2);

// console.log(83/2);

// console.log(83 % 5);

function isEven(number){
    const remainder = number % 2;
    // console.log(remainder);
    if(remainder === 0){
        // console.log('Number is even')
        return true;
    }
    else{
        // console.log('Number is odd')
        return false;
    }
}

const myNumber = isEven(303);
console.log(myNumber);
const herNumber = isEven(1280);
console.log(herNumber);