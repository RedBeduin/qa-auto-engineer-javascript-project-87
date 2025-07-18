import * as fs from 'node:fs'
import gendiff from '../src'

const getFixturePathNew = path => new URL(path, import.meta.url)
const readFile = filename => fs.readFileSync(getFixturePathNew(filename), 'utf-8')

const pathJsonFirst = './__tests__/__fixtures__/ordinary_test_1.json'
const pathJsonSecond = './__tests__/__fixtures__/ordinary_test_2.json'
const yamlFirst = './__tests__/__fixtures__/yaml_test_1.yml'
const yamlSecond = './__tests__/__fixtures__/yaml_test_2.yml'
const pathResult = './__tests__/__fixtures__/raw_result.txt'
const pathResultPlain = './__tests__/__fixtures__/plain_result.txt'
const pathResultJson = './__tests__/__fixtures__/json_result.txt'

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
  expect(gendiff(fileFirst, fileSecond)).toEqual(result)
})

test.each([
  { fileFirst: pathJsonFirst, fileSecond: pathJsonSecond, result: readFile(pathResultJson) },
  { fileFirst: yamlFirst, fileSecond: yamlSecond, result: readFile(pathResultJson) },
])(`checkJsonFormat`, ({ fileFirst, fileSecond, result }) => {
  expect(gendiff(fileFirst, fileSecond)).toEqual(result)
})
