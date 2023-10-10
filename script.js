let var1 = 10;
let var2 = 15;

let a = 33;
let b = 64;

let l = 45;
let m = 98;

let str1 = 'kis'
let str2 = 'macska'

/*console.log(x + y)  //ezt ki lehet torolni, ez folosleges, mert a myFunc ezt szamolja ki
console.log(a + b)
console.log(l + m)*/

function myFunc(x, y) {     //a function letrehozasanal a zarojelben levo dolgok neve parameter
    console.log(x + y)
}

myFunc(var1, var2)  //a function +hivasanal a zarojelben levo dolgok neve argument
myFunc(l, m)
myFunc(str1, str2)

function multiplyThreeNumbers(x, y, z) {
    let result = x * y * z              //ez a functionon kivul nem elerheto
    return result
}

let result = multiplyThreeNumbers(1, 2, 3)   //functionon kivul letrehozott valtozo/variable
console.log(result)

let data = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
]

//console.log(data[0][0])         //ez az 1. array 1. szamat irja ki

let sumOfNumbers = 0

for (let i = 0; i < data.length; i++) {     //for loop-pal megy vegig a data variable arrayen
    let result = multiplyThreeNumbers(data[i][0], data[i][1], data[i][2])
        sumOfNumbers += result             //a kapott erteket hozzaadom a sumOfNumbershoz
}

function computeData(dataToCompute) {
    let sum = 0

    for (let i = 0; i < dataToCompute.length; i++) {
        let result = multiplyThreeNumbers(dataToCompute[i][0], dataToCompute[i][1], dataToCompute[i][2])
        sum += result
    }

    return sum
}

console.log(computeData(data))
