const formatStylish = (tree) => {
  let result = ''
  for (const element of tree) {
    if (element.action === 'added') {
      result = `${result}\n  + ${element.key}: ${element.data}`
    }
    else if (element.action === 'removed') {
      result = `${result}\n  - ${element.key}: ${element.data}`
    }
    else if (element.action === 'updated') {
      result = `${result}\n  - ${element.key}: ${element.data1}\n  + ${element.key}: ${element.data2}`
    }
    else if (element.action === 'mapped') {
      result = `${result}\n    ${element.key}: ${element.data}`
    }
  };
  return `{${result}\n}`
}

export default formatStylish
