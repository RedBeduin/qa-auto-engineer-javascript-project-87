import _ from 'lodash'

const generateDifferences = (obj1, obj2) => {
  const obj1Key = Object.keys(obj1)
  const obj2Key = Object.keys(obj2)
  const keys = _.union(obj1Key, obj2Key)
  const result = []

  for (const key of keys) {
    if
    (
      obj1[key] !== obj2[key]
      && _.includes(obj2Key, key)
      && !_.includes(obj1Key, key)
    ) {
      result.push({ key, obj: obj2[key], action: 'added' })
    }
    else if
    (
      obj1[key] !== obj2[key]
      && _.includes(obj1Key, key)
      && !_.includes(obj2Key, key)
    ) {
      result.push({ key, obj: obj1[key], action: 'removed' })
    }
    else if
    (
      obj1[key] !== obj2[key]
      && _.includes(obj1Key, key)
      && _.includes(obj2Key, key)
    ) {
      result.push({ key, obj1: obj1[key], obj2: obj2[key], action: 'updated' })
    }
    else if
    (obj1[key] === obj2[key]) {
      result.push({ key, obj: obj1[key], action: 'mapped' })
    }
  }
  const sortTree = _.sortBy(result, ['key'])
  return sortTree
}

export default generateDifferences
