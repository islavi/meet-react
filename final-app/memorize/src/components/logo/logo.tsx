import * as React from 'react';
import './logo.css';

interface LogoProps {
    size: 'large' | 'small';
}

export const Logo: React.FC<LogoProps> = ({size}) => (
    <div className={'logo ' + size}><b>memori<span>z</span>e</b></div>
);