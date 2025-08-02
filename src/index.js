import parse from './parse.js'
import generateDifferences from './generate-differences.js'
import formatTree from './formatters/index.js'
import * as fs from 'node:fs'
import path from 'node:path'

const readFile = (filepath) => {
  filepath = path.resolve(process.cwd(), filepath)
  const data = fs.readFileSync(filepath, 'utf-8').toString()
  const format = path.extname(filepath).slice(1).toLowerCase()
  return parse({ data, format })
}
const gendiff = (filepath1, filepath2, format = 'stylish') => {  
  const tree = generateDifferences(readFile(filepath1), readFile(filepath2))
  return formatTree(tree, format)
}

export default gendiff
