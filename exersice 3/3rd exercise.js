// !=================== Alireza Abbasi ===================! //

//          =========== third problem ============      //


function integerCount(arr,result) {

    if (toString.call(arr) !== "[object Array]")
        return 'please input an array'

    for (let key of arr) {
        if (typeof key === "number" && key % 1 === 0) {
            result += 1;
        }
        if (toString.call(key) === "[object Array]") {
            result = integerCount(key, result)
        }
    }
    return result
}
let arr1 = [2, [5, '3', [1.1, -2 , []]], -3, 0, 2.1, ['foo'], [], [4, [5.1, [6]]]]
console.log('number of integer in array is:', integerCount(arr1,0))


let arr2 = [[[[1.1,2],[]],[]]]
console.log('number of integer in array is:', integerCount(arr2,0))