const getAppKeySuffix = (appKey: string, suffixedAppKey: string): string => {
  const isSame = appKey === suffixedAppKey
  return isSame ? '' : suffixedAppKey.replace(`${appKey}-`, '')
}

export default getAppKeySuffix
