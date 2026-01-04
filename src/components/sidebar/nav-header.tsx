"use client"

import {SidebarHeader, useSidebar} from "@/components/ui/sidebar"
import Image from "next/image"
import {LogOut} from "lucide-react"
import {cn} from "@/lib/utils"

export function NavHeader() {
    const {state, toggleSidebar} = useSidebar()
    const isCollapsed = state === "collapsed"

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
                    <LogOut
                        onClick={toggleSidebar}
                        className="size-5 text-gray-700 -scale-x-100"
                    />
                </div>
            </div>
        </SidebarHeader>
    )

    // return (
    //     <SidebarHeader className="border-b">
    //         <div className={cn(
    //             "flex h-12 transition-all duration-200"
    //         )}>
    //             {isCollapsed ? (
    //                 <div className="flex items-center">
    //                     <Button
    //                         variant="ghost"
    //                         size="icon"
    //                         onClick={toggleSidebar}
    //                         className="h-12 w-12 hover:bg-sidebar-accent"
    //                         aria-label="Abrir menu"
    //                     >
    //                         <Image
    //                             src="/logo.png"
    //                             alt="Logo da Dirpe"
    //                             width={32}
    //                             height={32}
    //                             className="transition-all duration-200"
    //                         />
    //                     </Button>
    //                 </div>
    //             ) : (
    //                 <div className="flex items-center transition-all duration-200">
    //                     <Image
    //                         src="/logo.png"
    //                         alt="Logo da Dirpe"
    //                         width={30}
    //                         height={30}
    //                         className="mr-2 transition-all duration-200"
    //                     />
    //                     <h1 className="text-2xl text-gray-800 transition-all duration-200">
    //                         dirpe
    //                     </h1>
    //                 </div>
    //             )}
    //             {!isCollapsed && (
    //                 <Button
    //                     variant="ghost"
    //                     size="icon"
    //                     onClick={toggleSidebar}
    //                     className="justify-end ml-auto hover:bg-sidebar-accent"
    //                     aria-label="Fechar menu"
    //                 >
    //                     <LogOut className="size-5 text-gray-700 -scale-x-100"/>
    //                 </Button>
    //             )}
    //         </div>
    //     </SidebarHeader>
    // )
}