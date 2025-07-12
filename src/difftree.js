import _ from 'lodash';

const diff = (objFirst, objSecond) => {
  const objFirstKey = Object.keys(objFirst);
  const objSecondKey = Object.keys(objSecond);
  const keys = _.union(objFirstKey, objSecondKey);
  const result = [];

  for (const key of keys)
  {
    if 
    (
      objFirst[key] !== objSecond[key]
      && _.includes(objSecondKey, key)
      && !_.includes(objFirstKey, key) 
    )
    {
      result.push
      ({ 
        key, obj: objSecond[key], action: 'added' 
      });
    }
    else if
    (
      objFirst[key] !== objSecond[key]
      && _.includes(objFirstKey, key)   
      && !_.includes(objSecondKey, key)
    ) 
    {
      result.push
      ({ 
        key, obj: objFirst[key], action: 'removed' 
      });
    }
    else if
    (
      objFirst[key] !== objSecond[key]
      && _.includes(objFirstKey, key)
      && _.includes(objSecondKey, key)
    ) 
    {
      result.push
      ({
        key, objFirst: objFirst[key], objSecond: objSecond[key], action: 'updated',
      });
    }
    else if 
    (objFirst[key] === objSecond[key]) 
    {
      result.push({ key, obj: objFirst[key], action: 'mapped' });
    }
  }
  const sortTree = _.sortBy(result, ['key']);
  return sortTree;  
};

export default diff;
