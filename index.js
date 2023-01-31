// These lines make "require" available
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

const process = require('process');
import { franc, francAll } from 'franc';

const args = process.argv.slice(2);
console.table(args);
