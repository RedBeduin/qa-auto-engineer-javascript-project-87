import _ from 'lodash'

const generateDifferences = (data1, data2) => {
  const data1Key = Object.keys(data1)
  const data2Key = Object.keys(data2)
  const keys = _.union(data1Key, data2Key)

  return _.sortBy(keys.map((key) => {
    if (data1[key] !== data2[key]
      && !_.includes(data1Key, key)) {
      return { key, data: data2[key], action: 'added' }
    }

    if (data1[key] !== data2[key]
      && !_.includes(data2Key, key)) {
      return { key, data: data1[key], action: 'removed' }
    }

    if (data1[key] !== data2[key]) {
      return { key, data1: data1[key], data2: data2[key], action: 'updated' }
    }

    return { key, data: data1[key], action: 'has not been changed' }
  }), ['key'])
}

export default generateDifferences
