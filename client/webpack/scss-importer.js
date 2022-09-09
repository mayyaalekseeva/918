'use strict';
const fs = require('fs');
const path = require("path");

module.exports = aliases => {
  function tryAccess(fullPath) {
    try {
      fs.accessSync(fullPath);
      return fullPath;
    } catch (e) {
      return undefined;
    }
  }

  return function scssImporter(url) {
    const alias = Object.keys(aliases).find(element => url.startsWith(element));

    if (!alias) {
      return { file: url };
    }
    
    const normalizedUrl = path.extname(url) ? url : `${url}.scss`;
    const scssPath = normalizedUrl.replace(alias, aliases[alias]);
    const resolved = tryAccess(scssPath) || tryAccess(path.join(path.dirname(scssPath), `_${path.basename(scssPath)}`));
    return { file: resolved || url };

  }
};