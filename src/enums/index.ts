import {Enum} from '../types'

export const INPUT = {
  APP_KEY: 'app_key',
  GITHUB_BRANCH: 'github_branch',
  CLOUDFLARE_WORKSITE_ZONE_ID: 'cloudflare_worksite_zone_id',
  CLOUDFLARE_TRUSTUP_IO_ZONE_ID: 'cloudflare_trustup_io_zone_id',
  DOPPLER_SERVICE_TOKEN_PRODUCTION: 'doppler_service_token_production',
  DOPPLER_SERVICE_TOKEN_STAGING: 'doppler_service_token_staging'
} as const

export type Input = Enum<typeof INPUT>

export const ENVIRONMENT = {
  PRODUCTION: 'production',
  DEV: 'dev',
  STAGING: 'staging'
} as const

export type Environment = Enum<typeof ENVIRONMENT>

export const APP_GROUP = {
  TRUSTUP_IO: 'trustup-io',
  WORKSITE: 'worksite'
} as const

export type AppGroup = Enum<typeof APP_GROUP>

export const OUTPUT = {
  DOPPLER_APP_SERVICE_TOKEN: 'doppler_app_service_token',
  TRUSTUP_APP_KEY: 'trustup_app_key',
  SUFFIXED_TRUSTUP_APP_KEY: 'suffixed_trustup_app_key',
  APP_URL: 'app_url',
  APP_KEY: 'app_key',
  APP_ENVIRONMENT: 'app_environment',
  CLOUFLARE_ZONE_ID: 'cloudflare_zone_id'
} as const

export type Output = Enum<typeof OUTPUT>
