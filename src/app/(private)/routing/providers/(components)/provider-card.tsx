"use client"

import {PaymentMethodConfig, UserProvider} from "@/app/(private)/routing/providers/types";
import {Card, CardContent} from "@/components/ui/card";
import {Settings2} from "lucide-react";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import Link from "next/link";

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
        <Link href={`/routing/providers/${provider.code}`}>
            <Card className={cardClass}>
                <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                        <div className="relative size-16">
                            <Image
                                src={provider.logo}
                                alt={provider.name}
                                fill
                                sizes="64px"
                                className="object-contain"
                            />
                        </div>
                        <div className="space-y-1">
                            <div className="flex items-center gap-2">
                                <h3 className={`${hover} text-xl font-bold tracking-wider text-foreground/75`}>
                                    {provider.name}
                                </h3>
                                <Badge variant={provider.status}>
                                    {provider.status.toUpperCase()}
                                </Badge>
                            </div>
                            <div className="flex items-center gap-3">
                                {provider.methods.map(method => {
                                    const {name, icon: Icon} = PaymentMethodConfig[method]
                                    return (
                                        <div key={name}
                                             className="flex items-center gap-1.5 text-xs uppercase font-semibold tracking-wider text-muted-foreground">
                                            <Icon className="size-4"/>
                                            {name}
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