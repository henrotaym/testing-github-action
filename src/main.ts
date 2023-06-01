import * as core from '@actions/core'
import {INPUT, OUTPUT} from './enums'
import {
  generateRandomKey,
  getAppUrl,
  getBranchName,
  getCloudflareZoneId,
  getDopplerServiceToken,
  getEnvironmentName
} from './utils'
import getSuffixedAppKey from './utils/get-suffixed-app-key'

async function run(): Promise<void> {
  try {
    const fullbranch = core.getInput(INPUT.GITHUB_BRANCH)
    const branch = getBranchName(fullbranch)
    const environment = getEnvironmentName(branch)
    const appKey = core.getInput(INPUT.APP_KEY)

    core.setOutput(OUTPUT.APP_ENVIRONMENT, environment)
    core.setOutput(OUTPUT.APP_KEY, generateRandomKey(appKey))
    core.setOutput(OUTPUT.APP_URL, getAppUrl(environment, appKey, branch))
    core.setOutput(OUTPUT.CLOUFLARE_ZONE_ID, getCloudflareZoneId(appKey))
    core.setOutput(
      OUTPUT.DOPPLER_APP_SERVICE_TOKEN,
      getDopplerServiceToken(environment)
    )
    core.setOutput(
      OUTPUT.SUFFIXED_TRUSTUP_APP_KEY,
      getSuffixedAppKey(appKey, environment, branch)
    )
    core.setOutput(OUTPUT.TRUSTUP_APP_KEY, appKey)
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
