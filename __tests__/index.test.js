import * as fs from 'node:fs'
import gendiff from '../src'

const getFixturePath = fixtureFileName => new URL(`../__fixtures__/${fixtureFileName}`, import.meta.url)
const readFile = fileName => fs.readFileSync(getFixturePath(fileName), 'utf-8')
const getFileToGenerateDifferencesFixturePath = fixtureFileName => `./__fixtures__/${fixtureFileName}`

const tests = ['json', 'yml']
const expectedJson = readFile('json-result.txt')
const expectedPlain = readFile('plain-result.txt')
const expectedStylish = readFile('stylish-result.txt')

test.each(tests)('format %s', (format) => {
  const filepath1 = getFileToGenerateDifferencesFixturePath(`test-1.${format}`)
  const filepath2 = getFileToGenerateDifferencesFixturePath(`test-2.${format}`)

  expect(gendiff(filepath1, filepath2)).toBe(expectedStylish)
  expect(gendiff(filepath1, filepath2, 'stylish')).toBe(expectedStylish)
  expect(gendiff(filepath1, filepath2, 'json')).toBe(expectedJson)
  expect(gendiff(filepath1, filepath2, 'plain')).toBe(expectedPlain)
})
