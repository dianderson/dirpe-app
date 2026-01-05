'use client';

import React, {PropsWithChildren} from "react";

export default function RoutingLayout({children}: PropsWithChildren) {
    return (
        <div>
            <h1>Routing Providers Page</h1>
            {children}
        </div>
    )
}