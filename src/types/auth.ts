export enum Role {
    USER = "USER",
    ADMIN = "ADMIN"
}

export enum AccessLevel {
    NONE,
    VIEW,
    BACKOFFICE,
    MANAGER,
    ADMIN,
    SECURITY
}

export enum OperationPermission {
    DASHBOARD_VIEW = "OPERATION_DASHBOARD_VIEW",
}

export enum IntelligencePermission {
    ROUTING_PROVIDERS_VIEW = "INTELLIGENCE_ROUTING_PROVIDERS_VIEW",
    ROUTING_PROVIDERS_EDIT = "INTELLIGENCE_ROUTING_PROVIDERS_EDIT",
    ROUTING_PROVIDERS_ADMIN = "INTELLIGENCE_ROUTING_PROVIDERS_ADMIN",
    ROUTING_PROVIDERS_SECURITY = "INTELLIGENCE_ROUTING_PROVIDERS_SECURITY",
}

export enum ManagementPermission {
    SETTINGS_VIEW = "MANAGEMENT_SETTINGS_VIEW",
}

export type AppPermission = | OperationPermission | IntelligencePermission | ManagementPermission