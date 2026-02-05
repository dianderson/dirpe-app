"use client"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {usePathname} from "next/navigation";
import {Fragment} from "react";

export default function AppBreadcrumb() {
    const pathname = usePathname()

    const route = ('intelligence' + pathname)
    const segments = route.split('/')
    const lastIndex = segments.length - 1

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {segments.map((segment, index) => {
                    const isNotLast = index < lastIndex

                    return (
                        <Fragment key={index}>
                            <BreadcrumbItem>
                                {isNotLast ? (
                                    <BreadcrumbLink key={index} className="font-medium">
                                        {segment}
                                    </BreadcrumbLink>
                                ) : (
                                    <BreadcrumbPage key={index} className="font-bold text-sky-600">
                                        {segment}
                                    </BreadcrumbPage>
                                )}
                            </BreadcrumbItem>
                            {isNotLast && <BreadcrumbSeparator/>}
                        </Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}