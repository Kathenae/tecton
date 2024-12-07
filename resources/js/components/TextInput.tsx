import { Input } from '@/components/ui/input';
import {
    forwardRef,
    InputHTMLAttributes,
    useEffect,
    useImperativeHandle,
    useRef,
} from 'react';

export default forwardRef(function TextInput(
    {
        isFocused = false,
        ...props
    }: InputHTMLAttributes<HTMLInputElement> & React.ComponentProps<"input"> & { isFocused?: boolean } ,
    ref,
) {
    return (
        <Input
            {...props}
        />
    );
});
