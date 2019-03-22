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