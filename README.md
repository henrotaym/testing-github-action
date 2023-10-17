<p align="center">
  <a href="https://github.com/actions/typescript-action/actions"><img alt="typescript-action status" src="https://github.com/actions/typescript-action/workflows/build-test/badge.svg"></a>
</p>

# USAGE
```yaml
name: 'display-terraform-variables'
on: # rebuild any PRs and main branch changes
  push:
    branches:
      - main
      - release/**
      - dev/**

jobs:
  display_terraform_variables:
    name: Display terraform variables
    runs-on: ubuntu-latest
    steps:
      -
        name: Checkout Repository
        uses: actions/checkout@v3
      -
        name: Prepare terraform variables
        uses: henrotaym/prepare-terraform-variables-action@v3
        id: terraform-variables
        with:
          app_key: "trustup-pro-dashboard"
          github_branch: "refs/heads/release/v1"
      - 
        name: Display variables
        run: |
          echo doppler_app_service_token_secret: "${{ steps.terraform-variables.outputs.doppler_app_service_token_secret }}"
          echo trustup_app_key: "${{ steps.terraform-variables.outputs.trustup_app_key }}"
          echo trustup_app_key_suffix: "${{ steps.terraform-variables.outputs.trustup_app_key_suffix }}"
          echo trustup_app_key_suffixed: "${{ steps.terraform-variables.outputs.trustup_app_key_suffixed }}"
          echo dev_environment_to_deploy: "${{ steps.terraform-variables.outputs.dev_environment_to_deploy }}"
          echo app_url: "${{ steps.terraform-variables.outputs.app_url }}"
          echo bucket_url: "${{ steps.terraform-variables.outputs.bucket_url }}"
          echo app_environment: "${{ steps.terraform-variables.outputs.app_environment }}"
          echo cloudflare_zone_secret: "${{ steps.terraform-variables.outputs.cloudflare_zone_secret }}"
          echo should_deploy: "${{ steps.terraform-variables.outputs.should_deploy }}"
```
