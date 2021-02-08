const tap = require('tap')
const tmp = require('tmp')
const fs = require('fs')
const { isNodeGypPackage } = require('../lib')
const requireInject = require('require-inject')

tap.test('it resolves to true when there is a binding.gyp file', async t => {
  const tempDir = tmp.dirSync({unsafeCleanup: true})
  fs.writeFileSync(tempDir.name + '/binding.gyp', '')
  t.equal(await isNodeGypPackage(tempDir.name), true)
  tempDir.removeCallback()
})

tap.test('it resolves to false when there is a different *.gyp file', async t => {
  const tempDir = tmp.dirSync({unsafeCleanup: true})
  fs.writeFileSync(tempDir.name + '/blorpeedorp.gyp', '')
  t.equal(await isNodeGypPackage(tempDir.name), false)
  tempDir.removeCallback()
})

tap.test('it resolves to false when there are gyp files', async t => {
  const tempDir = tmp.dirSync()
  t.equal(await isNodeGypPackage(tempDir.name), false)
  tempDir.removeCallback()
})

tap.test('it works when fs.promises is unavailable', async t => {
  t.doesNotThrow(() => requireInject('../lib', { fs: { ...require('fs'), promises: null }}))
})
