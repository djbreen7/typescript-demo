type DefinedPrimitive = string | number | boolean | symbol;

let myPrim: DefinedPrimitive = 1;
myPrim = 'string';
myPrim = true;
myPrim = Symbol('MySymbol');
