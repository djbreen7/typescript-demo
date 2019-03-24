// Basic Union Type
let paddingTop: string | number;
paddingTop = '10px';
paddingTop = 0;

{
    // Useful for making arrays semi-dynamic
    let padding: Array<string | number>;
    padding = ['10px', '10px', 0, 0];
    padding = [0, '10px'];
}

{
    // Note the alternative syntax
    let padding: (string | number)[];
    padding = ['10px', '10px', 0, 0];
    padding = [0, '10px'];
}
