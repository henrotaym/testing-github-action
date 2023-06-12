import {Enum} from '../types'

export const OUTPUT = {
  DOPPLER_APP_SERVICE_TOKEN_SECRET: 'doppler_app_service_token_secret',
  TRUSTUP_APP_KEY: 'trustup_app_key',
  TRUSTUP_APP_KEY_SUFFIX: 'trustup_app_key_suffix',
  TRUSTUP_APP_KEY_SUFFIXED: 'trustup_app_key_suffixed',
  DEV_ENVIRONMENT_TO_DEPLOY: 'dev_environment_to_deploy',
  APP_URL: 'app_url',
  APP_ENVIRONMENT: 'app_environment',
  CLOUDFLARE_ZONE_SECRET: 'cloudflare_zone_secret',
  SHOULD_DEPLOY: 'should_deploy'
} as const

export type Output = Enum<typeof OUTPUT>
