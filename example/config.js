module.exports = {
  token:"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", 
  platform: 'github',
  logLevel: 'info',
  automergeType: "pr", 
  onboarding: true,
  "extends": ["github>renovatebot/.github"],
  repositories: ['nghian2guyenbbv/renovateCircleCiLocal'],
  gitAuthor: "nghian2nguyenbbv <nghiashinhan96@gmail.com>",
  baseBranches: ["master"],
  "platformAutomerge": false,
  "dependencyDashboard": true,
  "branchPrefix": "renovate/",
};