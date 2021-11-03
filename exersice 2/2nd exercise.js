// !=================== Alireza Abbasi ===================! //

//          =========== second problem ============      //

function power (baseNum,powNum) {
    if (typeof powNum !== 'number' || typeof baseNum !== 'number')
       return 'please input base and power as a number'
    if (powNum < 0 || powNum % 1 !== 0)
        return 'please input a positive integer for powNum'
    if (powNum === 0)
        return 1
    return power(baseNum,powNum-1)*baseNum
}

console.log(power('a',2))

console.log(power(1,-1))

console.log(power(-2.5,4))

console.log(power(3,0))