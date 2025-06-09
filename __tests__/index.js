import * as fs from 'node:fs';
import gendiff from '../src';

const get_fixture_path_new = (path) => new URL(path, import.meta.url);
const readFile = (filename) => fs.readFileSync(get_fixture_path_new(filename), 'utf-8');

const pathjson_1 = './__tests__/__fixtures__/ordinary_test_1.json';
const pathjson_2 = './__tests__/__fixtures__/ordinary_test_2.json';
const yaml_1 = './__tests__/__fixtures__/yaml_test_1.yml';
const yaml_2 = './__tests__/__fixtures__/yaml_test_2.yml';
const path_result = './__tests__/__fixtures__/raw_result.txt';
const path_result_plain = './__tests__/__fixtures__/plain_result.txt';
const path_result_json = './__tests__/__fixtures__/json_result.txt';

test.each([
    {file_first: pathjson_1, file_second: pathjson_2, result: readFile(path_result)},
    {file_first: yaml_1, file_second: yaml_2, result: readFile(path_result)},  
])(`check_default_format`, ({file_first, file_second, result}) => {
    expect(gendiff(file_first, file_second)).toEqual(result);
});

test.each([
    {file_first: pathjson_1, file_second: pathjson_2, result: readFile(path_result_plain)},
    {file_first: yaml_1, file_second: yaml_2, result: readFile(path_result_plain)},
])(`check_plain_format`, ({file_first, file_second, result}) => {
    expect(gendiff(file_first, file_second)).toEqual(result);
});

test.each([
    {file_first: pathjson_1, file_second: pathjson_2, result: readFile(path_result_json)},
    {file_first: yaml_1, file_second: yaml_2, result: readFile(path_result_json)},
])(`check_json_format`, ({file_first, file_second, result}) => {
    expect(gendiff(file_first, file_second)).toEqual(result);
});
