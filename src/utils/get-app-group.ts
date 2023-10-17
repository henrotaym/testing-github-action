import {APP_GROUP, AppGroup} from '../enums'
import isAppInGroup from './is-app-in-group'

const getAppGroup = (appKey: string): AppGroup => {
  if (isAppInGroup(appKey, APP_GROUP.WORKSITE)) return APP_GROUP.WORKSITE
  if (isAppInGroup(appKey, APP_GROUP.TRUSTUP_BE)) return APP_GROUP.TRUSTUP_BE
  if (isAppInGroup(appKey, APP_GROUP.TRUSTUP_PRO)) return APP_GROUP.TRUSTUP_PRO

  return APP_GROUP.TRUSTUP_IO
}

export default getAppGroup
