import {z} from "zod";
import {BookText, CreditCard, LucideIcon, TriangleAlert, Zap} from "lucide-react";

export const PaymentMethodEnum = z.enum([
    "PIX",
    "CREDIT_CARD",
    "DEBIT_CARD",
    "BANK_SLIP"
])

export const ProviderStatusEnum = z.enum([
    "ACTIVE",
    "PENDING",
    "INACTIVE"
])

export const ProviderStatusToVariant = {
    ACTIVE: "active",
    PENDING: "pending",
    INACTIVE: "inactive"
} as const

export const PaymentMethodStatusEnum = z.enum([
    "VERIFIED",
    "PENDING",
    "FAILED"
])

export const PaymentMethodConfig: Record<PaymentMethod, { label: string, icon: LucideIcon }> = {
    PIX: {label: 'Pix', icon: Zap},
    CREDIT_CARD: {label: 'Cartão de Crédito', icon: CreditCard},
    DEBIT_CARD: {label: 'Cartão de Débito', icon: CreditCard},
    BANK_SLIP: {label: 'Boleto', icon: BookText}
}

export function UserPaymentMethodConfig(userMethod: z.infer<typeof UserProviderMethodSchema>) {
    const iconConfig = userMethod.status === "PENDING"
        ? {icon: TriangleAlert, class: "text-amber-500"}
        : userMethod.status === "FAILED"
            ? {icon: TriangleAlert, class: "text-red-500"}
            : undefined

    switch (userMethod.method) {
        case "PIX":
            return {label: 'Pix', icon: iconConfig?.icon ?? Zap, className: iconConfig?.class}
        case "BANK_SLIP":
            return {label: 'Boleto', icon: iconConfig?.icon ?? BookText, className: iconConfig?.class}
        case "CREDIT_CARD":
            return {label: 'Cartão de Crédito', icon: iconConfig?.icon ?? CreditCard, className: iconConfig?.class}
        case "DEBIT_CARD":
            return {label: "Cartão de Débito", icon: iconConfig?.icon ?? CreditCard, className: iconConfig?.class}
    }
}

export const ProviderSchema = z.object({
    name: z.string(),
    label: z.string(),
    logo: z.string(),
    methods: z.array(PaymentMethodEnum)
})

export const UserProviderMethodSchema = z.object({
    method: PaymentMethodEnum,
    status: PaymentMethodStatusEnum
})

export const UserProviderSchema = z.object({
    code: z.string(),
    label: z.string(),
    logo: z.string(),
    status: ProviderStatusEnum,
    methods: z.array(UserProviderMethodSchema)
})

type PaymentMethod = z.infer<typeof PaymentMethodEnum>
export type Provider = z.infer<typeof ProviderSchema>
export type UserProvider = z.infer<typeof UserProviderSchema>