import _ from 'lodash'

const generateDifferences = (data1, data2) => {
  const keys1 = Object.keys(data1)
  const keys2 = Object.keys(data2)
  const keys = _.union(keys1, keys2)

  return _.sortBy(keys.map((key) => {
    if (!_.includes(keys1, key)) {
      return { key, data: data2[key], action: 'added' }
    }

    if (!_.includes(keys2, key)) {
      return { key, data: data1[key], action: 'removed' }
    }

    if (data1[key] !== data2[key]) {
      return { key, data1: data1[key], data2: data2[key], action: 'updated' }
    }

    return { key, data: data1[key], action: 'unchanged' }
  }), ['key'])
}

export default generateDifferences
