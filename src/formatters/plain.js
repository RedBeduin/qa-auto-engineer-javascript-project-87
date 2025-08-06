const formatPlain = (tree) => {
  const result = tree.filter(
    element => element.type === 'added' || element.type === 'removed' || element.type === 'updated').map(
    (element) => {
      if (element.type === 'added') {
        return `Property '${element.key}' was added with value: ${element.data}`
      }
      else if (element.type === 'removed') {
        return `Property '${element.key}' was removed`
      }
      else if (element.type === 'updated') {
        return `Property '${element.key}' was updated. From ${element.data1} to ${element.data2}`
      }
    }).join('\n')

  return result
}

export default formatPlain
