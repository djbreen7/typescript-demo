interface PersonConstructor {
    firstName: string;
    lastName: string;
    age: number | null;
}

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
