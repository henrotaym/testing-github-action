import {Enum} from '../types'

export const INPUT = {
  APP_KEY: 'app_key',
  GITHUB_BRANCH: 'github_branch'
} as const

export type Input = Enum<typeof INPUT>
