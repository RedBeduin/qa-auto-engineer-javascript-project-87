#!/usr/bin/env node

import * as fs from 'node:fs';
import path from 'path';
import assemble_absolute_path from './assemble_path.js';
import parse from './parse.js';
import diff_tree from './difftree.js';
import diff_format from './formatters/index.js';

const { cwd } = require('node:process');

const gendiff = (filepath_first, filepath_second, format) => {
  
  const filepathfirstassembled = assemble_absolute_path(filepath_first, filepath_second)[0];
  const filepathsecondassembled = assemble_absolute_path(filepath_first, filepath_second)[1];  

  const path_1_parsed = parse(filepathfirstassembled);
  const path_2_parsed = parse(filepathsecondassembled);
  const filetree = diff_tree(path_1_parsed, path_2_parsed);  

  return diff_format(filetree, format);
}

export default gendiff;
