import {BookText, CreditCard, LucideIcon, Zap} from "lucide-react"

export type PaymentMethodKey = 'PIX' | 'CREDIT_CARD' | 'DEBIT_CARD' | 'BANK_SLIP'

export enum ProviderStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending'
}

export interface UserProvider {
    code: string
    name: string
    logo: string
    status: ProviderStatus
    methods: PaymentMethodKey[]
}

export const PaymentMethodConfig: Record<PaymentMethodKey, { name: string, icon: LucideIcon }> = {
    PIX: {name: 'Pix', icon: Zap},
    CREDIT_CARD: {name: 'Credit Card', icon: CreditCard},
    DEBIT_CARD: {name: 'Debit Card', icon: CreditCard},
    BANK_SLIP: {name: 'Back Slip', icon: BookText}
}