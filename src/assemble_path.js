#!/usr/bin/env node

import * as fs from 'node:fs';
import path from 'path';

const { cwd } = require('node:process');

const assemble_absolute_path = (filepath_first, filepath_second) => {
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

  const assembled_paths = [firstpath, secondpath];

  return assembled_paths;
}

export default assemble_absolute_path;