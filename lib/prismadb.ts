import { PrismaClient } from '@prisma/client'

const client = global.prismadb || new PrismaClient()
if (process.env.NODE_EVN !== 'production') global.prismadb = client

export default client
