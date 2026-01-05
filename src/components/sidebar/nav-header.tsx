"use client"

import {SidebarHeader, useSidebar} from "@/components/ui/sidebar"
import Image from "next/image"
import {PanelLeftOpen} from "lucide-react"
import {cn} from "@/lib/utils"

export function NavHeader() {
    const {toggleSidebar} = useSidebar()

    return (
        <SidebarHeader className={cn(
            "border-b",
            "group-data-[collapsible=icon]:p-0" // Remove padding quando colapsado
        )}>
            <div className="flex items-center">
                <div className="flex items-center justify-between">
                    <div className="m-1 hover:bg-slate-100 rounded transition-all duration-200 p-1"
                         onClick={toggleSidebar}>
                        <Image
                            src="/logo.png"
                            alt="Logo da Dirpe"
                            width={32}
                            height={32}
                        />
                    </div>
                    <h1 className="text-2xl text-gray-800 ml-1.5 group-data-[collapsible=icon]:hidden">
                        dirpe
                    </h1>
                </div>
                <div
                    className="ml-auto hover:bg-slate-100 rounded transition-all duration-200 p-1.5 group-data-[collapsible=icon]:hidden">
                    <PanelLeftOpen
                        onClick={toggleSidebar}
                        className="size-6 text-gray-700 -scale-x-100"
                    />
                </div>
            </div>
        </SidebarHeader>
    )
}