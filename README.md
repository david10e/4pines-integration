# S3 & Amplify Example Upload

Very simple example of uploading a file to S3 using Amplify. Including Oauth2 authentication.

The following example code assumes you have the following installed:
- Node v16
- Yarn v1.2

It uses two key libraries:
- AWS Amplify
- DotEnv

## Get Started

1. Run `yarn install`
2. Copy `.env.example` to `.env` and fill in the values
3. Run `yarn start`

The file path provided to the `uploadDocument` function in index.js will upload a file from your machine to S3 and the profile ID will be attached to that file as metadata.