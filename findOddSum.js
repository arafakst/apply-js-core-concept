function getSumOfAnArray(numbers){
    let sum  = 0;
    for(let i = 0; i < numbers.length; i++){
        const index = i;
    const element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
    }
    return sum;
    
}

const myNumbers = [12, 65, 34, 67, 87,91];
getSumOfAnArray(myNumbers);