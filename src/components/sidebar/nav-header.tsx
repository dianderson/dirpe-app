"use client"

import {useSidebar} from "@/components/ui/sidebar"
import Image from "next/image"
import {PanelLeftOpen} from "lucide-react"

export function NavHeader() {
    const {toggleSidebar} = useSidebar()

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center">
                <div className="size-7" onClick={toggleSidebar}>
                    <Image
                        src="/logo.png"
                        alt="Logo da Dirpe"
                        width={28}
                        height={28}
                    />
                </div>
                <h1 className="text-2xl text-gray-800 ml-2 group-data-[collapsible=icon]:hidden">
                    dirpe
                </h1>
            </div>
            <div
                className="ml-auto group-data-[collapsible=icon]:hidden">
                <PanelLeftOpen
                    onClick={toggleSidebar}
                    className="size-6 text-gray-700 -scale-x-100"
                />
            </div>
        </div>
    )
}