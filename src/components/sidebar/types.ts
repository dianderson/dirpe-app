import {LucideIcon} from "lucide-react";
import {AccessLevel} from "@/types/auth";

export type NavSubMenu = {
    title: string
    href: string
    permission: AccessLevel
}

export type NavMenu = {
    title: string
    href?: string
    icon: LucideIcon
    subMenus?: NavSubMenu[]
    permission?: AccessLevel
}

export type NavGroup = {
    label: string
    menus: NavMenu[]
}