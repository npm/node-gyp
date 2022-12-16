'use strict'

const log = require('./log')
const execFile = require('child_process').execFile
const path = require('path')

function regGetValue (key, value, addOpts, cb) {
  const outReValue = value.replace(/\W/g, '.')
  const outRe = new RegExp(`^\\s+${outReValue}\\s+REG_\\w+\\s+(\\S.*)$`, 'im')
  const reg = path.join(process.env.SystemRoot, 'System32', 'reg.exe')
  const regArgs = ['query', key, '/v', value].concat(addOpts)

  log.silly('reg', 'running', reg, regArgs)
  const child = execFile(reg, regArgs, { encoding: 'utf8' },
    function (err, stdout, stderr) {
      log.silly('reg', 'reg.exe stdout = %j', stdout)
      if (err || stderr.trim() !== '') {
        log.silly('reg', 'reg.exe err = %j', err && (err.stack || err))
        log.silly('reg', 'reg.exe stderr = %j', stderr)
        return cb(err, stderr)
      }

      const result = outRe.exec(stdout)
      if (!result) {
        log.silly('reg', 'error parsing stdout')
        return cb(new Error('Could not parse output of reg.exe'))
      }
      log.silly('reg', 'found: %j', result[1])
      cb(null, result[1])
    })
  child.stdin.end()
}

function regSearchKeys (keys, value, addOpts, cb) {
  let i = 0
  const search = () => {
    log.silly('reg-search', 'looking for %j in %j', value, keys[i])
    regGetValue(keys[i], value, addOpts, (err, res) => {
      ++i
      if (err && i < keys.length) { return search() }
      cb(err, res)
    })
  }
  search()
}

module.exports = {
  regGetValue,
  regSearchKeys
}
