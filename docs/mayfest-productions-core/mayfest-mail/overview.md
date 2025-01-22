---
id: overview
sidebar_position: 1
---

# Overview

The Mayfest Mailing App is a cost-effective email marketing system designed specifically for Mayfest Productions' event communications, with a primary focus on Dillo Day and related events. This system provides robust email campaign management capabilities while maintaining minimal operational costs.

## Introduction

Originally conceived as an alternative to expensive commercial email marketing platforms, the Mayfest Mailing App leverages AWS Simple Email Service (SES) through the 00 open-source project to deliver a powerful yet affordable email management solution. The system is specifically tailored to handle the unique requirements of event-based email communications, capable of managing subscriber lists of 10,000+ recipients while keeping operational costs to a minimum.

## Core Features

The Mayfest Mailing App provides essential email marketing capabilities through its integration with 00:

- **Email Campaign Management**: Create, schedule, and monitor email campaigns through an intuitive dashboard
- **Subscriber Management**: Maintain and organize subscriber lists effectively
- **Email Status Monitoring**: Track delivery status, bounces, and other vital metrics for each recipient
- **Search Functionality**: Comprehensive search across emails and messages
- **Request Logging**: Detailed logging for both API requests and queue operations
- **Multi-recipient Tracking**: Individual tracking for messages sent to multiple recipients

## Technical Architecture

The system is built on a modern, scalable architecture:

### Infrastructure

- **Email Delivery**: Amazon Simple Email Service (SES)
- **Message Processing**: SNS/SQS pipeline for reliable message handling
- **Monitoring**: 00 dashboard for comprehensive email tracking and analytics

### Integration Points

- **API Endpoints**: RESTful API for sending emails and managing campaigns
- **Authentication**: Secure API key-based access control
- **Monitoring Interface**: Web-based dashboard for real-time monitoring

## Cost Efficiency

One of the primary advantages of this system is its cost-effectiveness:

- Amazon SES pricing: Approximately $1 per 10,000 emails
- Minimal infrastructure costs through efficient use of AWS services
- Significantly lower operational costs compared to commercial alternatives

## Security and Compliance

The system implements robust security measures:

- Secure API authentication
- Email validation and verification
- Rate limiting capabilities
- DKIM/SPF email authentication
- Compliance with email marketing regulations

## Getting Started

To begin using the Mayfest Mailing App, refer to the following documentation sections:

- [Setup Guide](./setup.md): Initial configuration and installation
- [Usage Guide](./usage.md): Day-to-day operations and features
- [Deployment Guide](./deployment.md): Production deployment instructions

## Support and Maintenance

The system is built on reliable, well-maintained technologies:

- 00 open-source project for core functionality
- AWS services for infrastructure
- Regular updates and security patches
- Community support through the 00 project

For specific implementation details and advanced configuration options, please refer to the respective documentation sections.
