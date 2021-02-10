function only5and3(n) {
    if (n%5 === 0) {
        console.log(n, 5, n%5, true)
        return true
    } else if (n%3 === 0) {
        console.log(n, 3, n%3, true)
        return true
    } else {
        console.log(n, false)
        return false
    }
}

only5and3(33);

/*
examples
note only return true or false
only5and3(14) ➞ true
// 14 = 3*3 + 5
only5and3(25) ➞ true
// 25 = 5+5+5+5+5
only5and3(7) ➞ false
// There exists no path to the target number 7

pseudo code
check if the remainder of argument and 5 is greater than 0
check if the remainder of argument and 3 is greater than 0
create loop to subtract 5 then check for remainder of new argument and 3 is greater than 0
repeat until true/false
*/