import {ENVIRONMENT, Environment} from '../enums'
import getAppUrl from './get-app-url'

const getBucketUrl = (
  environment: Environment,
  appKey: string,
  branch: string
): string => {
  if (environment === ENVIRONMENT.LOCAL)
    return `bucket-${appKey}.docker.localhost`
  return `assets-${getAppUrl(environment, appKey, branch)}`
}

export default getBucketUrl
