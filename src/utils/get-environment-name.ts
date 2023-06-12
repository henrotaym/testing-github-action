import {ENVIRONMENT, Environment} from '../enums'

const getEnvironmentName = (branch: string): Environment => {
  const isMain = branch === 'main'
  if (isMain) return ENVIRONMENT.PRODUCTION
  const isRelease = branch.startsWith('release')
  if (isRelease) return ENVIRONMENT.STAGING
  const isDev = branch.startsWith('dev')
  if (isDev) return ENVIRONMENT.DEV
  return ENVIRONMENT.LOCAL
}

export default getEnvironmentName
