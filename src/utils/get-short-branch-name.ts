const getShortBranchName = (branchName: string): string => {
  return branchName
    .replace(new RegExp('/', 'g'), '-')
    .substring(0, 35)
    .replace(new RegExp('_', 'g'), '-')
}

export default getShortBranchName
