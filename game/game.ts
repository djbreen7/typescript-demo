import { NightFury, Gronckle } from './dragons/';
import { Competitors } from '~game/tuples';

const toothless = new NightFury('Toothless');
const enemy = new Gronckle('Enemy');
const competitors: Competitors = [toothless, enemy];

while (toothless.isAlive && enemy.isAlive) {
    toothless.attack(enemy);
    enemy.attack(toothless);
}

const winner = toothless.isAlive ? toothless : enemy;
console.log(`***`, '\n\n', `${winner.name} wins!!!`);
