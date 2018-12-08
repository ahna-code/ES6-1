'use strict';

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const tab = [...grades];
let average = (tab) => tab.reduce((a, b) => a + b) / tab.length;
console.log(average(tab));

