import ApplicationLogo from '@/components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { LucideBuilding2 } from 'lucide-react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="w-full flex flex-col justify-center lg:grid h-screen lg:grid-cols-2">
            <div className="hidden text-foreground font-bold lg:block relative">
                <div className=" bg-muted/50 absolute top-0 left-0 w-full h-full -z-[5] bg-cover filter" />
                <div className="w-full h-full flex flex-col space-y-4 justify-center items-center bg-transparent">
                    <ApplicationLogo />
                </div>
            </div>
            <div className="flex flex-col h-full items-center justify-center py-12">
                {children}
            </div>
        </div>
    );
}
