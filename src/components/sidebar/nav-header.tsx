"use client"

import {Button} from "@/components/ui/button"
import {SidebarHeader, useSidebar} from "@/components/ui/sidebar"
import Image from "next/image"
import {cn} from "@/lib/utils"
import {LogOut} from "lucide-react";

export function NavHeader() {
    const {state, toggleSidebar} = useSidebar()
    const isCollapsed = state === "collapsed"

    return (
        <SidebarHeader className="border-b">
            <div className={cn(
                "flex items-center h-12 transition-all duration-200",
                isCollapsed ? "justify-center px-0" : "px-2"
            )}>
                {isCollapsed ? (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleSidebar}
                        className="h-12 w-12 hover:bg-sidebar-accent"
                        aria-label="Abrir menu"
                    >
                        <Image
                            src="/logo.png"
                            alt="Logo da Dirpe"
                            width={32}
                            height={32}
                            className="transition-all duration-200"
                        />
                    </Button>
                ) : (
                    <div className="flex items-center transition-all duration-200">
                        <Image
                            src="/logo.png"
                            alt="Logo da Dirpe"
                            width={30}
                            height={30}
                            className="mr-2 transition-all duration-200"
                        />
                        <h1 className="text-2xl text-gray-800 transition-all duration-200">
                            dirpe
                        </h1>
                    </div>
                )}
                {!isCollapsed && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={toggleSidebar}
                        className="justify-end ml-auto hover:bg-sidebar-accent"
                        aria-label="Fechar menu"
                    >
                        <LogOut className="size-5 text-gray-700 -scale-x-100"/>
                    </Button>
                )}
            </div>
        </SidebarHeader>
    )
}

