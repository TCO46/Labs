//bai 1
let arr1 = [1,2,4,5,6];
let arr2 = [1,6,8,9,0];

const dupe = arr1.filter(vaule => arr2.includes(vaule))

console.log(dupe)

//bai 2
let arr = [1,54,6,7];

let newArr2 =  arr.map((arr) => {
    return arr += 5
})

console.log(newArr2)
