//cau 9
var m = [1,2,3,4,5,6,"hh","9",80,100]

var mSquared = m.filter((element) => {
    return typeof element == 'number'
})

mSquared.forEach(numbers => {
    console.log(Math.pow(numbers, 2))
});

//cau 10
