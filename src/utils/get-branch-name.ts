const getBranchName = (branchRef: string): string =>
  branchRef.replace('refs/heads/', '')

export default getBranchName
