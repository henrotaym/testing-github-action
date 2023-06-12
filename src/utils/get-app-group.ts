import {APP_GROUP, AppGroup} from '../enums'
import isAppInGroup from './is-app-in-group'

const getAppGroup = (appKey: string): AppGroup =>
  isAppInGroup(appKey, APP_GROUP.WORKSITE)
    ? APP_GROUP.WORKSITE
    : APP_GROUP.TRUSTUP_IO

export default getAppGroup
