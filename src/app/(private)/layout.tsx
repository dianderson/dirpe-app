import React from "react"
import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";
import AuthProvider from "@/components/auth-provider";
import {AppSidebar} from "@/components/sidebar/app-sidebar";
import {SidebarProvider} from "@/components/ui/sidebar";

export default async function PrivateLayout({children}: { children: React.ReactNode }) {
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