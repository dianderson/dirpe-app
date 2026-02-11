"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    useSidebar
} from "@/components/ui/sidebar";
import {NavHeader} from "@/components/sidebar/nav-header";
import {NavFooter} from "@/components/sidebar/nav-footer";
import React, {useState} from "react";
import {useSidebarFilter} from "@/hooks/use-sidebar-filter";
import {AppMenu} from "@/components/sidebar/app-menu";

const classLabel = "font-bold text-muted-foreground/80 tracking-widest uppercase text-sm"

export function AppSidebar() {
    const sidebarItems = useSidebarFilter()
    const {open, setOpen, isMobile} = useSidebar()
    const [isPinned, setIsPinned] = useState(true)

    const togglePinAction = () => {
        const newPinnedState = !isPinned
        setIsPinned(newPinnedState)
        if (newPinnedState) {
            setOpen(true)
        }
    }

    const handleMouseEnter = () => {
        if (!isMobile && !isPinned && !open) {
            setOpen(true)
        }
    }

    const handleMouseLeave = () => {
        if (!isMobile && !isPinned && open) {
            setOpen(false)
        }
    }

    return (
        <Sidebar collapsible="icon" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <SidebarHeader className="bg-slate-100-">
                <NavHeader isPinned={isPinned} togglePinAction={togglePinAction}/>
            </SidebarHeader>
            <SidebarContent className="bg-slate-100">
                {sidebarItems.map(group => (
                    <SidebarGroup key={group.label}>
                        <SidebarGroupLabel key={group.label} className={classLabel}>
                            {group.label}
                        </SidebarGroupLabel>
                        <SidebarGroupContent className="tracking-wider">
                            {group.menus.map(menu => (
                                <SidebarMenu key={menu.href ?? menu.title}>
                                    <AppMenu menu={menu}/>
                                </SidebarMenu>
                            ))}
                        </SidebarGroupContent>
                    </SidebarGroup>
                ))}
            </SidebarContent>
            <SidebarFooter className="bg-slate-100 border-t">
                <NavFooter/>
            </SidebarFooter>
        </Sidebar>
    )
}