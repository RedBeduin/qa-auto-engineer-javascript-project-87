#!/usr/bin/env node
const { program } = require('commander');

const help_text = '\n  Usage: gendiff [options] <filepath1> <filepath2>\n\n  Compares two configuration files and show a difference.\n\n  Options:\n    -V, --version        output the version number\n    -h, --help           output usage information\n    -f, --format <type>  output format';

const command_help = (help_message) => 
{
  console.log(help_text);
};
program
  .option('-h, --help'); // описание можно скопировать из переменной help_text

program.parse(process.argv);        

const options = program.opts();
const { help_message } = options; 

command_help(help_message);
