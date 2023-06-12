import getAppGroup from './get-app-group'

const getCloudflareZoneName = (appKey: string): string => {
  const suffix = getAppGroup(appKey)
    .replace(new RegExp('-', 'g'), '_')
    .toUpperCase()
  return `CLOUDFLARE_DNS_ZONE_${suffix}`
}

export default getCloudflareZoneName
