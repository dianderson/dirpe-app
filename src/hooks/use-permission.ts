import {usePathname} from "next/navigation"
import {useSession} from "next-auth/react"
import {AccessLevel} from "@/types/auth";

export function usePermission() {
    const currentPath = usePathname()
    const {data: session} = useSession()

    const userPermissions: Record<string, AccessLevel> = session?.user?.permissions ?? {}

    const hasPermission = (requiredLevel: AccessLevel = AccessLevel.NONE, path?: string): boolean => {
        const targetPath = path || currentPath
        const permission = userPermissions[targetPath]

        if (permission === undefined) return false

        return permission >= requiredLevel
    }

    return {hasPermission}
}