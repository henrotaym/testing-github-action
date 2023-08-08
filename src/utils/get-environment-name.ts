import {ENVIRONMENT, Environment} from '../enums'

const getEnvironmentName = (branch: string): Environment => {
  const isMain = branch === 'main'
  if (isMain) return ENVIRONMENT.PRODUCTION
  const isStaging = branch.startsWith('release') || branch === 'staging'
  if (isStaging) return ENVIRONMENT.STAGING
  const isDev = branch.startsWith('dev')
  if (isDev) return ENVIRONMENT.DEV
  return ENVIRONMENT.LOCAL
}

export default getEnvironmentName
