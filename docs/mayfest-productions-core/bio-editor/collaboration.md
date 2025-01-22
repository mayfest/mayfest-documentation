---
id: collaboration
sidebar_position: 2
---

# Collaboration Guide

This guide outlines the collaboration procedures for the Dillo Day Bio Editor, including managing user access and content updates. It provides essential information for technology team members who need to manage access permissions and handle content update requests from the promotions team.

## Access Management

The Bio Editor uses Firebase's authentication system combined with a custom authorization layer to control access. Access permissions are managed through a specific Firestore document that contains the list of authorized users.

### Understanding the Access Structure

Access control is managed through the following Firestore structure:

```
Collection: bio
Document: admin
Field: users (array of authorized email addresses)
```

Current authorized roles include:

- Technology team Director
- Promotions team Directors
- Designated administrators (co-chairs)

### Adding New Users

To grant access to a new team member:

1. Access the Firebase Console for the Dillo Day project
2. Navigate to Firestore Database
3. Locate the "bio" collection
4. Open the "admin" document
5. Update the "users" array by adding the new email address

The email address must match the Google account the user will use to sign in. Format should be consistent with existing entries (e.g., "username@u.northwestern.edu" for Northwestern accounts).

### Removing User Access

When team members leave or no longer require access:

1. Access the same "admin" document in Firestore
2. Remove the corresponding email address from the "users" array
3. Verify the change is reflected in the database
4. The user will lose access immediately upon their next authentication attempt

## Content Management

The Bio Editor manages content through a structured document in Firestore that contains all link information and site content.

### Content Structure

Content is stored in the following location:

```
Collection: bio
Document: content
Field: links (array of link objects)
```

Each link object contains:

- `title`: Display text for the link
- `url`: Destination URL for the link

### Handling Content Updates

When receiving content update requests from the promotions team:

1. Verify Request Authorization

   - Confirm the request comes from an authorized promotions team member
   - Validate that the requested changes align with content guidelines

2. Implementing Updates
   - Access the "content" document in the "bio" collection
   - Modify the "links" array as needed
   - Preserve the existing structure of link objects
   - Maintain consistent formatting for titles and URLs
   - Test links before and after implementation

### Content Guidelines

When adding or updating content:

1. Link Titles

   - Use clear, descriptive text
   - Maintain consistent capitalization
   - Keep titles concise but informative

2. URLs
   - Verify all URLs are functional
   - Ensure URLs include proper protocols (https://)
   - Test links on both desktop and mobile devices

## Collaboration Workflow

### Handling Update Requests

1. Receiving Requests

   - Promotions team submits content update requests
   - Technology team reviews and validates requests
   - Changes are prioritized and scheduled

2. Implementation Process

   - Make changes in a systematic way
   - Test all updates before and after implementation
   - Document all changes made

3. Communication
   - Confirm receipt of update requests
   - Notify stakeholders when changes are implemented
   - Provide feedback if requests cannot be fulfilled

### Best Practices

1. Documentation

   - Record all access changes
   - Document content updates
   - Maintain a changelog of significant modifications

2. Quality Assurance

   - Test all new links before publishing
   - Verify access changes work as intended
   - Monitor for any unusual activity

3. Security Considerations
   - Regular review of authorized users
   - Periodic validation of active links
   - Monitoring of access patterns

## Emergency Procedures

In case of urgent issues:

1. Access Problems

   - Temporary access can be granted through the Firebase Console
   - Document emergency access grants
   - Review and adjust access after resolving the emergency

2. Content Issues
   - Invalid or problematic links can be removed immediately
   - Backup of previous content state is maintained
   - Emergency contacts for both technology and promotions teams are available

## Support and Resources

For assistance with collaboration tasks:

1. Technology Team Support

   - Primary contact: technology@dilloday.com
   - Emergency contact procedures
   - Documentation resources

2. Promotions Team Coordination
   - Primary contact: promotions@dilloday.com
   - Content update procedures
   - Request templates

## Regular Maintenance

Schedule regular maintenance tasks:

1. Access Review

   - Monthly review of authorized users
   - Verification of active team members
   - Clean-up of outdated access permissions

2. Content Audit
   - Regular verification of all links
   - Review of content relevance
   - Update of seasonal or time-sensitive content

For additional support or questions about collaboration procedures, reach out to the technology team leadership.
