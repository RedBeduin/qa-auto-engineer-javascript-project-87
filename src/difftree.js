import _ from 'lodash';

const diff = (obj1, obj2) => {
    const obj_1_key = Object.keys(obj1);
    const obj_2_key = Object.keys(obj2);
    const keys = _.union(obj_1_key, obj_2_key);
    const result = [];

for (const key of keys)
{
    if 
    (
      obj1[key] !== obj2[key]
      && _.includes(obj_2_key, key)
      && !_.includes(obj_1_key, key) 
    )
    {
      result.push
      ({ 
        key, obj: obj2[key], action: 'added' 
      });
    }
    else if
    (
      obj1[key] !== obj2[key]
      && _.includes(obj_1_key, key)   
      && !_.includes(obj_2_key, key)
    ) 
    {
      result.push
      ({ 
        key, obj: obj1[key], action: 'removed' 
      });
    }
    else if
    (
      obj1[key] !== obj2[key]
      && _.includes(obj_1_key, key)
      && _.includes(obj_2_key, key)
    ) 
    {
      result.push
      ({
        key, obj1: obj1[key], obj2: obj2[key], action: 'updated',
      });
    }
    else if 
    (obj1[key] === obj2[key]) 
    {
        result.push({ key, obj: obj1[key], action: 'mapped' });
    }
  }
  const sortTree = _.sortBy(result, ['key']);
  return sortTree;  
};

export default diff;
