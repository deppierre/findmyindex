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
    
    return false
}

const equality = []
const sort = []
const range = []

const file = fs.readFileSync('input/example.json')
const rawdata = JSON.parse(file)

const { ns } = rawdata
const { command: { pipeline:query } } = rawdata

console.log(`info:
    - namespace      : ${ns}
    - number step(s) : ${query.length}
`)

query.forEach(element => {
    const myStage = readStage(element)

    //infine loop until readStage return false
    console.log(myStage)
});
