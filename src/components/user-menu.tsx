'use client'

import {signOut} from "next-auth/react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {Avatar, AvatarFallback} from "@/components/ui/avatar"
import {User} from "next-auth";

export function UserMenu({user}: { user: User }) {
    const handleSignOut = async () => {
        const domain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN
        const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
        const logoutUri = encodeURIComponent(process.env.NEXT_PUBLIC_URL || "")

        await signOut({redirect: false})
        window.location.href = `${domain}/logout?client_id=${clientId}&logout_uri=${logoutUri}`
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <Avatar>
                    <AvatarFallback>{user.name?.[0] || 'A'}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>
                    <div className="flex flex-col">
                        <span>{user.name}</span>
                        <span className="text-xs text-muted-foreground font-normal">
              {user.groups?.join(", ")}
            </span>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuItem onClick={handleSignOut}>
                    Sair do Portal
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}