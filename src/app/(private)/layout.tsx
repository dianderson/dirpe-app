import {auth} from "@/lib/auth"
import React from "react"
import AuthProvider from "@/components/auth-provider"
import {redirect} from "next/navigation"
import {SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/sidebar/app-sidebar";

export default async function DashboardLayout({children}: { children: React.ReactNode }) {
    const session = await auth()

    if (!session) redirect("/login")

    return (
        <AuthProvider>
            <SidebarProvider>
                <AppSidebar/>
                <main>
                    {children}
                </main>
            </SidebarProvider>
        </AuthProvider>
    )
}