#!/usr/bin/env node

const yargs = require('./config/yargs');
const manager = require('./commands');

yargs(manager);
