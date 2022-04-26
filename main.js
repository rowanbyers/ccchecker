// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];
const valid6 = [4, 5, 5, 6, 7, 3, 7, 5, 8, 6, 8, 9, 9, 8, 5, 5];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];
//console.log(batch)

// Add your functions below:
//let cardArray = valid1
const validateCred = (cardArray) =>{
  const dropArr = cardArray.slice(0,-1)
  //console.log(dropArr)
  const reverseArr = dropArr.reverse()
  //console.log(reverseArr)
  let sum = 0
  for (var i = 0; i < reverseArr.length; i++) {
    let doubleI = reverseArr[i]
    if (i % 2 === 0 || i === 0) {
      doubleI *= 2
      //console.log(doubleI)
    } 
    if (doubleI >= 10) {
      doubleI -= 9
      //console.log(doubleI)
    }
    else if (i % 2 === 1){
      //console.log(doubleI)
    }
    sum += doubleI
  //console.log(sum)  
  } 
  sum += cardArray[cardArray.length - 1]
  if (sum % 10 === 0) {
    return true
  } 
    else {
    return false
  }
};
//validateCred(valid6)
//console.log(validateCred(valid1))
let invalidCardArr = [];
const findInvalidCards = (batchArr) => {
  for (let i = 0; i < batchArr.length; i++) {
    let batchElement = batchArr[i]
    if (validateCred(batchElement) === false) {
      invalidCardArr.push(batchElement)
    } 
  }
}
findInvalidCards(batch)
//console.log(invalidCardArr)
let ccCompanyArr = [];
const idInvalidCardCompanies = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] === 3) {
      if (ccCompanyArr.indexOf("Amex") === -1) 
      {
        ccCompanyArr.push("Amex")
      }   
    } 
    else if (arr[i][0] === 4) { 
      if (ccCompanyArr.indexOf("Visa") === -1) 
      {
        ccCompanyArr.push("Visa")
      }
    }
    else if (arr[i][0] === 5) {
      if (ccCompanyArr.indexOf("Mastercard") === -1) 
      {
        ccCompanyArr.push("Mastercard")
      }
    }
    else if (arr[i][0] === 6) {
      if (ccCompanyArr.indexOf("Discover") === -1) 
      {
        ccCompanyArr.push("Discover")
      }
    }
    else {
      ccCompanyArr.push("Company Not Found")
    }
  }
}

idInvalidCardCompanies(invalidCardArr)
console.log(ccCompanyArr)

//let numString = 4024007136303624

//Array.from(numString); numString.split('')
const stringToArray = (numString) => {
     let srtArr = Array.from(numString)
     //console.log(srtArr)
     let arrayToNumArray = []
      for (var i = 0; i < srtArr.length; i++)
        {
          arrayToNumArray.push(parseInt(srtArr[i],10))
        } 
      console.log(arrayToNumArray)
}  
stringToArray('4024007136303624')


//console.log(stringToArray('4024007136303624'))
//console.log(Array.from('4024007136303624'))


