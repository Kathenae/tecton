import { HtmlHTMLAttributes } from 'react';
import Logo from '../../img/logo_tec-tonarq.png'

export default function ApplicationLogo(props: HtmlHTMLAttributes<HTMLImageElement>) {
    return (
        <img {...props} src={Logo} />
    );
}
