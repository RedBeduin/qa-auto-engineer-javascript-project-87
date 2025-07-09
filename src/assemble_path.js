/* eslint-disable */

import * as fs from 'node:fs';
import path from 'node:path';

const assemble_absolute_path = (filepath_first, filepath_second) => {
  let filepath1 = filepath_first; 
  if(filepath_first[0] === '.')
  {filepath1 = path.resolve(process.cwd(), filepath_first)}
  
  let filepath2 = filepath_second;
  if(filepath_second[0] === '.')
  {filepath2 = path.resolve(process.cwd(), filepath_second)}

  const file1extension = path.extname(filepath1).slice(1).toLowerCase();
  const file2extension = path.extname(filepath2).slice(1).toLowerCase();

  const file1 = fs.readFileSync(filepath1, 'utf8');
  const file2 = fs.readFileSync(filepath2, 'utf8');

  const assembled_paths = [{file1, file1extension}, {file2, file2extension}];
  return assembled_paths;
}

export default assemble_absolute_path;

/* eslint-enable */