import CryptoJs from 'crypto-js'
const generateRandomKey = (appKey: string): string => {
  const algo = CryptoJs.algo.SHA256.create()
  algo.update(new Date().getUTCDate().toFixed())
  algo.update(CryptoJs.SHA256(appKey))
  const hash = algo.finalize().toString(CryptoJs.enc.Base64)
  return `base64:${hash}`
}

export default generateRandomKey
