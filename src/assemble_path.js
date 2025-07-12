import * as fs from 'node:fs';
import path from 'node:path';

const assembleAbsolutePath = (filepath) => { 
  if(filepath[0] === '.')
  {filepath = path.resolve(process.cwd(), filepath)}
  
  const format = path.extname(filepath).slice(1).toLowerCase();

  const data = fs.readFileSync(filepath, 'utf-8');

  return {data, format};
}

export default assembleAbsolutePath;
