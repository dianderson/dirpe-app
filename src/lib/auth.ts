import NextAuth from "next-auth";
import Cognito from "@auth/core/providers/cognito";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers: [
        Cognito({
            checks: ["pkce", "state"]
        })
    ],
    callbacks: {
        async jwt({token, account, profile}) {
            if (account && profile) {
                token.id = profile.sub as string
                token.groups = profile["cognito:groups"] as string[]
                token.username = profile["cognito:username"] as string
                token.accessToken = account.access_token
                token.idToken = account.id_token
                token.expiresAt = account.expires_at
            }
            return token
        },
        async session({session, token}) {
            if (token && session.user) {
                session.user.id = token.id as string
                session.user.groups = token.groups as string[]
                session.user.username = token.username as string
                session.accessToken = token.accessToken as string
                session.idToken = token.idToken as string
            }
            return session
        },
        async redirect({url, baseUrl}) {
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        }
    }
})