import { Fighter } from '@game/interfaces';
import { Rarity } from '../enums/rarity';

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

export class NightFury extends Dragon implements Fighter {
    readonly rarity: Rarity = Rarity.Rare;
    protected health: number = 100;
    protected strength: number = 10;

    constructor(name: string) {
        super(name);
    }

    attack(target: Fighter): void {
        const damage = Math.floor(Math.random() * Math.floor(this.strength));
        console.log(`${this.name} attacked ${target.name}`);
        target.takeDamage(damage);
    }

    takeDamage(damage: number) {
        console.log(`${this.name} took ${damage} damge...`)
        this.health -= damage;

        if (this.health <= 0) {
            this.isAlive = false;
        }
    }
}

export class Gronckle extends Dragon implements Fighter {
    readonly rarity: Rarity = Rarity.Common;
    protected health: number = 100;
    protected strength: number = 5;

    constructor(name: string) {
        super(name);
    }

    attack(target: Fighter): void {
        const damage = Math.floor(Math.random() * Math.floor(this.strength));
        console.log(`${this.name} attacked ${target.name}`);
        target.takeDamage(damage);
    }

    takeDamage(damage: number) {
        console.log(`${this.name} took ${damage} damage...`);
        this.health -= damage;

        if (this.health <= 0) {
            this.isAlive = false;
        }
    }
}
