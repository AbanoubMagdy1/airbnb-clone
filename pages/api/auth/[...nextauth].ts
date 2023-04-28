import NextAuth , {AuthOptions} from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import prismaClient from '@/app/libs/prismaClient'
import Credentials from 'next-auth/providers/credentials'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'

import bcrypt from 'bcrypt'

export const authOptions: AuthOptions = {
    adapter: PrismaAdapter(prismaClient),
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string,
        }),
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