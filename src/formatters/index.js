import _ from 'lodash'
import formatPlain from './plain.js'
import formatStylish from './stylish.js'

const formatJSON = tree => JSON.stringify(tree, null, 2)

const formatters = {
  plain: formatPlain,
  json: formatJSON,
  stylish: formatStylish,
}

const formatTree = (tree, type) => {
  if (!_.includes(Object.keys(formatters), type)) {
    return Error(`Unknown type: ${type};`)
  }
  return formatters[type.toLowerCase()](tree)
}

export default formatTree
