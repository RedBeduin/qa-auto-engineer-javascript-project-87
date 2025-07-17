const defaultstringformat = (tree) => {
  let result = ''
  for (const element of tree) {
    if (element.action === 'added') {
      result = `${result}\n  + ${element.key}: ${element.obj}`
    }
    else if (element.action === 'removed') {
      result = `${result}\n  - ${element.key}: ${element.obj}`
    }
    else if (element.action === 'updated') {
      result = `${result}\n  - ${element.key}: ${element.objFirst}\n  + ${element.key}: ${element.objSecond}`
    }
    else if (element.action === 'mapped') {
      result = `${result}\n    ${element.key}: ${element.obj}`
    }
  };
  return `{${result}\n}`
}

export default defaultstringformat
