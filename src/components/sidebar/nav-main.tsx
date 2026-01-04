"use client"

import Link from "next/link"
import {Code, CreditCard, DollarSign, FileText, Home, Settings, Share2, ShoppingCart} from "lucide-react"
import {SidebarGroup, SidebarMenu, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar"
import {usePathname} from "next/navigation"

const menuItems = [
    {name: 'Home', icon: Home, href: '/'},
    {name: 'Payments', icon: CreditCard, href: '/payments'},
    {name: 'Finances', icon: DollarSign, href: '/finances'},
    {name: 'Checkout', icon: ShoppingCart, href: '/checkout'},
    {name: 'Routing', icon: Share2, href: '/routing'},
    {name: 'Reports', icon: FileText, href: '/reports'},
    {name: 'Developers', icon: Code, href: '/developers'},
    {name: 'Settings', icon: Settings, href: '/settings'}
];

export function NavMain() {
    const pathname = usePathname()

    return (
        <SidebarGroup>
            <SidebarMenu className="space-y-1">
                {menuItems.map((item) => (
                    <SidebarMenuItem key={item.name}>
                        <SidebarMenuButton
                            asChild
                            isActive={pathname === item.href}
                            className="hover:bg-slate-100 font-light
                           data-[active=true]:bg-slate-200 data-[active=true]:text-sky-700
                           group-data-[collapsible=icon]:justify-center
                            "
                        >
                            <Link href={item.href} className="flex items-center w-full">
                                {item.icon && <item.icon className="!size-5"/>}
                                <span className="text-lg ml-1 group-data-[collapsible=icon]:hidden">{item.name}</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                ))}
            </SidebarMenu>
        </SidebarGroup>
    )
}