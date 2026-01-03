import {NextResponse} from "next/server"

export async function GET() {
    const domain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN
    const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
    const redirectUri = encodeURIComponent(`${process.env.NEXT_PUBLIC_URL}/api/auth/callback/cognito`)
    const redirectUrl = `${domain}/signup?client_id=${clientId}&response_type=code&scope=email+openid&redirect_uri=${redirectUri}`

    return NextResponse.redirect(redirectUrl, 302)
}