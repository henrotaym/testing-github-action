import getAppGroup from './get-app-group'

const getCloudflareZoneName = (appKey: string): string => {
  const appGroup = getAppGroup(appKey)
  return `CLOUDFLARE_DNS_ZONE_${appGroup.toUpperCase()}`
}

export default getCloudflareZoneName
