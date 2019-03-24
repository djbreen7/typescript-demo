// reuires tsconfig "resolveJsonModule": true
import * as config from './config.json';

const env = 'test';

console.log(config[env].baseUrl); // test.example.com
