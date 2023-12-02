import { IconPawFilled } from '@tabler/icons-react'
import React from 'react'

interface PropsType {
    className: string,
    name: string,
    onClick?: () => void;
}

export default function Button({ className, name }: PropsType) {
    return (
        <button className={`pages__button ${className}`}>
            <IconPawFilled />
            {name}
        </button>
    )
}
