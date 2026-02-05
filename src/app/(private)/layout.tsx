import React from "react"
import {auth} from "@/lib/auth";
import {redirect} from "next/navigation";
import {SessionProvider} from "next-auth/react"
import {SidebarProvider} from "@/components/ui/sidebar";
import AppBreadcrumb from "@/components/app-breadcrumb";
import {AppSidebar} from "@/components/sidebar/app-sidebar";

export default async function PrivateLayout({children}: { children: React.ReactNode }) {
    const session = await auth()

    if (!session) redirect("/login")

    return (
        <SessionProvider>
            <SidebarProvider>
                <AppSidebar/>
                <div className="mt-3 mx-4 w-full">
                    <AppBreadcrumb/>
                    <main className="mt-3">
                        {children}
                    </main>
                </div>
            </SidebarProvider>
        </SessionProvider>
    )
}