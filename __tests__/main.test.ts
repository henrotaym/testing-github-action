// import {wait} from '../src/wait'
import * as process from 'process'
import * as cp from 'child_process'
import * as path from 'path'
import {expect, test} from '@jest/globals'

// test('throws invalid number', async () => {
//   const input = parseInt('foo', 10)
//   await expect(wait(input)).rejects.toThrow('milliseconds not a number')
// })

test('test that true is true', () => {
  expect(true).toBe(true)
})

// shows how the runner will run a javascript action with env / stdout protocol
test('test runs', () => {
  process.env['INPUT_APP_KEY'] = 'worksite-subscription'
  process.env['INPUT_GITHUB_BRANCH'] =
    'refs/heads/main'
  process.env['INPUT_CLOUDFLARE_WORKSITE_ZONE_ID'] = 'worksite'
  process.env['INPUT_CLOUDFLARE_TRUSTUP_IO_ZONE_ID'] = 'trustup-io'
  process.env['INPUT_DOPPLER_SERVICE_TOKEN_PRODUCTION'] = 'production-app-token'
  process.env['INPUT_DOPPLER_SERVICE_TOKEN_STAGING'] = 'staging-app-token'

  const np = process.execPath
  const ip = path.join(__dirname, '..', 'lib', 'main.js')
  const options: cp.ExecFileSyncOptions = {
    env: process.env
  }
  console.log(cp.execFileSync(np, [ip], options).toString())
})
