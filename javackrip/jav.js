// var loc ='AVTO BOZOR'
// var info = 'modeli:'
// var model = 'nexia' 
// var mar ='markasi:'
// var markasi ='shevrolet'
// var km ='yurgani:'
// var yurgani =null
// var dv ='dvigateli:'
// var dvh =1.6
// var dvt ='dvegatel turi:'
// var dvegatel ='dons'
// var yoq ='yoqilgisi:'
// var yoql ='metan'


// console.log('\n');
// console.log(loc);
// console.log(info, model);
// console.log(mar, markasi);
// console.log(km, yurgani);
// console.log(dv, dvh);
// console.log(dvt, dvegatel);
// console.log(yoq, yoql);
// console.log(info, model);
// console.log('\n');

// arixmetik amallar

// let a = 2, b = 4

// console.log(b+a);//6
// console.log(b-a);//2
// console.log(b*a);//8
// console.log(b/a);//2
// console.log(b%a);//0
// console.log(b**a);//16
// console.log(a++);//2
// console.log(++a);//4

// console.log('\n result');

// console.log(--b);//3
// console.log(b--);//3
// console.log(b++);//2
// console.log(++b);//4
// console.log(--b);//3

// let a=3, b=6, c
// a=b
// a=a+b
// a+=b
// a-=b
// a%=b
// a*=b
// console.log(b);

// let a=3;

// if(a>0){
//     a++
// }

// else if (a<0) {

//     a=a-2
// }
// console.log(a);

// let a=2
//  switch (a) {
//     case 1:
//         console.log("yomon");
//         break;
//     case 2:
//         console.log("qoniqarsiz");
//         break;
//     case 3:
//         console.log("qoniqarli");
//         break;
//     case 4:
//         console.log("yaxshi");
//         break;
//     case 5:
//         console.log("alo");
//         break;

//     default:
//         console.log("muvjud  emas !!!", a);
//         break;
//  }

// let s=5, b=500;

// switch (s) {
//     case 1:
//         console.log("disimetir:", );
//         break;

//         case 2:
//         console.log("kilogram:", );
//         break;

//         case 3:
//         console.log(("milligram:"), (s*10));
//         break;

//         case 4:
//         console.log("gram:");
//         break;

//         case 5:
//         console.log (("tonna:"), (b*10/1000));
//         break;

//     default:
//         break;
// }
// let a=1, b=9, c=0;

// for(let i=a; i<=b; i++){
//     c=c+1;
//   console.log(i);
// } 
// console.log( c," ta son"); 
// let a=3, b=9, c=0;


// let a=10, b=1000, c;
// for (let i = 0; i <= a; i++) {

//     console.log(i,' kg narxi',b*i);
// }

// let s=1, d=10, y;

// for (let i = s; i <= d; i++ ) {
//     y=y+i

// }
// console.log(y);

/////////////   funktion exspereson

// console.log(yigindi(2,4));

//funktion yigindi(a,b){
//     return a+b;
// }
// console.log(yigindi(10,40));

//funktion declarition

// const kvadrat= funktion(a){
//     return a*a;
// }
// console.log(kvadrat(3));

//arrow funktion
//1
//const kvadraat=(son)=>{
//     return son * son;
//}
// function yigindi(a, b){
//     return a + b
// }
// console.log(yigindi(2, 4));
// const jufttoq = (a) => {
//     return a%2===0;
// }
//     const juftoq = a =>{
//         return a%2 ===0
//     }
// const jufttoq3 = a=> a%2 ===0
// console.log(juftoq4(4) ? 'juft' : 'toq');

//  const kataKichik = (a, b) => {
//      return a>b;
//  }
// console.log(kataKichik(2 > 4) ? "b katta" : 'a katta');
// data = [
//     {
//         age: 24,
//         type: 'dog'
//     },
//     {
//         age: 60,
//         type: 'dog'
//     },
//     {
//         age: 36,
//         type: 'cat'
//     },
// ]
// let a=0;
// for (let i=data[i]; i<3; i++) {
//     if (i=='dog') {
//         a+=age;
//         console.log(a);
//     }

// }

// function addItem() {
//     let input = document.getElementById('newValue')
//     let text = document.getElementById('pText')
//     let i = document.getElementById('index')
//     text.textContent =text.textContent + input.value
//     i.textContent =+i.textContent+1;
//     input.value=""
// }

// function getPost() {
//     fetch("https://jsonpleceholder.tyicode.com/posts") 
//     .then(Response => Response.json())
//     .then(res => {
//         return res; 
//     })  .catch(err => {
//         return [];
//     });
// }


