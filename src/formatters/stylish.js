const formatStylish = (tree) => {
  const result = tree.map(
    (element) => {
      if (element.type === 'added') {
        return `+ ${element.key}: ${element.data}`
      }
      else if (element.type === 'removed') {
        return `- ${element.key}: ${element.data}`
      }
      else if (element.type === 'updated') {
        return `- ${element.key}: ${element.data1}\n  + ${element.key}: ${element.data2}`
      }
      else if (element.type === 'unchanged') {
        return `  ${element.key}: ${element.data}`
      }
    }).join(`\n  `)
  return `{\n  ${result}\n}`
}

export default formatStylish
