const myNums = [1, 2, 3]

// const myTotal = myNums.reduce( function (acc,currVal) {
//     console.log(`acc: ${acc}, currVal: ${currVal}`);
//     return acc + currVal
// }, 0)


// const myTotal = myNums.reduce( (acc,currVal) => {
//     return acc + currVal
// }, 0);
log
// console.log(myTotal);
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

const courses = [
    {
        courseName: "Python",
        coursePrice: 2999
    },
    {
        courseName: "Java",
        coursePrice: 3999
    },
    {
        courseName: "React",
        coursePrice: 6999
    },
    {
        courseName: "DataScience",
        coursePrice: 12999
    }
]

const Total = courses.reduce( (acc,item) => acc + item.coursePrice, 0)

console.log(Total);