// Implicit Types
/**
 * Implicitly typed variables take on the type relative to the value that they're assigned with NO type annotation.
 * If a variable is decalared without being initialized, it's implicitly assigned 'any'
 * 'any' is generally not preferred
 * TypeScript disallows implicit 'any' by default with the 'noImplicitAny' setting.
 */
let one = 1;
let a = 'a';
let truthy = true;
let anything;
anything = 1;
anything = '';

 let implicitNumArr = [1,2,3];
//  implicitNumArr.push('4');

 let unionArray: Array<string | number> = [1,2,3];
 unionArray.push('4');

