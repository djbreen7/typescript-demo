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
let anything; // 'any'

// Explicit Types
/**
 * Explicitly typed variables are variables with specified types, with or without being initialized.
 * 
 */

let two: number = 2;
let b: string = 'b';
let falsy: boolean = false;

let character: string;
let boolean: boolean;

// Union types
/**
 * Union types can be used as a limitation on dynamic typing
 * They must be explicit 
 */
let padding: string | number;
padding = '10px';
padding = 0;

/**
 * Arrays can only contain types that that are initially assigned.
 * Union types come in handy for multi-type arrays
 */

 let implicitNumArr = [1,2,3];
 implicitNumArr.push('4');

 let unionArray: Array<string | number> = [1,2,3];
 unionArray.push('4');

// Type Declarations
type DefinedPrimitive = string | number | boolean | symbol;
let myPrim: DefinedPrimitive = 1;
let mySecondPrim: DefinedPrimitive = 'string';
let invalidPrim: DefinedPrimitive = null;

// Intersection Types


