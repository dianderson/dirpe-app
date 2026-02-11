import {AccessLevel} from "@/types/auth";

export function mapCognitoClaimsToPermissions(claims: unknown): Record<string, AccessLevel> {

    return {
        "/": AccessLevel.VIEW,
        "/operation/dashboard": AccessLevel.MANAGER,
        "/operation/payments": AccessLevel.MANAGER,
        "/intelligence/checkout": AccessLevel.MANAGER,
        "/intelligence/reports": AccessLevel.MANAGER,
        "/intelligence/routing/general": AccessLevel.MANAGER,
        "/intelligence/routing/providers": AccessLevel.ADMIN,
        "/intelligence/routing/orchestrations": AccessLevel.MANAGER,
        "/management/developers": AccessLevel.MANAGER,
        "/management/settings": AccessLevel.MANAGER
    }
}