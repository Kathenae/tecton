import { Button, ButtonProps } from '@/components/ui/button';
import { ButtonHTMLAttributes } from 'react';

export default function SecondaryButton({
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement & ButtonProps>) {
    return (
        <Button
            variant='secondary'
            {...props}
        >
            {children}
        </Button>
    );
}
