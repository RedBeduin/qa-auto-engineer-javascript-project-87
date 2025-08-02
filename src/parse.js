import yaml from 'js-yaml'

const parsers = {
  json: JSON.parse,
  yaml: yaml.load,
  yml: yaml.load,
}

const parse = ({ data, format }) => { 
  if (!_.includes(Object.keys(parsers), format)) {
    return Error(`Unknown format: ${format};`)
  }  
  return parsers[format](data)
}

export default parse
