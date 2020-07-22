'use strict';
const END = 40;


let memo = new Map();
memo.set(0,0);
memo.set(1,1);

let fib = n =>{
    if( memo.has(n) ){
        return memo.get(n);
    }else{
        const val = memo.get(n-1)+memo.get(n-2);
        memo.set(n,val);
        return val
    }
}

for( let i=0; i<=END; i++ ){
    console.log(fib(i));
}
// saiki
// let fib = n =>{
//     if(n===0){
//         return 0;
//     }else if(n===1){
//         return 1;
//     }else{
//         return fib(n-1) + fib(n-2);
//     }
// }
// for(let i=0; i<=40; i++){
//     console.log(fib(i));
// }

// let fib = [0,1];
// console.log(fib[0])
// console.log(fib[1])
// for(let i = 2; i<END; i++){
//     fib.push(fib[i-1]+fib[i-2]);
//     console.log(fib[i])
// }

// let fn_2 = 0, fn_1 = 1;
// for(let i=2; i<END; i++ ){
//     let fn = fn_1 + fn_2; 
//     console.log(fn);
//     fn_2 = fn_1;
//     fn_1 = fn; 
// }