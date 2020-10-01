const util = require('util')
const fs = require('fs')
const readdir = util.promisify(fs.readdir)

async function isNodeGypPackage(path, pkg={}) {
  const {scripts = {}, gypfile} = pkg
  const {preinstall, install} = scripts
  if (preinstall || install || gypfile === false) return false
  const files = await readdir(path)
  return files.some(f => /.*\.gyp$/.test(f))
}

module.exports = {
  isNodeGypPackage,
  defaultGypInstallScript: 'node-gyp rebuild'
}
