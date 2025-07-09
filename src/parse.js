import yaml from 'js-yaml';
import parseJson from 'parse-json';

const parse = ( {data, format} ) => {
  const parsers = {
  json: parseJson(data),
  yaml: yaml.load(data),
  yml: yaml.load(data),
  }
  let parsedfile = parsers[format];
  return parsedfile;
};

export default parse;
