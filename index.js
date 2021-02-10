function only5and3(n) {
    if (n%5 === 0 || n%3 === 0) {
        console.log(true)
        return true
    } else {
        for (let i = n-5; i > 0; i-=5) {
            if (i%3 === 0) {
                console.log(true)
                return true
            }
        }
        console.log(false)
        return false
    }
}

// passed tests except for Test.assertEquals(only5and3(51), false) and 51/3=17 so should return true NOT false

only5and3(51);

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