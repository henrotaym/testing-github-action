import {AppGroup} from '../enums'

const isAppInGroup = (appKey: string, appGroup: AppGroup): boolean =>
  appKey.startsWith(appGroup)

export default isAppInGroup
