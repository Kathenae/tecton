import { cn } from "@/lib/utils";
import { InertiaLinkProps, Link } from "@inertiajs/react";

export default function LinkText(props: InertiaLinkProps) {
    return (
        <>
            <Link
                {...props}
                className={cn(
                    "rounded-md text-sm text-primary underline hover:text-primary-800 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    props.className
                )}
            >
                {props.children}
            </Link>
        </>
    )
}