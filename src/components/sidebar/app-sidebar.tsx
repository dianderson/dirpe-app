"use client"

import {NavHeader} from "@/components/sidebar/nav-header"
import {NavMain} from "@/components/sidebar/nav-main"
import {NavFooter} from "@/components/sidebar/nav-footer"
import {Sidebar, SidebarContent, SidebarFooter, SidebarRail,} from "@/components/ui/sidebar"
import {useSession} from "next-auth/react";
import {ComponentProps} from "react";

export function AppSidebar({...props}: ComponentProps<typeof Sidebar>) {
    const {data: session} = useSession()

    return (
        <Sidebar collapsible="icon" {...props} className="max-w-60">
            <NavHeader/>
            <SidebarContent>
                <NavMain/>
            </SidebarContent>
            <SidebarFooter className="border-t">
                <NavFooter user={session?.user}/>
            </SidebarFooter>
            <SidebarRail/>
        </Sidebar>
    )
}