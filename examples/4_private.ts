
class Thing {
    private _doNotChange;
    
    constructor () {
        this._doNotChange = 'DO NOT CHANGE ME';
    }
}

let thing = new Thing();
thing._doNotChange = 'I do wut I want';
