"use client"

import {ChevronsUpDown, LogOut,} from "lucide-react"

import {Avatar, AvatarFallback, AvatarImage,} from "@/components/ui/avatar"
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar,} from "@/components/ui/sidebar"
import {signOut} from "next-auth/react";
import {User} from "next-auth";

export function NavFooter({user}: { user?: User }) {
    const {isMobile} = useSidebar()

    const handleSignOut = async () => {
        const domain = process.env.NEXT_PUBLIC_COGNITO_DOMAIN
        const clientId = process.env.NEXT_PUBLIC_COGNITO_CLIENT_ID
        const logoutUri = encodeURIComponent(process.env.NEXT_PUBLIC_URL || "")

        await signOut({redirect: false})
        window.location.href = `${domain}/logout?client_id=${clientId}&logout_uri=${logoutUri}`
    }

    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton size="lg">
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src={user?.image} alt={user?.name}/>
                                <AvatarFallback className="rounded-lg">
                                    {user?.name?.split(" ").map((n: string) => n[0]).join("").toUpperCase() ?? "US"}
                                </AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{user?.name}</span>
                                <span className="truncate text-xs">{user?.email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4"/>
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        className="min-w-40 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuItem onClick={handleSignOut}>
                            <LogOut/>
                            Sair
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}