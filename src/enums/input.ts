import {Enum} from '../types'

export const INPUT = {
  APP_KEY: 'app_key',
  GITHUB_BRANCH: 'github_branch'
  // CLOUDFLARE_WORKSITE_ZONE_ID: 'cloudflare_worksite_zone_id',
  // CLOUDFLARE_TRUSTUP_IO_ZONE_ID: 'cloudflare_trustup_io_zone_id',
  // DOPPLER_SERVICE_TOKEN_PRODUCTION: 'doppler_service_token_production',
  // DOPPLER_SERVICE_TOKEN_STAGING: 'doppler_service_token_staging'
} as const

export type Input = Enum<typeof INPUT>
