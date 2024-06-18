let a = [10,20,"mohit","rohit",true,false];
// console.log(a)                    //print array values
// console.log(typeof a)            //array(object)

// for(let i=0;i<a.length;i+=2)
//     {                                  //in this method we jump the values
//         console.log(a[i])     
//     }



// Method --{for of and for in}          //same as for loop but we cant jump the values, its print the all values

// for(let i of a){
//     console.log(i)   //print the values of an array
// }

// for(let i in a){
//     console.log(i)  //print the indexing 
// }

for(let i in a){
    console.log(a[i])   //print the values of an array
}
