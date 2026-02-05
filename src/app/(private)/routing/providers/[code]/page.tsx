"use client"

import {use} from "react"

type RoutingProvidersProps = Promise<{ code: string }>

export default function Provider({params}: { params: RoutingProvidersProps }) {
    const {code} = use(params)

    const isNew = code === "new";

    return (
        <div>
            <h1>{isNew ? 'Criar Provedor' : 'Editar Provedor'}</h1>
            <p>ID do Provedor: {code}</p>
        </div>
    )
}