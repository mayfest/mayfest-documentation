---
id: deployment
sidebar_positon: 3
---

# Deployment Guide

The Dillo Day website uses GitHub Actions for continuous integration and deployment to GitHub Pages. This guide explains our deployment process, automated checks, and how to troubleshoot common deployment issues.

## Deployment Overview

Our deployment pipeline consists of two main workflows:

1. Website Checks: Runs on pull requests and pushes to verify code quality
2. Website Deployment: Automatically deploys the website when changes are merged to main

## Continuous Integration

The Website Checks workflow runs automatically on every pull request and push to the main branch. This workflow performs several crucial verification steps before allowing deployment.

### Code Quality Checks

The workflow runs three parallel jobs to ensure code quality:

1. Format Verification

   - Uses Prettier to check code formatting
   - Ensures consistent code style across the project
   - Fails if any files don't meet formatting standards

2. Code Quality Analysis

   - Runs ESLint to check code quality
   - Enforces coding standards and best practices
   - Identifies potential issues and errors

3. Build Verification
   - Attempts a full production build
   - Ensures all dependencies are properly configured
   - Verifies the application can be built successfully

### Required Status Checks

All status checks must pass before:

- Pull requests can be merged
- Deployment can proceed
- Changes can be applied to the main branch

## Deployment Process

The Website Deployment workflow automatically deploys the site to GitHub Pages when changes are merged to the main branch.

### Deployment Steps

1. Environment Setup

   - Checks out the latest code
   - Sets up Node.js 18
   - Configures npm cache for faster installations

2. Build Process

   - Installs project dependencies
   - Creates a production build
   - Generates static HTML export

3. Redirect Generation

   - Creates necessary redirects for client-side routing
   - Ensures proper navigation behavior on GitHub Pages

4. GitHub Pages Deployment
   - Publishes the built files to gh-pages branch
   - Updates the live website
   - Configures proper commit authorship

## Configuration Files

### GitHub Actions Workflows

The workflows are defined in two YAML files in the `.github/workflows` directory:

1. `website-checks.yml`:

```yaml
name: Website Checks
on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main
jobs:
  lint-prettier:
    name: Check code formatting
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: npm
      - name: Install dependencies
        run: npm ci
      - name: Check formatting with Prettier
        run: npm run lint:prettier
  # Additional jobs omitted for brevity
```

2. `website-deployment.yml`:

```yaml
name: Website Deployment
on:
  push:
    branches:
      - main
jobs:
  deploy:
    name: Deploy website
    runs-on: ubuntu-latest
    permissions:
      contents: write
    steps:
      - uses: actions/checkout@v3
      # Additional steps omitted for brevity
```

## Manual Deployment

While automatic deployment is preferred, manual deployment may sometimes be necessary:

1. Ensure you have proper repository permissions
2. Run the build process locally to verify changes
3. Use GitHub's interface to manually trigger the workflow
4. Monitor the deployment progress in the Actions tab

## Troubleshooting

### Common Issues

1. Failed Status Checks

   - Review the workflow logs in GitHub Actions
   - Address any formatting or linting errors
   - Verify all dependencies are properly installed
   - Check for TypeScript compilation errors

2. Deployment Failures

   - Confirm GitHub Pages is properly configured
   - Verify branch permissions are correct
   - Check if the build process completes successfully
   - Review deployment logs for specific errors

3. Routing Issues
   - Verify redirect configuration
   - Check client-side routing setup
   - Ensure proper base path configuration

### Monitoring Deployments

To monitor deployment status:

1. Visit the repository's Actions tab
2. Check the latest workflow run
3. Review deployment logs if needed
4. Verify the live site after deployment

## Best Practices

1. Always create pull requests for changes
2. Wait for all status checks to pass
3. Review deployment previews when available
4. Test the live site after deployment
5. Monitor analytics for any issues

## Security Considerations

1. Protected Branches

   - Main branch is protected
   - Required status checks must pass
   - Only authorized users can merge

2. Secrets Management
   - Sensitive data stored in GitHub Secrets
   - Automatic token handling for deployments
   - Proper permission scoping

## Support

If you encounter deployment issues:

1. Check the Actions tab for detailed logs
2. Review pull request comments for automated feedback
3. Contact the development team for assistance
4. Consult GitHub Pages documentation if needed

Remember to always verify your changes locally before pushing to ensure smooth deployments.
