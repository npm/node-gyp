'use strict'

const test = require('tap').test
const path = require('path')
const requireInject = require('require-inject')
const configure = requireInject('../lib/configure', {
  'graceful-fs': {
    closeSync: function () { return undefined },
    openSync: function (path) {
      if (readableFiles.some(function (f) { return f === path })) {
        return 0
      } else {
        const error = new Error('ENOENT - not found')
        throw error
      }
    }
  }
})

const dir = path.sep + 'testdir'
const readableFile = 'readable_file'
const anotherReadableFile = 'another_readable_file'
const readableFileInDir = 'somedir' + path.sep + readableFile
const readableFiles = [
  path.resolve(dir, readableFile),
  path.resolve(dir, anotherReadableFile),
  path.resolve(dir, readableFileInDir)
]

test('find accessible - empty array', function (t) {
  t.plan(1)

  const candidates = []
  const found = configure.test.findAccessibleSync('test', dir, candidates)
  t.equal(found, undefined)
})

test('find accessible - single item array, readable', function (t) {
  t.plan(1)

  const candidates = [readableFile]
  const found = configure.test.findAccessibleSync('test', dir, candidates)
  t.equal(found, path.resolve(dir, readableFile))
})

test('find accessible - single item array, readable in subdir', function (t) {
  t.plan(1)

  const candidates = [readableFileInDir]
  const found = configure.test.findAccessibleSync('test', dir, candidates)
  t.equal(found, path.resolve(dir, readableFileInDir))
})

test('find accessible - single item array, unreadable', function (t) {
  t.plan(1)

  const candidates = ['unreadable_file']
  const found = configure.test.findAccessibleSync('test', dir, candidates)
  t.equal(found, undefined)
})

test('find accessible - multi item array, no matches', function (t) {
  t.plan(1)

  const candidates = ['non_existent_file', 'unreadable_file']
  const found = configure.test.findAccessibleSync('test', dir, candidates)
  t.equal(found, undefined)
})

test('find accessible - multi item array, single match', function (t) {
  t.plan(1)

  const candidates = ['non_existent_file', readableFile]
  const found = configure.test.findAccessibleSync('test', dir, candidates)
  t.equal(found, path.resolve(dir, readableFile))
})

test('find accessible - multi item array, return first match', function (t) {
  t.plan(1)

  const candidates = ['non_existent_file', anotherReadableFile, readableFile]
  const found = configure.test.findAccessibleSync('test', dir, candidates)
  t.equal(found, path.resolve(dir, anotherReadableFile))
})
