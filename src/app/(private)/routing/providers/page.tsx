"use client"

import {ProviderStatus, UserProvider} from "@/app/(private)/routing/providers/types";
import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {ProviderCard} from "@/app/(private)/routing/providers/(components)/provider-card";
import Link from "next/link";
import {PermissionGuard} from "@/components/security/permission-guard";
import {AccessLevel} from "@/types/auth";

export default function RoutingProviders() {

    return (
        <div>
            <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                    <h2 className="text-2xl font-bold text-foreground/75">
                        Provedores
                    </h2>
                    <p className="text-muted-foreground">
                        Gerencie suas conexões de pagamentos.
                    </p>
                </div>
                <PermissionGuard requiredLevel={AccessLevel.ADMIN}>
                    <Button asChild variant="primary" size="lg" className="w-56 gap-3">
                        <Link href="/routing/providers/new">
                            <Plus className="stroke-3"/> Novo Provedor
                        </Link>
                    </Button>
                </PermissionGuard>
            </div>
            <div className="flex flex-col gap-4 mt-6">
                {MOCK_USER_PROVIDERS.map(provider => (
                    <ProviderCard key={provider.code} provider={provider}/>
                ))}
            </div>
        </div>
    )
}

const MOCK_USER_PROVIDERS: UserProvider[] = [
    {
        code: 'stripe-br-001',
        name: 'Stripe Brasil - Principal',
        logo: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Stripe_Logo%2C_revised_2016.svg',
        status: ProviderStatus.ACTIVE,
        methods: ['CREDIT_CARD', 'PIX']
    },
    {
        code: 'cielo-v3-003',
        name: 'Cielo V3',
        logo: 'https://logospng.org/download/cielo/logo-cielo-256.png',
        status: ProviderStatus.INACTIVE,
        methods: ['CREDIT_CARD', 'DEBIT_CARD']
    },
    {
        code: 'mercado-pago-004',
        name: 'Mercado Pago Lux',
        logo: 'https://logospng.org/download/mercado-pago/logo-mercado-pago-256.png',
        status: ProviderStatus.PENDING,
        methods: ['PIX', 'BANK_SLIP']
    },
    {
        code: 'pagseguro-005',
        name: 'PagSeguro Pro',
        logo: 'https://logospng.org/download/pagseguro/logo-pagseguro-256.png',
        status: ProviderStatus.ACTIVE,
        methods: ['CREDIT_CARD', 'PIX', 'BANK_SLIP']
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