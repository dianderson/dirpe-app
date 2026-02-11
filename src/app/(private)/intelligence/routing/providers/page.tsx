"use client"

import {Button} from "@/components/ui/button";
import {Plus} from "lucide-react";
import {ProviderCard} from "@/app/(private)/intelligence/routing/providers/(components)/provider-card";
import {PermissionGuard} from "@/components/security/permission-guard";
import {AccessLevel} from "@/types/auth";
import {userProvidersMock} from "@/mocks/ProvidersMock";
import {useState} from "react";
import RegisterProviderModal from "@/app/(private)/intelligence/routing/providers/(components)/register-provider-modal";

export default function RoutingProviders() {
    const [open, setOpen] = useState(false)

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
                    <Button variant="primary" size="lg" className="w-56 gap-3" onClick={() => setOpen(true)}>
                        <Plus className="stroke-3"/> Novo Provedor
                    </Button>
                    {open && <RegisterProviderModal open={open} setOpenAction={setOpen}/>}
                </PermissionGuard>
            </div>
            <div className="flex flex-col gap-4 mt-6">
                {userProvidersMock.map(provider => (
                    <ProviderCard key={provider.code} provider={provider}/>
                ))}
            </div>
        </div>
    )
}

