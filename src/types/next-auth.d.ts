import "next-auth"

declare module "next-auth" {
    interface User extends DefaultUser {
        groups?: string[]
        username?: string
    }

    interface Account extends DefaultAccount {
        id_token?: string
        access_token?: string
        expires_at?: number
        refresh_token?: string
        token_type?: string
        scope?: string
    }

    interface Profile extends Profile {
        "cognito:groups"?: string[]
        "cognito:username"?: string
        email_verified?: boolean
        sub?: string
    }

    interface Session extends DefaultSession {
        user: {
            id: string
            groups?: string[]
            username?: string
            name?: string
            email?: string
            image?: string
        } & DefaultSession["user"]
        accessToken?: string
        idToken?: string
    }
}

declare module "next-auth/jwt" {
    interface JWT extends DefaultJWT {
        id: string
        groups?: string[]
        username?: string
        accessToken?: string
        idToken?: string
        refreshToken?: string
        expiresAt?: number
    }
}