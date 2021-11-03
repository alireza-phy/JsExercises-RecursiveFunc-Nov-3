// !=================== Alireza Abbasi ===================! //

//          =========== first problem ============      //

const object = {
    d: {
        name: 'ali',
        c: {
            b: {
                id: 31,
                a: {
                    number: 20,
                    str: 'hi'
                }
            }
        }
    }
}

function contain(object,value) {
    for (let key in object) {

        if (object[key] === value) {
            return console.log(true)
        }

        if (typeof object[key] === 'object') {
            return contain(object[key], value)
        }
    }
    return console.log(false)
}

contain(object,'ali')
contain(object,'al')