"use client"

import Link from "next/link"
import {Code, CreditCard, DollarSign, FileText, Home, Settings} from "lucide-react"
import {SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar"
import {usePathname} from "next/navigation"

const menuItems = [
    {name: 'Home', icon: Home, href: '/'},
    {name: 'Payments', icon: CreditCard, href: '/payments'},
    {name: 'Finances', icon: DollarSign, href: '/finances'},
    {name: 'Reports', icon: FileText, href: '/reports'},
    {name: 'Developers', icon: Code, href: '/developers'},
    {name: 'Settings', icon: Settings, href: '/settings'}
];

export function NavMain() {
    const pathname = usePathname()

    return (
        <SidebarGroup>
            <SidebarMenu>
                {menuItems.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                            asChild
                            isActive={pathname === item.href}
                        >
                            <Link href={item.href}>
                                {item.icon && <item.icon className="!size-5"/>}
                                <span className="text-lg font-light">{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}