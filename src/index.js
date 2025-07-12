import assembleAbsolutePath from './assemble_path.js';
import parse from './parse.js';
import diffTree from './difftree.js';
import diff_format from './formatters/index.js';

const gendiff = (filepathFirst, filepathSecond, format) => {
  
  const filepathFirstAssembled = assembleAbsolutePath(filepathFirst);
  const filepathSecondAssembled = assembleAbsolutePath(filepathSecond);  

  const pathFirstParsed = parse(filepathFirstAssembled);
  const pathSecondParsed = parse(filepathSecondAssembled);
  const filetree = diffTree(pathFirstParsed, pathSecondParsed);  

  return diff_format(filetree, format);
}

export default gendiff;
