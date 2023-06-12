import {APP_GROUP, ENVIRONMENT, Environment} from '../enums'
import getShortBranchName from './get-short-branch-name'
import isAppInGroup from './is-app-in-group'

const getAppUrl = (
  environment: Environment,
  appKey: string,
  branch: string
): string => {
  const urlPieces = getUrlPieces(appKey)
  if (environment === ENVIRONMENT.LOCAL) return `${appKey}.docker.localhost`
  if (environment === ENVIRONMENT.DEV) {
    const branchName = getShortBranchName(branch)
    urlPieces.unshift(branchName.replace('dev-', ''), 'dev')
  }
  if (environment === ENVIRONMENT.STAGING) urlPieces.unshift('staging')

  return urlPieces.join('.')
}

const getUrlPieces = (appKey: string): string[] => {
  const isWorksite = isAppInGroup(appKey, APP_GROUP.WORKSITE)
  const raw = appKey.split('-').reverse()
  // Adding "eu" extension since worksite app do not include it.
  if (isWorksite) raw.splice(1, 0, 'eu')
  const extension = raw.splice(-2).reverse()
  return [...raw, ...extension]
}

export default getAppUrl
