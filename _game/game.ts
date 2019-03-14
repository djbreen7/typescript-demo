import { NightFury } from './dragons/dragon';
import { Competitors } from './tuples/competitors';

const toothless = new NightFury('Toothless');
const enemy = new NightFury('Enemy');
const competitors: Competitors = [toothless, enemy];

while (toothless.isAlive && enemy.isAlive) {
    toothless.attack(enemy);
    enemy.attack(toothless);
}

const winner = toothless.isAlive ? toothless : enemy;
console.log(`***`, '\n\n', `${winner.name} wins!!!`);
