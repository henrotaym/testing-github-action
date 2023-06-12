import {ENVIRONMENT, Environment} from '../enums'

const getDevEnvironmentToDeploy = (
  environment: Environment,
  appKeySuffix: string
): string => (environment === ENVIRONMENT.DEV ? appKeySuffix : '')

export default getDevEnvironmentToDeploy
