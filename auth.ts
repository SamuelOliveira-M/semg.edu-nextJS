import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { authConfig } from './auth.config';
import { z } from 'zod';
import { POST } from '@/app/lib/api';
import { User } from './app/lib/definitions';

async function getUser(email: string,senha:string): Promise<User | undefined> {
  try {
    const user = await POST(email,senha);
    return user;

  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}


export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email,password);
          // A API valida as credenciais; em caso de falha devolve { error }.
          if (user && typeof user.id === 'string') return user;
        }

        console.log('Invalid credentials');
        return null;
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET, // Defina a variável de ambiente NEXTAUTH_SECRE
});

