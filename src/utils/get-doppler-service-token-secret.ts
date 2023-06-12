import {ENVIRONMENT, Environment} from '../enums'
import getShortBranchName from './get-short-branch-name'

const getDopplerServiceTokenName = (
  environment: Environment,
  branch: string
): string => {
  const prefix = `DOPPLER_SERVICE_TOKEN`
  if (environment !== ENVIRONMENT.DEV) {
    const upperEnvironmentName = environment.toUpperCase()
    return `${prefix}_${upperEnvironmentName}`
  }

  const suffix = getShortBranchName(branch).replace('-', '_').toUpperCase()
  return `${prefix}_${suffix}`
}

export default getDopplerServiceTokenName
