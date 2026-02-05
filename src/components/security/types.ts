import {AccessLevel} from "@/types/auth"
import React from "react";

export type Behaviors = 'hide' | 'disable' | 'lock'

export interface PermissionGuardProps {
    children: React.ReactNode
    requiredLevel: AccessLevel
    path?: string
    behavior?: Behaviors
}