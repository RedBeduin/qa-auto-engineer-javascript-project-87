#!/usr/bin/env node

import * as fs from 'node:fs';
import path from 'path';

const parse = (data, format) => {
  const parsers =
  {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  }
  return parsers[format](data);
}

export default parse;