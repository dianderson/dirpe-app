"use client"

import {
    ProviderStatusToVariant,
    UserPaymentMethodConfig,
    UserProvider
} from "@/app/(private)/intelligence/routing/providers/types";
import {Card, CardContent} from "@/components/ui/card";
import {Settings2} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {Badge} from "@/components/ui/badge";

export function ProviderCard({provider}: { provider: UserProvider }) {
    const hover = `
        transition duration-200
        group-hover:text-sky-500
        group-hover:border-sky-500
        group-hover:shadow-sky-300
    `
    const cardClass = `
        group
        cursor-pointer
        border-slate-300
        hover:border-sky-500
        hover:shadow-sky-300
        active:shadow-sky-500
        transition duration-200
    `

    return (
        <Link href={`/intelligence/routing/providers/${provider.code}`}>
            <Card className={cardClass}>
                <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="relative size-16">
                            <Image
                                src={provider.logo}
                                alt={provider.label}
                                fill
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h3 className={`${hover} text-xl font-bold tracking-wider text-foreground/75`}>
                                    {provider.label}
                                </h3>
                                <Badge variant={ProviderStatusToVariant[provider.status]}>
                                    {provider.status}
                                </Badge>
                            </div>
                            <div className="flex items-center gap-3">
                                {provider.methods.map(method => {
                                    const {label, icon: Icon, className} = UserPaymentMethodConfig(method)
                                    return (
                                        <div key={label}
                                             className="flex items-center gap-1.5 text-xs uppercase font-semibold tracking-wider text-muted-foreground">
                                            <Icon className={`size-4 ${className}`}/> {label}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <Settings2 className={`${hover} text-muted-foreground`}/>
                </CardContent>
            </Card>
        </Link>
    )
}