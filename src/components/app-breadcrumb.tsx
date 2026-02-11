"use client"

import {usePathname} from "next/navigation";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {Fragment, useMemo} from "react";

export default function AppBreadcrumb() {
    const currentPath = usePathname()

    const crumbs = useMemo(() => {
        const segments = currentPath.split("/").filter(Boolean)

        return segments.map((segment, index, array) => ({
            label: segment.charAt(0).toUpperCase() + segment.slice(1),
            href: "/" + array.slice(0, index + 1).join("/"),
            hasNext: index < segments.length - 1
        }))
    }, [currentPath])

    return (
        <Breadcrumb>
            <BreadcrumbList>
                {crumbs.map(({label, href, hasNext}) => (
                    <Fragment key={href}>
                        <BreadcrumbItem className="text-sm font-medium tracking-widest">
                            {hasNext ? (
                                <BreadcrumbLink href={href}>
                                    {label}
                                </BreadcrumbLink>
                            ) : (
                                <BreadcrumbPage className="font-bold text-sky-600">
                                    {label}
                                </BreadcrumbPage>
                            )}
                        </BreadcrumbItem>
                        {hasNext && <BreadcrumbSeparator/>}
                    </Fragment>
                ))}
            </BreadcrumbList>
        </Breadcrumb>
    )
}