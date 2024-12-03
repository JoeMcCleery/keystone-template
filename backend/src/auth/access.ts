import { Session } from './types'

export const isAdmin = ({ session }: { session?: Session }) => Boolean(session?.data.isAdmin)

export const isUser = ({ session }: { session?: Session }) => Boolean(session?.data.id)
