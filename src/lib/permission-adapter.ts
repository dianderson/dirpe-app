import {AccessLevel} from "@/types/auth";

export function mapCognitoClaimsToPermissions(claims: unknown): Record<string, AccessLevel> {

    return {
        "/": AccessLevel.MANAGER,
        "/payments": AccessLevel.MANAGER,
        "/checkout": AccessLevel.MANAGER,
        "/reports": AccessLevel.MANAGER,
        "/routing/general": AccessLevel.MANAGER,
        "/routing/providers": AccessLevel.ADMIN,
        "/routing/orchestrations": AccessLevel.MANAGER,
        "/developers": AccessLevel.MANAGER,
        "/settings": AccessLevel.MANAGER
    }
}