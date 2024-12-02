import type { StorageConfig } from '@keystone-6/core/types'

const {
  S3_BUCKET_NAME: bucketName = 'keystone-test',
  S3_REGION: region = 'ap-southeast-2',
  S3_ACCESS_KEY_ID: accessKeyId = 'keystone',
  S3_SECRET_ACCESS_KEY: secretAccessKey = 'keystone',
  S3_ENDPOINT: endpoint = 'https://ap-southeast-2-region.digitaloceanspaces.com',
} = process.env

export const storage = {
  s3_images: {
    kind: 's3',
    type: 'image',
    bucketName,
    region,
    accessKeyId,
    secretAccessKey,
    // signed: { expiry: 3600 }, // (optional) links will be signed with an expiry of 3600 seconds (an hour)
    endpoint,
  },
  s3_files: {
    kind: 's3',
    type: 'file',
    bucketName,
    region,
    accessKeyId,
    secretAccessKey,
    // signed: { expiry: 3600 }, // (optional) links will be signed with an expiry of 3600 seconds (an hour)
    endpoint,
  },
} satisfies Record<string, StorageConfig>
