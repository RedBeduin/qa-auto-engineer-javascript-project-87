const formatStylish = (tree) => {
  const result = tree.filter(
    element => element.action === 'added' || element.action === 'removed' || element.action === 'updated' || element.action === 'unchanged').map(
    (element) => {
      if (element.action === 'added') {
        return `+ ${element.key}: ${element.data}`
      }
      else if (element.action === 'removed') {
        return `- ${element.key}: ${element.data}`
      }
      else if (element.action === 'updated') {
        return `- ${element.key}: ${element.data1}\n  + ${element.key}: ${element.data2}`
      }
      else if (element.action === 'unchanged') {
        return `  ${element.key}: ${element.data}`
      }
    }).join(`\n  `)
  return `{\n  ${result}\n}`
}

export default formatStylish
