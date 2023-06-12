import {ENVIRONMENT, Environment} from '../enums'

const shouldDeploy = (environment: Environment): boolean =>
  environment !== ENVIRONMENT.LOCAL

export default shouldDeploy
