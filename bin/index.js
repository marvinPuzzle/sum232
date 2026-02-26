#!/usr/bin/env node
import sum from '../index.js'

const n1 = Number(process.argv[2]) || 0;
const n2 = Number(process.argv[3]) || 0;

console.log(sum(n1, n2))