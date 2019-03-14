// reuires tsconfig 'resolveJsonModule
import * as config from './config.json';

const env = 'test';

console.log(config[env].baseUrl);