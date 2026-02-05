"use client"

import {NavSubMenu} from "@/components/sidebar/types";
import {SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem} from "@/components/ui/sidebar";
import Link from "next/link";
import {CollapsibleContent} from "@/components/ui/collapsible";
import {usePathname} from "next/navigation";

const subButtonClasses = `
    font-light
    hover:!bg-slate-200/60  
    data-[active=true]:bg-slate-200 
    data-[active=true]:text-sky-700 
    data-[active=true]:font-medium 
    data-[active=true]:bg-transparent
    group-data-[collapsible=icon]:justify-center 
`

export function AppSubMenu({subMenu}: { subMenu: NavSubMenu }) {
    const pathname = usePathname()

    return (
        <CollapsibleContent key={subMenu.title}>
            <SidebarMenuSub>
                <SidebarMenuSubItem>
                    <SidebarMenuSubButton asChild isActive={pathname === subMenu.href} className={subButtonClasses}>
                        <Link href={subMenu.href}>
                                <span className="text-sm">
                                    {subMenu.title}
                                </span>
                        </Link>
                    </SidebarMenuSubButton>
                </SidebarMenuSubItem>
            </SidebarMenuSub>
        </CollapsibleContent>
    )
}