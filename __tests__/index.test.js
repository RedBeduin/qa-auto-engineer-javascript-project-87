import * as fs from 'node:fs'
import gendiff from '../src'

const getFixturePath = path => new URL(path, import.meta.url)
const readFile = filename => fs.readFileSync(getFixturePath(filename), 'utf-8')

const tests = ['json', 'yml']
const expectedJson = readFile('json-result.txt')
const expectedPlain = readFile('plain-result.txt')
const expectedStylish = readFile('stylish-result.txt')

test.each(tests)('format %s', (format) => {
  const filepath1 = getFixturePath(`file1.${format}`)
  const filepath2 = getFixturePath(`file2.${format}`)

  expect(gendiff(filepath1, filepath2)).toBe(expectedStylish)
  expect(gendiff(filepath1, filepath2, 'stylish')).toBe(expectedStylish)
  expect(gendiff(filepath1, filepath2, 'json')).toBe(expectedJson)
  expect(gendiff(filepath1, filepath2, 'plain')).toBe(expectedPlain)
})
