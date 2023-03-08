function isLeapYear(year){
    const remainder = year % 4;
    if(remainder === 0){
        // console.log('Ths Year is Leap Year', year);
        return true;
    }
    else{
        // console.log('This is not leap year',year);
        return false;
    }
}

const isMyYearLeapYear = isLeapYear (1933);
console.log('My Year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear (1989);
console.log('Her Year:', isHerYearLeapYear);