//E27 WOD
function ziplist(listOne, listTwo){
  let result = [];
  for(let i = 0; i<listOne.length; i++){
    result.push(listOne[i]);
    result.push(listTwo[i]);
  }
  return result;
}
function zipListTheSimpleWay(listOne, listTwo){
  let result = _.flatten(_.zip(listOne,listTwo));

  return result;
}
let letters = ['a','b','c'];
let numbers = [1,2,3];

console.log(ziplist(letters, numbers));
console.log(zipListTheSimpleWay(letters, numbers));
