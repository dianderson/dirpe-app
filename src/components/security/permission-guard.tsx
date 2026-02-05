import React from "react"
import {PermissionGuardProps} from "@/components/security/types"
import {usePermission} from "@/hooks/use-permission"
import type {Behaviors} from "@/components/security/types"

const BEHAVIORS: Record<Behaviors | 'allowed', (children: React.ReactNode) => React.ReactNode> = {
    allowed: (children) => children,
    hide: () => null,
    disable: (children) => (
        <div className="opacity-50 pointer-events-none cursor-not-allowed select-none">
            {children}
        </div>
    ),
    lock: (children) => (
        <div className="relative opacity-30 pointer-events-none grayscale">
            {children}
            <div className="absolute inset-0 flex items-center justify-center">🔒</div>
        </div>
    )
}

export const PermissionGuard: React.FC<PermissionGuardProps> = ({
    children,
    requiredLevel,
    path,
    behavior = 'hide'
}) => {
    const {hasPermission} = usePermission()
    const currentState: Behaviors | 'allowed' = hasPermission(requiredLevel, path) ? 'allowed' : behavior

    return BEHAVIORS[currentState]?.(children) ?? null
}