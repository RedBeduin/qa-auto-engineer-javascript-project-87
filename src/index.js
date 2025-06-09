#!/usr/bin/env node

import * as fs from 'node:fs';
import path from 'path';
import diff_tree from './difftree.js';
import diff_format from './formatters/index.js';

const { cwd } = require('node:process');

const gendiff = (filepath_first, filepath_second, format) => {
  if(filepath_first[0] === '.')
  {filepath_first = path.resolve(cwd(), filepath_first)}
  
  if(filepath_second[0] === '.')
  {filepath_second = path.resolve(cwd(), filepath_second)}

  const file1extension = path.extname(filepath_first).slice(1).toLowerCase();
  const file2extension = path.extname(filepath_second).slice(1).toLowerCase();

  const file1 = fs.readFileSync(filepath_first, 'utf-8');
  
  const file2 = fs.readFileSync(filepath_second, 'utf-8');

  const firstpath = {
    file1, file1extension
  };
  
  const secondpath = {
    file2, file2extension
  };
  
  const parse = (data, format) => {
  const parsers =
  {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  }
  return parsers[format](data);
}

  const path_1_parsed = parse(firstpath);
  const path_2_parsed = parse(secondpath);
  const filetree = diff_tree(path_1_parsed, path_2_parsed);  

  return diff_format(filetree, format);
}

export default gendiff;
