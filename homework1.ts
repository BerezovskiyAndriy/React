import {Iuser} from './interfaces/user.interface';

// 2) протипизировать функции:

// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }

const user: Iuser = {name: 'Max', age: 18, gender: 'male'}

// function sum(a, b) {
//     return a + b
// }
function sum(a:number,b:number):number {
    return a + b
}

// function showSum(a, b) {
//     console.log(a + b);
// }
function showSum (a:number,b:number):void {
    console.log(a + b);
}

// function incAge(someUser, inc) {
//     someUser.age += inc
//     return someUser
// }
function incAge(someUser: Partial<Iuser>, inc:number):Partial<Iuser> {
    someUser.age += inc
    return someUser
}


console.log(sum(1, 2));
showSum(2,3);
incAge(user, 2);
