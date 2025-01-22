---
id: deployment
sidebar_position: 3
---

# Deployment Guide

The Dillo Day Bio site uses GitHub Pages for hosting, with an automated deployment process managed through GitHub Actions. This guide explains the deployment configuration and process.

## Deployment Overview

Our deployment strategy leverages GitHub Pages to host the static website, with GitHub Actions handling the automated build and deployment process. When changes are pushed to the main branch, the site is automatically built and deployed to the release-build branch, which serves as our production environment.

## GitHub Actions Workflow

The deployment process is managed by a GitHub Actions workflow defined in `.github/workflows/deploy.yml`. This workflow automatically triggers whenever code is pushed to the main branch.

### Workflow Configuration

Our deployment workflow consists of several key stages:

```yaml
name: Deploy Website
on:
  push:
    branches:
      - main
```

The workflow triggers on pushes to the main branch, ensuring that only production-ready code is deployed.

### Environment Setup

The deployment runs in a controlled environment with the following specifications:

```yaml
jobs:
  deploy:
    name: Deploy Website
    runs-on: ubuntu-latest
```

This configuration ensures consistent deployment conditions using the latest Ubuntu environment.

### Deployment Steps

The workflow executes these steps in sequence:

1. Code Checkout: Retrieves the latest code from the repository

```yaml
- uses: actions/checkout@v2
```

2. Node.js Setup: Configures the Node.js environment with caching

```yaml
- uses: actions/setup-node@v3
  with:
    node-version: 18
    cache: npm
```

3. Dependency Installation: Installs project dependencies

```yaml
- name: Install dependencies
  run: npm ci
```

4. Build Process: Creates the production build

```yaml
- name: Build website
  run: npm run build
```

5. GitHub Pages Deployment: Publishes the built site

```yaml
- name: Deploy to GitHub Pages
  uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./dist
    publish_branch: release-build
```

## GitHub Pages Configuration

Our GitHub Pages setup uses several specific configurations:

1. Branch Structure

   - Source code resides in the `main` branch
   - Built code is deployed to the `release-build` branch
   - The site is served from the `release-build` branch

2. Build Output

   - The build process generates files in the `./dist` directory
   - These files are automatically published to the `release-build` branch

3. Deployment Identity
   - Deployments are made using the GitHub Actions bot
   - Commits are authored with the bot's credentials:
     ```yaml
     user_name: github-actions[bot]
     user_email: 41898282+github-actions[bot]@users.noreply.github.com
     ```

## Monitoring Deployments

You can monitor the deployment process in several ways:

1. GitHub Actions Tab

   - View real-time deployment progress
   - Access detailed logs for each step
   - Identify any deployment issues

2. Repository Environments

   - Check deployment status
   - View deployment history
   - Access environment-specific settings

3. GitHub Pages Settings
   - Verify the published site URL
   - Check the serving branch configuration
   - Monitor HTTPS certificate status

## Troubleshooting

Common deployment issues and their solutions:

1. Build Failures

   - Check the build logs in GitHub Actions
   - Verify all dependencies are properly listed in package.json
   - Ensure all required environment variables are set

2. Deployment Failures

   - Verify GitHub Pages is enabled for the repository
   - Check repository permissions
   - Ensure the GitHub token has proper access

3. Website Not Updating
   - Confirm changes were pushed to the main branch
   - Check if the workflow completed successfully
   - Clear browser cache to see updates

## Manual Deployment

While automated deployment is preferred, you can trigger a manual deployment:

1. Navigate to the Actions tab in the repository
2. Select the "Deploy Website" workflow
3. Click "Run workflow"
4. Select the main branch
5. Click "Run workflow" to start the deployment

## Best Practices

For smooth deployments:

1. Always test changes locally before pushing to main
2. Monitor the GitHub Actions logs during deployment
3. Verify the site functionality after deployment
4. Keep dependencies updated to prevent build issues
5. Document any environment-specific configurations

## Security Considerations

Our deployment process includes several security measures:

1. Protected Branches

   - Main branch protection rules
   - Required status checks

2. Secure Secrets

   - GitHub-managed deployment token
   - Environment-specific secrets

3. Access Controls
   - Limited deployment permissions
   - Automated bot deployments
