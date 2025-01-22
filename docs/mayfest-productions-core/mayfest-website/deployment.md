---
id: deployment
sidebar_position: 3
---

# Deployment Guide

This guide explains the deployment process for the Mayfest Productions website. The website is automatically deployed to GitHub Pages using GitHub Actions whenever changes are pushed to the main branch.

## Deployment Overview

The deployment process is fully automated through GitHub Actions, which handles code quality checks, builds the Next.js application, and deploys it to GitHub Pages. This automation ensures consistency and reliability in our deployment process while maintaining code quality standards.

## Prerequisites

Before deploying the website, ensure you have:

1. Push access to the main branch of the repository
2. GitHub Pages enabled in the repository settings
3. Proper GitHub Actions permissions configured
4. Node.js 20.x installed locally for development

## Deployment Process

The deployment workflow is triggered automatically when:

- Code is pushed to the main branch
- A pull request is created targeting the main branch
- The workflow is manually triggered through the GitHub Actions interface

### Workflow Stages

Our deployment process consists of two main jobs: quality checking and building, followed by deployment.

#### Quality Check and Build Job

The first job performs several crucial steps:

1. Code checkout and environment setup

   - Uses the latest Ubuntu runner
   - Sets up Node.js 20.x
   - Configures npm caching for faster builds

2. Dependency installation

   - Performs a clean install of dependencies using `npm ci`
   - Ensures consistent dependency versions across deployments

3. Code quality verification

   - Checks code formatting using Prettier
   - Runs ESLint to ensure code quality standards
   - These checks must pass for deployment to proceed

4. Build process
   - Configures GitHub Pages settings
   - Builds the Next.js application using `npm run build`
   - Creates a static export in the `./out` directory
   - Uploads the built artifact for deployment

#### Deployment Job

The second job handles the actual deployment:

- Runs only after successful completion of the quality and build job
- Deploys the built artifact to GitHub Pages
- Updates the deployment status and environment URL

## Environment Configuration

The deployment uses two main environment contexts:

1. General GitHub environment:

   - Requires read permissions for repository contents
   - Needs write permissions for Pages and ID token
   - Must have deployment write access

2. GitHub Pages specific environment:
   - Name: `github-pages`
   - URL: Automatically configured during deployment

## Monitoring Deployments

You can monitor deployment status through several channels:

1. GitHub Actions interface

   - Shows real-time progress of the workflow
   - Provides detailed logs for troubleshooting
   - Indicates success or failure of each step

2. Repository deployments section

   - Lists all deployments
   - Shows the current active deployment
   - Provides deployment history

3. GitHub Pages settings
   - Displays the current published version
   - Shows the public URL of your site

## Troubleshooting

If deployment fails, check these common issues:

1. Build Failures

   - Verify all dependencies are properly listed in package.json
   - Check for TypeScript errors in the codebase
   - Ensure all required environment variables are set

2. Quality Check Failures

   - Run Prettier locally: `npx prettier --write .`
   - Fix ESLint issues: `npm run lint`
   - Address any code formatting inconsistencies

3. Permission Issues
   - Verify GitHub Pages is enabled in repository settings
   - Check GitHub Actions permissions
   - Ensure branch protection rules aren't blocking deployment

## Manual Deployment

While automatic deployment is preferred, you can manually trigger a deployment:

1. Navigate to the Actions tab in the repository
2. Select the "Code Quality Check and Deploy" workflow
3. Click "Run workflow"
4. Select the main branch
5. Click "Run workflow" to start the deployment

## Best Practices

To ensure smooth deployments:

1. Always test changes locally before pushing to main
2. Use pull requests for significant changes
3. Monitor deployment logs for any warnings
4. Keep dependencies up to date
5. Regularly verify the published site functionality

For additional support or questions about the deployment process, consult the GitHub Actions documentation or reach out to the development team.
