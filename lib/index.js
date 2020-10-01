const util = require('util')
const {readdir} = require('fs').promises

async function isNodeGypPackage(path) {
  const files = await readdir(path)
  return files.some(f => /.*\.gyp$/.test(f))
}

module.exports = {
  isNodeGypPackage,
  defaultGypInstallScript: 'node-gyp rebuild'
}
