"use client"

import {NavMenu} from "@/components/sidebar/types";
import {SidebarMenuButton, SidebarMenuItem} from "@/components/ui/sidebar";
import {Collapsible, CollapsibleTrigger} from "@/components/ui/collapsible";
import {ChevronDown} from "lucide-react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {AppSubMenu} from "@/components/sidebar/app-sub-menu";

const menuButtonClasses = `
    font-light
    hover:!bg-slate-200/60
    data-[active=true]:bg-transparent
    data-[active=true]:text-sky-700
    group-data-[collapsible=icon]:justify-center
    group-data-[collapsible=icon]:!w-full
`
const labelClasses = "text-base group-data-[collapsible=icon]:hidden"
const chevronClasses = `
    ml-auto transition-transform duration-200 
    group-data-[state=open]/collapsible:rotate-180
    group-data-[collapsible=icon]:hidden
`

export function AppMenu({menu}: { menu: NavMenu }) {
    const pathname = usePathname()

    if (menu.subMenus) {
        return (
            <Collapsible className="group/collapsible" asChild>
                <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={menu.title} className={menuButtonClasses}>
                            {menu.icon && <menu.icon/>}
                            <span className={labelClasses}>{menu.title}</span>
                            <ChevronDown className={chevronClasses}/>
                        </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {menu.subMenus.map(subMenu => (
                        <AppSubMenu key={subMenu.href} subMenu={subMenu}/>
                    ))}
                </SidebarMenuItem>
            </Collapsible>
        )
    }

    return (
        <SidebarMenuItem className="active:bg-slate-100">
            <SidebarMenuButton asChild className={menuButtonClasses} isActive={pathname === menu.href}>
                <Link href={menu.href!}>
                    {menu.icon && <menu.icon/>}
                    <span className={labelClasses}>
                        {menu.title}
                    </span>
                </Link>
            </SidebarMenuButton>
        </SidebarMenuItem>
    )
}