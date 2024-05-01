import type { NextAuthConfig,DefaultSession } from 'next-auth';
import { JWT } from "next-auth/jwt"
 
declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `auth`, when using JWT sessions */
  interface JWT {
    /** OpenID ID Token */
    tokenExterno?: string
  }
}
declare module "next-auth" {
  interface User {
    nome: string,
    senha: string
    isAdmin:boolean
    accessToken : string
    idRefreshToken: string,
  }


  interface Session {
    user: {
      id: string
      accessToken:string
      
    } & DefaultSession["user"]
  }
}


export const authConfig = {
  pages: {
    signIn: '/login',
  },

	callbacks: {
    
    jwt({ token, user }) {
      if (user) { // User is available during sign-in
        token.id = user.id
        token.tokenExterno = user.accessToken
        
      }
      return token
    },
    
    session({ session,  token }) {
      session.user.id = token.id
      session.user.accessToken = token.tokenExterno
      return session
    },
    
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      console.log(auth)
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      }

      else if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now

} satisfies NextAuthConfig;
