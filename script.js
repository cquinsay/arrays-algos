var testArr = [6,3,5,1,2,4]
var sum = 0
for(var i=0; i<testArr.length; i++){
    console.log(testArr[i]);
    sum += (testArr[i]);
    console.log(sum);
}

var testArr = [6,3,5,1,2,4]
var newArr = []
for(var i=0; i<testArr.length; i++){
    newArr.push(testArr[i]*i)
}
console.log(newArr);