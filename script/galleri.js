// Hedvig

import { data } from './prosjektlist_test.js';

console.log(data)


const sortDataByDate = data.sort((a,b) => b.year - a.year);

console.log(sortDataByDate);