import {NavGroup, NavMenu, NavSubMenu} from "@/components/sidebar/types";
import {Code, CreditCard, FileText, LayoutDashboard, Settings, ShoppingCart} from "lucide-react";
import {AccessLevel} from "@/types/auth";

// #region OPERATION
const OPERATION_MENUS: NavMenu[] = [
    {title: "Dashboard", href: "/operation/dashboard", icon: LayoutDashboard, permission: AccessLevel.VIEW},
    {title: "Payments", href: "/operation/payments", icon: CreditCard, permission: AccessLevel.VIEW},
]
// #endregion

// #region INTELLIGENCE
const ROUTING_SUBMENUS: NavSubMenu[] = [
    {title: "General", href: "/intelligence/routing/general", permission: AccessLevel.BACKOFFICE},
    {title: "Providers", href: "/intelligence/routing/providers", permission: AccessLevel.MANAGER},
    {title: "Orchestrations", href: "/intelligence/routing/orchestrations", permission: AccessLevel.BACKOFFICE},
]

const INTELLIGENCE_MENUS: NavMenu[] = [
    {title: "Checkout", href: "/intelligence/checkout", icon: ShoppingCart, permission: AccessLevel.BACKOFFICE},
    {title: "Reports", href: "/intelligence/reports", icon: FileText, permission: AccessLevel.MANAGER},
    {title: "Routing", icon: LayoutDashboard, subMenus: ROUTING_SUBMENUS},
]
// #endregion

// #region MANAGEMENT
const MANAGEMENT_MENUS: NavMenu[] = [
    {title: "Developers", href: "/management/developers", icon: Code, permission: AccessLevel.MANAGER},
    {title: "Settings", href: "/management/settings", icon: Settings, permission: AccessLevel.MANAGER},
]
// #endregion

export const SIDEBAR_CONFIG: NavGroup[] = [
    {label: "OPERATION", menus: OPERATION_MENUS},
    {label: "INTELLIGENCE", menus: INTELLIGENCE_MENUS},
    {label: "MANAGEMENT", menus: MANAGEMENT_MENUS},
]