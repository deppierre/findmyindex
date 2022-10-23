const fs = require('fs');

function readStage(myArray) {
    const operator = Object.keys(myArray).toString()

    if(operator == "$match"){
        console.log("info: $match operator detected")
    }
    if(operator == "$sort"){
        console.log("info: $sort operator detected")
    }
    if(operator == "$group"){
        console.log("info: $group operator detected")
    }

    //test if array in value 
    if(Object.values(myArray))
        return Object.values(myArray)
}

const equality = []
const sort = []
const range = []

const file = fs.readFileSync('input/example.json')
const rawdata = JSON.parse(file)

const { ns } = rawdata
const { command: { pipeline:query } } = rawdata

// query.forEach(element => {
//     const myStage = readStage(element)

//     //infine loop until readStage return false
//     console.log(myStage)
// });

const myArray = []
var number = 0
function getKeys(data) {
    return Object.entries(data).reduce((r, [key, value]) => {
        // console.log(value)
        r.push(key)
        if (typeof value === 'object') r.push(getKeys(value))
        
        if (Array.isArray(value)) {
            number++
            var obj = {};
            obj[number] = key

            myArray.push(obj)
        }
        return r
    }, [])
  }
  
getKeys(query)
console.log(myArray)


console.log(`info:
    - namespace      : ${ns}
    - number step(s) : ${myArray.length}
`)
