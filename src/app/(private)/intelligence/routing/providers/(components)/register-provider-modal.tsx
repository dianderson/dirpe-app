"use client"

import {Dialog, DialogContent, DialogTitle} from "@/components/ui/dialog";
import {RegisterProviderForm} from "@/app/(private)/intelligence/routing/providers/(components)/register-provider-form";

export default function RegisterProviderModal({open, setOpenAction}: {
    open: boolean,
    setOpenAction: (open: boolean) => void
}) {
    return (
        <Dialog open={open} onOpenChange={setOpenAction}>
            <DialogContent showCloseButton={false}>
                <DialogTitle/>
                <RegisterProviderForm setOpenAction={setOpenAction}/>
            </DialogContent>
        </Dialog>
    )
}