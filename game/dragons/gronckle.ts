import { Dragon } from "./dragon";
import { Rarity } from "../enums";
import { Fighter } from "~game/interfaces";

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
