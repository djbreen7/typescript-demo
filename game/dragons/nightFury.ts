import { Dragon, Rarity } from '@game/dragons';
import { Fighter } from '@game/interfaces';

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
