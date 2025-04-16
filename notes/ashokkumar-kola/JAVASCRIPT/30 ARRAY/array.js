// ==== ==== ARRAY ==== ====
// ARRAY USING []
// var emp1 = ['ashika', 'Google24', 'Female', 85000, true]

// for (let i = 0; i<=emp1.length-1; i++){
//     console.log(emp1[i], typeof emp1[i])
// }

// ARRAY USING CONSTRUCTOR
// var arr = new Array()

// FOR IN AND FOR OF
// var arr = [45, 16, 80, 19, 24, 13, 29, 22, 77, 89];
// var arrKeys = arr.keys();
// var arrValues = arr.values();
// var arrEntries = arr.entries();
// console.log(arrKeys, arrValues, arrEntries);
// for (n of arrKeys) {
//   console.log(n);
// }
// for (n of arrValues) {
//   console.log(arrValues[n]);
// }
// for (n of arrEntries) {
//   console.log(n);
// }

// STRING TO ARRAY - split()
// var st = "Apple Mango Grapes"
// var arr = st.split(" ")
// console.log(arr, " : ", typeof arr)

// ARRAY TO STRING - join()
// var arr = ['Apple', 'Mango', 'Banana', 'Grapes']
// var st = arr.join(" ")
// console.log(st, " : ", typeof st)

// ARRAY TO STRING - toString()
// var arr = ['Apple', 'Mango', 'Banana', 'Grapes']
// var st = arr.toString()
// st = st.replaceAll(',', " ")
// console.log(st, " : ", typeof st)

// REVERSE ARRAY - reverse()
// var arr = ['Apple', 'Mango', 'Grapes']
// var revArr = arr.reverse()
// console.log(arr, revArr)

// REVERSE TASK
// var st = `"She sells seashells by the seashore, The shells she sells are surely seashells."`
// var arr = st.split(" ")
// console.log(arr)
// var revArr = arr.reverse()
// console.log(revArr)
// var revStr = revArr.join(" ")
// console.log(revStr)
// var charArr = revStr.split("")
// console.log(charArr)
// var revCharArr = charArr.reverse()
// console.log(revCharArr)

// POP AND PUSH ELEMENTS
// var arr = ['Apple', 'Mango', 'Banana', 'Grapes']
// arr.pop()
// console.log(arr)
// arr.push('Orange', 'Papaya')
// console.log(arr)

// SHIFT AND UNSHIFT
// var arr = ['Apple', 'Mango', 'Banana', 'Grapes']
// arr.shift()
// console.log(arr)
// arr.unshift('Orange', 'Papaya')
// console.log(arr)

// HIGHER ORDER AND CALL BACK FUNCTION
// function callBack(){
//     console.log("This is callback function")
// }
// function higherOrdFun(callBackFun){
//     console.log("This is Higher Order Function")
//     callBackFun()
// }
// higherOrdFun(callBack)

// FILTER
// var arr = [45, 16, 80, 19, 24, 13, 29, 22, 77, 89]
// var filteredArr = arr.filter(filtered)
// function filtered(arr) {
//     return arr>=18 && arr<=60
// }
// console.log(filteredArr)

// var arr = [45, 16, 80, 19, 24, 13, 29, 22, 77, 89]
// var filteredArr = arr.filter(
//     function(arr) {
//         return arr>=18 && arr<=60
//     }
// )
// console.log(filteredArr)

// var arr = [45, 16, 80, 19, 24, 13, 29, 22, 77, 89]
// var filteredArr = arr.filter(
//     (arr) => {
//         return arr>=18 && arr<=60
//     }
// )
// console.log(filteredArr)

// var arr = [45, 16, 80, 19, 24, 13, 29, 22, 77, 89]
// var filteredArr = arr.filter(function(arr){
//     return arr%2 == 0
// })
// console.log(filteredArr)

// var arr = ['apple', 'grapes', 'pineapple', 'mango', 'watermelon', 'red', 'green', 'blue', 'orange']
// var filteredArr = arr.filter(arr => {
//     return arr.length > 5
// })
// console.log(filteredArr)

// MAP
// var arr = [45, 16, 80, 19, 24, 13, 29, 22, 77, 89]
// var mapArr = arr.map(arr=>{
//     return arr%2 == 0
//     // return arr + "24"
//     // return arr + 12
//     // return arr * 2
// })
// console.log(mapArr)

// FIND AND FIND-INDEX
// // FIND
// var arr = [45, 16, 80, 19, 24, 13, 29, 22, 77, 89]
// var foundEle = arr.find(arr=>{
//     return arr == 24
// })
// console.log(foundEle)

// // FIND-INDEX
// var foundIdx = arr.findIndex(arr=>{
//     return arr == 24
// })
// console.log(foundIdx)

// EVERY AND SOME
// var arr = [2, 4, 6, 8, 10]

// // EVERY
// var everyArr = arr.every(arr=>{
//     return arr%2==0
// })
// console.log(everyArr)

// // SOME
// var someArr = arr.every(arr=>{
//     return arr%2==0
// })
// console.log(someArr)

// SORT
// var arr = [45, 16, 1, 80, 19, 24, 2, 13, 29, 22, 5, 77, 89]

// // SORT ALPHABETICALLY
// var sortedArr = arr.sort()
// console.log(sortedArr)

// // SORT NUMERICALLY
// var sortedArr = arr.sort((a, b)=>{
//     // return a-b   // ASCE
//     return b-a   // DSC
// })
// console.log(sortedArr)

// FILL
//  var arr = [1, 2, 3, 4, 5, 6, 7, 8]
//  var filledArr = arr.fill('Happy', 2, 5)
//  console.log(filledArr)

// var arr = [1, 2, 5, 9, 51, 14, 27, 36, 221, 553, 101, 102]
// var filledArr = arr.fill('red', 0, 3)
// var filledArr2 = arr.fill('blue', 6, 9)
// var filledArr3 = arr.fill('orange', -1)
// console.log(filledArr3)

// SLICE
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var slicedArr = arr.slice(2, 6)
// console.log(slicedArr)

// SPLICE
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// var splicedArr = arr.splice(2, 3)  // START IDX, COUNT
// console.log(splicedArr)
// console.log(arr)

// FLAT
// var arr = [1, 2, 3, [4, 5, 6, [7, 8, [9, 0, [10, 11, [12, [13]]]]]]]
// var flattedArr = arr.flat(6)
// console.log(flattedArr)
// var flattedArr = arr.flat(Infinity)
// console.log(flattedArr)

//
