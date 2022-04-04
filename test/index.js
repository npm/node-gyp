const tap = require('tap')
const fs = require('fs')
const { isNodeGypPackage } = require('..')

tap.test('it resolves to true when there is a binding.gyp file', async t => {
  const tempDir = t.testdir()
  fs.writeFileSync(tempDir + '/binding.gyp', '')
  t.equal(await isNodeGypPackage(tempDir), true)
})

tap.test('it resolves to false when there is a different *.gyp file', async t => {
  const tempDir = t.testdir()
  fs.writeFileSync(tempDir + '/blorpeedorp.gyp', '')
  t.equal(await isNodeGypPackage(tempDir), false)
})

tap.test('it resolves to false when there are gyp files', async t => {
  const tempDir = t.testdir()
  t.equal(await isNodeGypPackage(tempDir), false)
})

tap.test('it works when fs.promises is unavailable', async t => {
  t.doesNotThrow(() => t.mock('../lib', { fs: { ...require('fs'), promises: null } }))
})
