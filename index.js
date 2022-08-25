const { Amplify, Storage, Auth } = require("aws-amplify");
const fs = require("fs");
const path = require("path");
require('dotenv').config();

Amplify.configure({
    "aws_project_region": process.env.AMPLIFY_10E_REGION,
    "aws_cognito_identity_pool_id": `${process.env.AMPLIFY_10E_REGION}:${process.env.AMPLIFY_10E_IDENTITY_POOL_ID}`,
    "aws_cognito_region": process.env.AMPLIFY_10E_REGION,
    "aws_user_pools_id": process.env.AMPLIFY_10E_USER_POOL_ID,
    "aws_user_pools_web_client_id": process.env.AMPLIFY_10E_CLIENT_ID,
    "aws_user_files_s3_bucket": process.env.AMPLIFY_10E_S3_BUCKET,
    "aws_user_files_s3_bucket_region": process.env.AMPLIFY_10E_REGION
});

export async function uploadDocument(filePath, id) {
    await Auth.signIn({
        username: process.env.AMPLIFY_10E_USERNAME,
        password: process.env.AMPLIFY_10E_PASSWORD
    });

    let filename = path.basename(filePath);
    await Storage.put(`${id}/${filename}`, fs.readFileSync(filePath, { encoding: "UTF-8" }), {
        metadata: {
            profileId: id
        },
        bucket: process.env.AMPLIFY_10E_S3_BUCKET,
        level: "private"
    });
}

// Example usage
uploadDocument(
    "C:\\Users\\10East\\OneDrive\\Desktop\\David Jozwik - Testing Fund, LP PCAP Statement Q3 2022.docx",
    "1234-abcd-5678-efgh"
);