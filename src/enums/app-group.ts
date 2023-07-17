import {Enum} from '../types'

export const APP_GROUP = {
  TRUSTUP_IO: 'trustup-io',
  WORKSITE: 'worksite',
  TRUSTUP_BE: 'trustup-be'
} as const

export type AppGroup = Enum<typeof APP_GROUP>
