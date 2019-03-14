// class Person {
//     firstName: string;
//     lastName: string;
//     age: number | null;

//     constructor({ firstName = '', lastName = '', age = null }: { firstName?: string, lastName?: string, age?: number | null }) {
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
// }

let daniel = new Person({ firstName: 'Daniel', age: 34 });
console.log(daniel);