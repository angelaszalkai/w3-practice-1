function stringSplosion(str) {
  /*let result = ''
  
  for (let i = 0; i < str.length; i++) {        //ez csak szamol, 0-tol a string hosszaig vegig
    result = result + result + str[i]
  }

  return result*/

  let result = ''
  
  for (let i = 0; i < str.length; i++) {        //for loop-ban for loop
    for (let j = 0; j <= i; j++) {
        result += str[j]
    }
    //result = str[0] + (str[0] + str[1]) + (str[0] + str[1] + str[2]) + str
  }

  return result
}

console.log(stringSplosion('Code'))