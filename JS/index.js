// console.log('arun sharma hereee ')
// let x =10;
// console.log(x++)
// console.log(name)


//factory function
// function createRectange(length , breadth) {
//     let rectangle = {
//         len: length,
//         bre: breadth,

//         draw(){
//             console.log('draw something...')
//         }
//     }
//     return rectangle;
// }
//constructor function

// function Rectangle(len , bre)
// {
//     this.length = len;
//     this.breadth = bre;
//     this.draw = function()
//     {
//         console.log('draw a rectangle...')
//     }
// }

// let rectObj = new Rectangle(4,5)
// let dest = {...rectObj}


// for(let key in rectObj)
// {
//     console.log(key , rectObj[key])
// }

// let o1 = createRectange(22,33);
// o1.area = 100
// console.log(o1)
// delete o1.area
// console.log(o1)
// console.log(Rectangle.constructor)
// console.log(rectObj.constructor)

// let courses  = [
//     {no:1 , naam:'arun'},
//     {no:2 , naam:'tushar'}
// ]
// console.log(courses[0].no)
// let course = courses.find(function(arg){
//     return arg.naam === 'tushar';
// });
// let c1 = courses.find(arg => arg.naam == 'arun') //arrow function
// console.log(c1)

let arr = [1, 2]
for (let key in arr) { console.log(key) } // it will give the indices in array not values 
for (let key of arr) { console.log(key) }
arr.forEach(val => console.log(val))