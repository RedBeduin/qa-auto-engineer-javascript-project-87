import * as fs from 'node:fs'
import gendiff from '../src'

const getFixturePathNew = path => new URL(path, import.meta.url)
const readFile = filename => fs.readFileSync(getFixturePathNew(filename), 'utf-8')

const pathJsonFirst = './__fixtures__/test-1.json'
const pathJsonSecond = './__fixtures__/test-2.json'
const yamlFirst = './__fixtures__/test-1.yml'
const yamlSecond = './__fixtures__/test-2.yml'
const pathResult = '../__fixtures__/stylish-result.txt'
const pathResultPlain = '../__fixtures__/plain-result.txt'
const pathResultJson = '../__fixtures__/json-result.txt'

test.each([
  { fileFirst: pathJsonFirst, fileSecond: pathJsonSecond, result: readFile(pathResult) },
  { fileFirst: yamlFirst, fileSecond: yamlSecond, result: readFile(pathResult) },
])(`checkDefaultFormat`, ({ fileFirst, fileSecond, result }) => {
  expect(gendiff(fileFirst, fileSecond)).toEqual(result)
})

test.each([
  { fileFirst: pathJsonFirst, fileSecond: pathJsonSecond, result: readFile(pathResultPlain) },
  { fileFirst: yamlFirst, fileSecond: yamlSecond, result: readFile(pathResultPlain) },
])(`checkPlainFormat`, ({ fileFirst, fileSecond, result }) => {
  expect(gendiff(fileFirst, fileSecond, 'plain')).toEqual(result)
})

test.each([
  { fileFirst: pathJsonFirst, fileSecond: pathJsonSecond, result: readFile(pathResultJson) },
  { fileFirst: yamlFirst, fileSecond: yamlSecond, result: readFile(pathResultJson) },
])(`checkJsonFormat`, ({ fileFirst, fileSecond, result }) => {
  expect(gendiff(fileFirst, fileSecond, 'json')).toEqual(result)
})
