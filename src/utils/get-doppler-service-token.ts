import * as core from '@actions/core'
import {ENVIRONMENT, Environment, INPUT} from '../enums'

const getDopplerServiceToken = (environment: Environment): string => {
  const isProduction = environment === ENVIRONMENT.PRODUCTION
  // TODO for dev deployment
  // create environment
  // copy staging environment
  // create service token
  const inputKey = isProduction
    ? INPUT.DOPPLER_SERVICE_TOKEN_PRODUCTION
    : INPUT.DOPPLER_SERVICE_TOKEN_STAGING
  return core.getInput(inputKey)
}

export default getDopplerServiceToken
