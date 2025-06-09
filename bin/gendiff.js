#! /usr/bin/env node

import {Command} from 'commander';
import gendiff from '../src/index.js';

const help_text = '\n  Usage: gendiff [options] <filepath_first> <filepath_second>\n\n  Compares two configuration files and show a difference.\n\n  Options:\n    -V, --version        output the version number\n    -h, --help           output usage information\n    -f, --format <type>  output format';

const program = new Command();
program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.8.0')
  .helpOption('-h, --help', help_text)
  .option('-f, --format <type>', 'output format')
  .arguments('<filepath_first> <filepath_second>')
  .action((filepath_first, filepath_second, options) => {
    const tree = gendiff(filepath_first, filepath_second, options.format);
    console.log(tree);
  });
program.parse();
