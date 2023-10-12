/*function stringSplosion(str) {
  let result = ''
  
  for (let i = 0; i < str.length; i++) {        //ez csak szamol, 0-tol a string hosszaig vegig
    result = result + result + str[i]
  }

  return result*/
/*
  let result = ''
  
  for (let i = 0; i < str.length; i++) {        //for loop-ban for loop
    for (let j = 0; j <= i; j++) {
        result += str[j]
    }
    //result = str[0] + (str[0] + str[1]) + (str[0] + str[1] + str[2]) + str
  }

  return result
}

console.log(stringSplosion('Code'))*/


/*function getFirstChars(str, n) {
  let result = ''

  result = str.substring(0, n)    //a 0. indexen levo char-ral kezd es az n. indexen levo char mar nem lesz benne
  //ez metodus, es egy adaton van meghivva, nem ugy hivjuk, mint a normal fuggvenyt

  return result
}

console.log(getFirstChars('Codecool', 5))


let text = 'lorem ipsum dolor et ipsum Ipsum ipsum'

let newText = text.toLowerCase().replaceAll('ipsum', 'kismacska')   //a text-et kisbetusse teszi es minden ipsum-ot kismacskaval helyettesit be

//console.log(newText.repeat(3).toUpperCase())    //a newText-et 3x megismetelve irja ki es nagybetusse teszi

console.log(text.includes('kismacska'))   //true-t or false-t ad vissza, megnezi, hogy a megadott szo szerepel-e a text-ben

//let newText = text.replaceAll('ipsum', 'kismacska')   //a text minden ipsum-at kismacskaval helyettesiti be

console.log(newText)

//console.log(text.substring(6, 11))  //a 6-10. indexen levo betuket adja vissza

console.log(text.indexOf('ipsum'))      
console.log(text.indexOf('ipsum', 10))  //a 10. indextol keresi az ipsum szot, az 1. elofordulast adja vissza
console.log(text.indexOf('ipsumm'))     //ez hibat fog visszaadni, amit -1-gyel jelol, mert nincs ilyen szo a text-ben

console.log(text.split(' '))

const obj = {
  firstName: 'Richard',
  lastName: 'Marta',
  getFullName: function() {
    return this.firstName + this.lastName
  }
}

console.log(obj.getFullName())

/*let textArray = text.split(' ')

for (let i = 0; i < textArray.length; i++) {
  if (textArray[i] === 'szar') {
    textArray[i] = '****'
  }
}

console.log(textArray.join(''))*/

/*Math.random()

const numberInString = '12.7'

const number = parseInt(numberInString)     //egesz szamma alakitja a stringkent szereplo 12.7-t
const float = parseFloat(numberInString)    //a tizedesszaot is vissza tudja adni, szamma alakitja a stringkent szereplo 12.7-t

console.log(number)
console.log(float)

let arr = ['egy', 'ketto', 'harom']*/

//arr.push('negy')
/*arr.push('negy', 'ot', 'hat', 'het')

console.log(arr)

const firstElement = arr.shift()
const lastElement = arr.pop()

console.log(firstElement)
console.log(lastElement)

let subArr = arr.slice(2, 6)

let arr = [1, 21, 3, 444, 56, 1000]

console.log(arr.sort())   //abc sorrendbe rendezi a szamokat (1, 1000, 21, 3, 444, 56)
console.log(arr.sort((a, b) => a - b))  //novekvo sorrendbe rendezi a szamokat
console.log(arr.sort((a, b) => b - a))  //csokkeno sorrendbe rendezi a szamokat

let obj = {
  name: 'Angi',
  age: 36,
  favoriteDrink: 'hot chocolate'
}

let objKeys = Object.keys(obj)*/

/*for (let i = 0; i < objKeys.length; i++) {
  console.log(objKeys[i])   //kulcs neve
  console.log(obj[objKeys[i]])  //kulcs erteke
}*/

/*for (const key of Obj.keys(obj)) {  //ugyanazt csinalja, mint a fenti for loop, vegigiteral egy objektumon, megvizsgalja az osszes kulcs erteket
  console.log(key)
  console.log(obj[key])   //inkabb bracket notation-t hasznaljunk, a dot notation helyett
}*/


const arr = ['kutya', 'cica', 'meresi hiba']

/*for (let i = 0; i < arr.length; i++) {    //ugyanazt csinalja mint a kov. 3
  console.log(arr[i])
}*/

/*for (const element of arr) {  //ugyanazt csinalja mint az elobbi for loop
  console.log(element)
}*/

/*arr.forEach(function(element) {   //ugyanazt csinalja, mint az elozo for...of loop
  console.log(element)
})*/

//arr.forEach(function(element) => console.log(element))    //ugyanazt csinalja mint az elozo 3

/*const newNumbers = []

numbers.forEach(function (number) {   //atnezni, hianyos!!!
  let newNumber = number * 2
  console.log(newNumber)
  newNumbers.push(newNumber)
})

console.log(newNumbers)*/

const mapResult = numbers.map((number) => number * 2)

console.log(numbers)
console.log(mapResult)

