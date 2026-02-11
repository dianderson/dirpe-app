import {
    PaymentMethodEnum,
    PaymentMethodStatusEnum,
    Provider,
    ProviderStatusEnum,
    UserProvider
} from "@/app/(private)/intelligence/routing/providers/types";

export const providersMock: Provider[] = [
    {
        name: "stripe-brasil",
        label: "Stripe Brasil",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
        methods: ["PIX", "BANK_SLIP", "CREDIT_CARD", "DEBIT_CARD"]
    },
    {
        name: "cielo-v3",
        label: "Cielo V3",
        logo: "https://logospng.org/download/cielo/logo-cielo-256.png",
        methods: ["CREDIT_CARD", "DEBIT_CARD"]
    },
    {
        name: "mercado-pago",
        label: "Mercado Pago",
        logo: "https://logospng.org/download/mercado-pago/logo-mercado-pago-256.png",
        methods: ["PIX", "BANK_SLIP"]
    },
    {
        name: "pagseguro-pro",
        label: "PagSeguro Pro",
        logo: "https://logospng.org/download/pagseguro/logo-pagseguro-256.png",
        methods: ["CREDIT_CARD", "PIX", "BANK_SLIP"]
    }
]

export const userProvidersMock: UserProvider[] = [
    {
        code: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
        label: "Stripe Brasil - Principal",
        logo: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg",
        status: ProviderStatusEnum.enum.ACTIVE,
        methods: [
            {method: PaymentMethodEnum.enum.CREDIT_CARD, status: PaymentMethodStatusEnum.enum.VERIFIED},
            {method: PaymentMethodEnum.enum.PIX, status: PaymentMethodStatusEnum.enum.VERIFIED}
        ]
    },
    {
        code: "3d5e8f2a-91c4-4b3e-9a1f-7c6d5e4f3a2b",
        label: "Cielo V3",
        logo: "https://logospng.org/download/cielo/logo-cielo-256.png",
        status: ProviderStatusEnum.enum.INACTIVE,
        methods: [
            {method: PaymentMethodEnum.enum.CREDIT_CARD, status: PaymentMethodStatusEnum.enum.VERIFIED},
            {method: PaymentMethodEnum.enum.DEBIT_CARD, status: PaymentMethodStatusEnum.enum.PENDING}
        ]
    },
    {
        code: "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        label: "Mercado Pago Lux",
        logo: "https://logospng.org/download/mercado-pago/logo-mercado-pago-256.png",
        status: ProviderStatusEnum.enum.PENDING,
        methods: [
            {method: PaymentMethodEnum.enum.PIX, status: PaymentMethodStatusEnum.enum.VERIFIED},
            {method: PaymentMethodEnum.enum.BANK_SLIP, status: PaymentMethodStatusEnum.enum.FAILED}
        ]
    },
    {
        code: "b2c3d4e5-f678-9012-abcd-ef2345678901",
        label: "PagSeguro Pro",
        logo: "https://logospng.org/download/pagseguro/logo-pagseguro-256.png",
        status: ProviderStatusEnum.enum.ACTIVE,
        methods: [
            {method: PaymentMethodEnum.enum.PIX, status: PaymentMethodStatusEnum.enum.VERIFIED},
            {method: PaymentMethodEnum.enum.BANK_SLIP, status: PaymentMethodStatusEnum.enum.PENDING},
            {method: PaymentMethodEnum.enum.CREDIT_CARD, status: PaymentMethodStatusEnum.enum.FAILED}
        ]
    }
]

// const userProviders: UserProvider[] = [
//     {
//         code: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
//         name: 'Cielo',
//         logo: 'https://logospng.org/download/cielo/logo-cielo-256.png',
//         status: ProviderStatus.ACTIVE,
//         methods: [PaymentMethods.PIX, PaymentMethods.CREDIT_CARD]
//     },
//     {
//         code: '3d5e8f2a-91c4-4b3e-9a1f-7c6d5e4f3a2b',
//         name: 'Mercado Pago',
//         logo: 'https://logospng.org/download/mercado-pago/logo-mercado-pago-256.png',
//         status: ProviderStatus.ACTIVE,
//         methods: [PaymentMethods.PIX, PaymentMethods.BANK_SLIP]
//     }
// ]