import * as core from '@actions/core'
import {APP_GROUP, INPUT} from '../enums'
import isAppInGroup from './is-app-in-group'

const getCloudflareZoneId = (appKey: string): string => {
  const isWorksite = isAppInGroup(appKey, APP_GROUP.WORKSITE)
  const inputKey = isWorksite
    ? INPUT.CLOUDFLARE_WORKSITE_ZONE_ID
    : INPUT.CLOUDFLARE_TRUSTUP_IO_ZONE_ID
  return core.getInput(inputKey)
}

export default getCloudflareZoneId
