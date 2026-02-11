"use client"

import {z} from "zod";
import {PaymentMethodConfig, PaymentMethodEnum, Provider} from "@/app/(private)/intelligence/routing/providers/types";
import {Controller, useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Field, FieldGroup} from "@/components/ui/field";
import {
    Combobox,
    ComboboxContent,
    ComboboxEmpty,
    ComboboxInput,
    ComboboxItem,
    ComboboxList
} from "@/components/ui/combobox"
import {providersMock} from "@/mocks/ProvidersMock";
import {InputGroupAddon} from "@/components/ui/input-group";
import {LinkIcon, Route, Search, Undo2} from "lucide-react";
import Image from "next/image";
import {Card, CardContent} from "@/components/ui/card";
import {Switch} from "@/components/ui/switch";
import {useState} from "react";
import {Button} from "@/components/ui/button";
import {Empty, EmptyDescription, EmptyHeader, EmptyMedia, EmptyTitle} from "@/components/ui/empty";

const switchClass = `
        transition duration-200
        font-light
        text-muted-foreground
        group-data-[state=checked]:font-normal
        group-data-[state=checked]:text-foreground
    `
const cardClass = `
        group
        cursor-pointer
        border-slate-300
        hover:border-slate-400
        hover:shadow-slate-300
        data-[state=checked]:border-sky-400
        data-[state=checked]:shadow-sky-300
        transition duration-200
    `

const registerProviderSchema = z.object({
    providerName: z.string(),
    methods: z.array(PaymentMethodEnum)
})

export function RegisterProviderForm({setOpenAction}: { setOpenAction: (open: boolean) => void }) {
    const [selectedProvider, setSelectedProvider] = useState<Provider | null>(null)
    const form = useForm<z.infer<typeof registerProviderSchema>>({
        resolver: zodResolver(registerProviderSchema),
        defaultValues: {
            providerName: "",
            methods: []
        },
    })

    function onSubmit(data: z.infer<typeof registerProviderSchema>) {
        console.log(data)
    }

    return (
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col min-h-72">
            <FieldGroup className="h-full">
                <Controller name="providerName" control={form.control} render={({field, fieldState}) => (
                    <Field data-invalid={fieldState.invalid}>
                        <Combobox
                            autoHighlight
                            items={providersMock}

                            onValueChange={provider => {
                                setSelectedProvider(provider)
                                field.onChange(provider?.name)
                                form.setValue("methods", provider?.methods || [])
                            }}

                            itemToStringValue={(provider: Provider) => provider.name}
                        >
                            <ComboboxInput placeholder="Selecione um provedor">
                                <InputGroupAddon> <Search/> </InputGroupAddon>
                            </ComboboxInput>
                            <ComboboxContent className="pointer-events-auto">
                                <ComboboxEmpty>Nenhum provedor encontrado</ComboboxEmpty>
                                <ComboboxList>
                                    {(provider: Provider) => (
                                        <ComboboxItem key={provider.name} value={provider}>
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src={provider.logo}
                                                    alt={provider.label}
                                                    width={32}
                                                    height={32}
                                                />
                                                {provider.label}
                                            </div>
                                        </ComboboxItem>
                                    )}
                                </ComboboxList>
                            </ComboboxContent>
                        </Combobox>
                    </Field>
                )}/>
                {selectedProvider && selectedProvider.methods.length > 0 ? (
                    <Controller name="methods" control={form.control} render={({field, fieldState}) => (
                        <Field data-invalid={fieldState.invalid} className="py-5">
                            {selectedProvider?.methods.map(method => {
                                const {label, icon: Icon} = PaymentMethodConfig[method]
                                const selected = field.value.some(m => m === method)

                                return (
                                    <Card
                                        key={method}
                                        data-state={selected ? "checked" : "unchecked"}
                                        className={cardClass}
                                    >
                                        <CardContent className="flex items-center gap-4">
                                            <Switch
                                                size="sm"
                                                checked={selected}
                                                className="data-[state=checked]:bg-sky-600"
                                                onCheckedChange={(checked) => {
                                                    field.onChange(
                                                        checked
                                                            ? [...field.value, method]
                                                            : field.value.filter(m => m !== method)
                                                    )
                                                }}
                                            />
                                            <div
                                                className={`flex items-center gap-1.5 ${switchClass}`}>
                                                <Icon className="size-5"/>
                                                {label}
                                            </div>
                                        </CardContent>
                                    </Card>
                                )
                            })}
                        </Field>
                    )}/>
                ) : (
                    <Empty>
                        <EmptyHeader>
                            <EmptyMedia variant="icon">
                                <Route className="text-muted-foreground/50"/>
                            </EmptyMedia>
                            <EmptyTitle className="text-foreground/75 text-sm">
                                Aguardando seleção
                            </EmptyTitle>
                            <EmptyDescription className="text-muted-foreground text-xs">
                                Selecione um adquirente acima para ver os detalhes.
                            </EmptyDescription>
                        </EmptyHeader>
                    </Empty>
                )}
            </FieldGroup>

            <div className="mt-auto flex justify-between">
                <Button variant="secondary" className="w-52" onClick={() => setOpenAction(false)}>
                    <Undo2/> Cancelar
                </Button>
                <Button type="submit" variant="primary" className="w-52">
                    <LinkIcon/> Vincular
                </Button>
            </div>
        </form>
    )
}