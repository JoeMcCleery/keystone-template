// Welcome to Keystone!
//
// This file is what Keystone uses as the entry-point to your headless backend
//
// Keystone imports the default export of this file, expecting a Keystone configuration object
//   you can find out more at https://keystonejs.com/docs/apis/config

import { config } from '@keystone-6/core'
import { lists } from './src/schema'
import { withAuth, session } from './src/auth'
import { storage } from './src/storage'
import { isAdmin } from './src/auth/access'

export default withAuth(
  config({
    db: {
      provider: 'postgresql',
      url: process.env.DATABASE_URL || 'postgres://admin:root@db:5432/keystone',
    },
    lists,
    session,
    storage,
    ui: {
      isAccessAllowed: isAdmin,
    },
  })
)
