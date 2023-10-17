import {Enum} from '../types'

export const APP_GROUP = {
  TRUSTUP_IO: 'trustup-io',
  TRUSTUP_PRO: 'trustup-pro',
  WORKSITE: 'worksite',
  TRUSTUP_BE: 'trustup-be'
} as const

export type AppGroup = Enum<typeof APP_GROUP>
