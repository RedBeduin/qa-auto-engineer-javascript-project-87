const formatPlain = (tree) => {
  const result = tree.filter(
    element => element.action === 'added' || element.action === 'removed' || element.action === 'updated').map(
    (element) => {
      if (element.action === 'added') {
        return `Property '${element.key}' was added with value: ${element.data}`
      }
      else if (element.action === 'removed') {
        return `Property '${element.key}' was removed`
      }
      else if (element.action === 'updated') {
        return `Property '${element.key}' was updated. From ${element.data1} to ${element.data2}`
      }
    }).join('\n')

  return result
}

export default formatPlain
