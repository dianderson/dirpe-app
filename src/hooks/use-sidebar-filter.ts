import {usePermission} from "@/hooks/use-permission";
import {useMemo} from "react";
import {SIDEBAR_CONFIG} from "@/components/sidebar/configs";

export function useSidebarFilter() {
    const {hasPermission} = usePermission()

    return useMemo(() => {
        return SIDEBAR_CONFIG.map(group => ({
            ...group, menus: group.menus
                .map(menu => ({
                    ...menu,
                    subMenus: menu.subMenus?.filter(s => hasPermission(s.permission, s.href))
                }))
                .filter(menu =>
                    (menu.subMenus && menu.subMenus.length > 0) ||
                    (menu.permission && hasPermission(menu.permission, menu.href!))
                )
        })).filter(group => group.menus.length > 0);

    }, [hasPermission]);
}