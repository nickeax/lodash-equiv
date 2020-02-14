// Break an array into the number of chunks specified
let arrTest = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let createdArrs = [];

function chunk(arr, num) {
  tmp = [];
  let arraySize = arr.length;
  let placeHolder = i = 0;
  let isComplete = false;

  while(!isComplete) {
    let tmpToGet = 0;
    tmpToGet = arraySize - placeHolder > num ? num : arraySize - placeHolder;
    if(tmpToGet < num) isComplete = true; 
    
    let tmpArr = arr.slice(placeHolder, tmpToGet + placeHolder);
    createdArrs.push(tmpArr);
    placeHolder += num;
  }
}

chunk(arrTest, 5);

createdArrs.forEach(x => {
  console.table(x);
})
// created by Nick Fletcher 14-Feb-2020
