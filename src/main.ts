import * as core from '@actions/core'
import {INPUT, OUTPUT} from './enums'
import {
  getAppKeySuffix,
  getAppUrl,
  getBranchName,
  getCloudflareZoneSecret,
  getDevEnvironmentToDeploy,
  getDopplerServiceTokenSecret,
  getEnvironmentName,
  getSuffixedAppKey,
  shouldDeploy
} from './utils'

async function run(): Promise<void> {
  try {
    const fullbranch = core.getInput(INPUT.GITHUB_BRANCH)
    const branch = getBranchName(fullbranch)
    const environment = getEnvironmentName(branch)
    const appKey = core.getInput(INPUT.APP_KEY)
    const suffixedAppKey = getSuffixedAppKey(appKey, environment, branch)
    const appKeySuffix = getAppKeySuffix(appKey, suffixedAppKey)

    core.setOutput(OUTPUT.APP_ENVIRONMENT, environment)
    core.setOutput(OUTPUT.APP_URL, getAppUrl(environment, appKey, branch))
    core.setOutput(
      OUTPUT.CLOUDFLARE_ZONE_SECRET,
      getCloudflareZoneSecret(appKey)
    )
    core.setOutput(
      OUTPUT.DOPPLER_APP_SERVICE_TOKEN_SECRET,
      getDopplerServiceTokenSecret(environment, branch)
    )
    core.setOutput(OUTPUT.TRUSTUP_APP_KEY_SUFFIXED, suffixedAppKey)
    core.setOutput(OUTPUT.TRUSTUP_APP_KEY_SUFFIX, appKeySuffix)
    core.setOutput(OUTPUT.TRUSTUP_APP_KEY, appKey)
    core.setOutput(OUTPUT.SHOULD_DEPLOY, shouldDeploy(environment))
    core.setOutput(
      OUTPUT.DEV_ENVIRONMENT_TO_DEPLOY,
      getDevEnvironmentToDeploy(environment, appKeySuffix)
    )
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
