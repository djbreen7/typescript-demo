import { Rarity } from "@demo/enums";

export abstract class Dragon {
    public name: string;
    
    // Getters and Setters
    private _isAlive: boolean = true;
    get isAlive(): boolean {
        return this._isAlive;
    }
    set isAlive(isAlive: boolean) {
        this._isAlive = isAlive;
    }

    protected abstract rarity: Rarity;
    protected abstract health: number;
    protected abstract strength: number;

    constructor(name: string) {
        this.name = name;
    }
}
