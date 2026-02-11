"use client"

import {Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import {useState} from "react";
import {useForm} from "react-hook-form";
import {PaymentMethodEnum, Provider} from "@/app/(private)/intelligence/routing/providers/types";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";
import {RegisterProviderForm} from "@/app/(private)/intelligence/routing/providers/(components)/register-provider-form";

const registerProviderSchema = z.object({
    providerName: z.string(),
    methods: z.array(PaymentMethodEnum)
})

export default function RegisterProviderModal({open, setOpenAction}: {
    open: boolean,
    setOpenAction: (open: boolean) => void
}) {
    const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null)
    const form = useForm<z.infer<typeof registerProviderSchema>>({
        resolver: zodResolver(registerProviderSchema),
        defaultValues: {
            providerName: "",
            methods: []
        },
    })

    function onSubmit(data: z.infer<typeof registerProviderSchema>) {
        // Do something with the form values.
        console.log(data)
    }

    return (
        <Dialog open={open} onOpenChange={setOpenAction}>
            <DialogContent showCloseButton={false}>
                <DialogTitle/>
                <RegisterProviderForm setOpenAction={setOpenAction}/>
            </DialogContent>
        </Dialog>
    )
}