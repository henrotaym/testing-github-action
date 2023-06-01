import {ENVIRONMENT, Environment} from '../enums'

const getEnvironmentName = (branch: string): Environment => {
  const isMain = branch === 'main'
  if (isMain) return ENVIRONMENT.PRODUCTION
  const isRelease = branch.startsWith('release')
  if (isRelease) return ENVIRONMENT.STAGING
  return ENVIRONMENT.DEV
}

export default getEnvironmentName
