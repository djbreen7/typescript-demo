export interface Fighter {
    name: string;
    attack(target: Fighter);
    takeDamage(damage: number);
}
