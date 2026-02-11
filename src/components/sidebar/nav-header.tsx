"use client"

import Image from "next/image"
import {PanelRightOpen} from "lucide-react"

export function NavHeader({isPinned, togglePinAction}: { isPinned: boolean, togglePinAction: () => void }) {

    return (
        <div className="flex items-center justify-center">
            <div className="flex items-center">
                <div className="size-7">
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
                className={`ml-auto p-1 rounded-sm group-data-[collapsible=icon]:hidden cursor-pointer hover:bg-slate-200 ${isPinned ? "bg-slate-200 text-sky-600" : "text-gray-700"}`}>
                <PanelRightOpen onClick={togglePinAction} className="size-6 -scale-x-100"/>
            </div>
        </div>
    )
}