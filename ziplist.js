//E27 WOD

function ziplist(listOne, listTwo){
  let i = 0;
  let result  = [];
  for(i =0; i<listOne.length; i++){
    result.push(listOne[i]);
    result.push(listTwo[i]);
  }
  return result;
}

function zipListTheSimpleWay(listOne, listTwo){

  let merged = _.union(listOne, listTwo);
  return merged;
}

let letters = ['a','b','c'];
let numbers = [1,2,3];
console.log(ziplist(letters, numbers));
console.log(zipListTheSimpleWay(letters, numbers));
//couldn't get it to return in order