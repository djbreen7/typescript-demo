interface PersonConstructor {
    firstName: string;
    lastName: string;
    age: number | null;
}

class Human {
    firstName: string;
    constructor(firstName: string) {
        this.firstName = firstName        
    }
}

let humanoid = new Humanoid(firstName: 'Daniel');

class Person {
    firstName: string;
    lastName: string;
    age: number | null;

    constructor({ firstName, lastName, age }: Partial<PersonConstructor>) {
        this.firstName = firstName || '';
        this.lastName = lastName || '';
        this.age = age || null;
    }
}

let daniel = new Person({ 
    firstName: 'Daniel', 
    age: 34 });
