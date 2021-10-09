//let colours = ["white","black","red","yellow","blue"]

// console.log (colours.length)
// console.log("-----------")

//push
// let a = colours.push("green")
// console.log(colours)
// console.log(a)

// console.log("-----------")

// //pop
// let b = colours.pop()
// console.log(colours)
// console.log(b)

// console.log("-----------")

// //unshift
// let c = colours.unshift("green")
// console.log(colours)
// console.log(c)

// console.log("-----------")

// //shift
// let d = colours.shift()
// console.log(colours)
// console.log(d)

// console.log("-----------")


// let sports = ["cricket","hockey","tennis","chess"]
// console.log(sports.length)

// console.log("-----------")


// //push- add element at end
// let p = sports.push("carrom")
// console.log(sports)
// console.log(p)

// console.log("-----------")

// //pop- remove element from last
// let q = sports.pop()
// console.log(sports)
// console.log(q)

// console.log("-----------")

// //unshift- add element at starting
// let r = sports.unshift("swimming")
// console.log(sports)
// console.log(r)

// console.log("-----------")

// shift- remove element from starting
// let s = sports.shift()
// console.log(sports)
// console.log(s)

//console.log("-----------")


//indexof- to check index of elements in array
//if element is not present in given array then it gives -1 value

// let sports = ["cricket","hockey","tennis","chess"]
// let m = sports.indexOf("cricket")
// console.log(m)

// let n = sports.indexOf("volleyball")
// console.log(n)

// let o = sports.indexOf("hockey")
// console.log(o)

//console.log("-----------")


// //includes- to check given value or word is present in array-----gives boolean value

// let aa = sports.includes("tennis")
// console.log(aa)

// let bb = sports.includes("badminton")
// console.log(bb)

// console.log("-----------")

// //flat- to combine all elements of array in single array

// let cc = [[11,22,33],[44,55,66]]
// console.log(cc[0])
// console.log(cc[1])

// let cd = cc.flat()
// console.log(cd)

// console.log("-----------")

// reverse- to reverse sequence of array

// let dd = [11,22,33,44,55]
// let de = dd.reverse()
// console.log(de)

// console.log("-----------")

//fill-replace value or word in given array

// let ee = [11,22,33,44,55]                                                               //index numbers
// let ef = ee.fill("sham",2,ee.length)      //let ef = ee.fill(value or word to replace,start point,end point)
// console.log(ef)

// console.log("-----------")

// //join- to join elements of array

// let ff = ["cat","bat","hat","mat","rat"]
// let fg = ff.join('-')
// console.log(fg)

// let gg = [11,22,33,44,55,66]
// let gh = gg.join("#")
// console.log(gh)

// console.log("-----------")

//concat- to combine alements of two different arrays

// let hh = [99,88,77]
// let ii = [66,55,44]
// let jj = hh.concat(ii)
// console.log(jj)
// let kk = ii.concat(hh)
// console.log(kk)

// let aaa = []
// let rate = [50,25,88,55,65,77,90]

// for(let i = 0;i<rate.length;i++){
//     let aa = 100 - rate[i]
//     aaa.push(aa)
// }
// console.log(aaa)

// //map
// let aa = rate.map(function (el,index,arr){
//     return 100-el
// })
// console.log(aa)

// console.log('----------')

// let bbb = []
// for(let i = 0;i<rate.length;i++){
//     if (rate[i]>65 ){
//         bbb.push(rate[i])     
//     }
// }
// console.log(bbb)

// //filter
// let bb = rate.filter(function (el,index,arr){
//     return el> 65   
// })
// console.log(bb)

// console.log('----------')

// let ccc = 0
// for(let i = 0;i<rate.length;i++){
// ccc = ccc + rate[i]
// }
// console.log(ccc)

// //reduce
// let cc = rate.reduce(function(acc,el,index,arr){
//     return acc + el
// },0)
// console.log(cc)

// console.log('----------')

// //forEach
// let friends = ['arav','shiv','ram','sham']
// let dd = friends.forEach(function (el,index,arr) {
//     console.log('welcome' +el)
// })
// console.log(dd)




//every some- gives boolean value
//every element should satisfy condition to get true
//sor some, only one element should satisfy condition to get true
//every
// let price = [15,25,45,87,35,65,45]
// let xx = price.every(function(el,index,arr){
//     return el > 50
// })
// console.log(xx)

// let zz = price.every(function(el,index,arr){
//     return el>0
// })
// console.log(zz)

// //some
// let yy = price.some(function(el,index,arr){
//     return el<20
// })
// console.log(yy)

// let oo = price.some(function(el,index,arr){
//     return el<100
// })
// console.log(oo)

// //object- does not store value by index
// let student = {
//     name: "yash",
//     lastName:"pethe",
//     class: 10,
//     rollNo:44,
//     age:16

// }

//  //retrive the value from the object- object name.property name
//  console.log(student.rollNo)
//  console.log(student.lastName)
//  console.log(student["class"])
//  console.log(student["name"])

//  //updating the value
//  student.rollNo = 45
//  console.log(student.rollNo)
//  console.log(student)

//  student.class = 12
//  console.log(student['class'])

//  //adding new property to the object
//  student.gender = "male"
//  console.log(student)

//  student.height = "tall"
//  console.log(student)

//  //deleting the property from the object
//  delete student.height
//  console.log(student)
  
//for loop to the array containing object
let student = [
{
    name:"kiran",
    age:23
},
{
    name:"abhi",
    age:20
},
{
    name:"kush",
    age:30
}
]
//to retrive element in object of certain index value
console.log(student[1].age)
console.log(student[0].name)
console.log(student[2]["name"])
console.log(student[1]["age"])

//to get all elements objects in sequence without curly bracket
for(let i = 0;i<student.length;i++){
   // console.log(student[i]) -----------> this will give as it is object with curly bracket
    let obj = student[i]
    for(parameter in obj){
        console.log(parameter,obj[parameter]) //------------> this will give only property and value without bracket
    }
}

//find - to find object containing certain element
// let pp = student.find(function(el,index,arr){
//     return el.name =="kiran"
// })
// console.log(pp)

// let qq = student.find(function(el,index,arr){
//     return el.age == 30
// })
// console.log(qq)

// let rr = student.find(function(el,index,arr){
//     return el.age == 23
// })
// console.log(rr)

// //findIndex

// let xx = student.findIndex(function(el,index,arr){
//     return el.name == "kush"
// })
// console.log(xx)

// let yy = student.findIndex(function(el,index,arr){
//     return el.age == 23
// })
// console.log(yy)