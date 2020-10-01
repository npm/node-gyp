const tap = require('tap')
const tmp = require('tmp')
const fs = require('fs')
const { isNodeGypPackage } = require('../lib')

tap.test('it resolves to true when there are gyp files', async t => {
  const tempDir = tmp.dirSync({unsafeCleanup: true})
  fs.writeFileSync(tempDir.name + '/bindings.gyp', '')
  t.equal(await isNodeGypPackage(tempDir.name), true)
  tempDir.removeCallback()
})

tap.test('it resolves to false when there are gyp files', async t => {
  const tempDir = tmp.dirSync()
  t.equal(await isNodeGypPackage(tempDir.name), false)
  tempDir.removeCallback()
})

tap.test('it resolves to false when there is a gypfile false in the package.json', async t => {
  const tempDir = tmp.dirSync({unsafeCleanup: true})
  fs.writeFileSync(tempDir.name + '/bindings.gyp', '')
  t.equal(await isNodeGypPackage(tempDir.name, {gypfile: false}), false)
  tempDir.removeCallback()
})

tap.test('it resolves to false when there is a custom install script', async t => {
  const tempDir = tmp.dirSync({unsafeCleanup: true})
  fs.writeFileSync(tempDir.name + '/bindings.gyp', '')
  t.equal(await isNodeGypPackage(tempDir.name, {scripts: {install: 'echo 0'}}), false)
  tempDir.removeCallback()
})

tap.test('it resolves to false when there is a custom preinstall script', async t => {
  const tempDir = tmp.dirSync({unsafeCleanup: true})
  fs.writeFileSync(tempDir.name + '/bindings.gyp', '')
  t.equal(await isNodeGypPackage(tempDir.name, {scripts: {preinstall: 'echo 0'}}), false)
  tempDir.removeCallback()
})
