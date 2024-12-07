import { Button, ButtonProps } from '@/components/ui/button';
import { ButtonHTMLAttributes } from 'react';

export default function PrimaryButton({
    children,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement & ButtonProps>) {
    return (
        <Button
            variant='default'
            {...props}
        >
            {children}
        </Button>
    );
}
