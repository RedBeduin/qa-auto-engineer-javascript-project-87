import _ from 'lodash';
import plain_format from './plainformat.js';
import json_format from './jsonformat.js';
import default_string_format from './defaultstringformat.js';

const formatters = {
    default: default_string_format,
    plain: plain_format,
    json: json_format,
    stylish: default_string_format,
};

const diff_format = (tree, type) => {
    if (type == null || type === 'stylish')
    { return formatters.default(tree); }
    if (!_.includes(Object.keys(formatters), type))
    { return Error(`Unknown type: ${type};`); }
    return formatters[type.toLowerCase()](tree);
};

export default diff_format;
