module.exports = {
  platform: 'github',
  logLevel: 'info',
  onboarding: true,
  "extends": ["github>renovatebot/.github"],
  repositories: ['nghian2guyenbbv/BE_renovate_bot'],
  gitAuthor: "nghian2nguyenbbv <nghiashinhan96@gmail.com>",
  baseBranches: ["master"],
  platformAutomerge: false,
  dependencyDashboard: true,
  labels:['dependencies'],
  prHourlyLimit: 0,
  branchConcurrentLimit: 0,
  prConcurrentLimit: 0,
  branchPrefix: 'renovate/',
  includeForks: true,
  packageRules: [
    {
      description: "lockFileMaintenance",
      matchUpdateTypes: [
        "pin",
        "digest",
        "patch",
        "minor",
        "major",
        "lockFileMaintenance"
      ],
      automergeType: "pr",
      dependencyDashboardApproval: false,
      stabilityDays: 0
    }
  ]
};