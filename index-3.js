'use strict';

const average = (...args) => args.reduce((sum, elem) => sum + elem, 0)/args.length
console.log(average(1, 2, 3))
