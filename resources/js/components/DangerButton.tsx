import { Button, ButtonProps } from '@/components/ui/button';
import { ButtonHTMLAttributes } from 'react';

export default function DangerButton({
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement & ButtonProps>) {
    return (
        <Button
            variant='destructive'
            {...props}
        >
            {children}
        </Button>
    );
}
