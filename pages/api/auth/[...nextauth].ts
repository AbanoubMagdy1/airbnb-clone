import NextAuth , {AuthOptions} from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prismaClient from '@/app/libs/prismaClient'
import Credentials from 'next-auth/providers/credentials'

import bcrypt from 'bcrypt'

const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismaClient),
    providers: [
        Credentials({
            name: 'Credentials',
            credentials: {
                email: { label: 'email', type: 'text' },
                password: { label: 'password', type: 'password' }
            },
            async authorize(credentials) {
                if(!credentials?.email || !credentials?.password) {
                    throw new Error('Email and password are required')
                }

                const user = await prismaClient.user.findFirst({
                    where: {email: credentials.email}
                })

                if(!user || !user.hashedPassword) {
                    throw new Error('Invalid email or password')
                }

                const isValid = await bcrypt.compare(
                    credentials.password,
                     user.hashedPassword
                )
            
                if(!isValid) {
                    throw new Error('Invalid email or password')
                }

                return user;
            }
        })
    ],
    pages: {
        signIn: '/',
      },
    debug: process.env.NODE_ENV === 'development',
    
    session: {
        strategy: 'jwt',
    },
    secret: process.env.JWT_SECRET,
}

export default NextAuth(authOptions)