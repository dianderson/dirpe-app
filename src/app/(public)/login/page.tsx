"use client"

import {useEffect} from "react"
import {signIn} from "next-auth/react"
import Wait from "@/components/wait"

export default function Login() {
    useEffect(() => {
        (async () => {
            await signIn("cognito", {redirectTo: "/"})
        })()
    }, [])

    return <Wait/>
}