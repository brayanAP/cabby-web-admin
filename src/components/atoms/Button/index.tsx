import React from 'react'
import { Button, ButtonProps } from '@mui/material'

type Props = Pick<ButtonProps, 'type' | 'variant' | 'color' | 'children' | 'onClick'>

const ButtonComponent: React.FC<Props> = ({
    type,
    variant,
    color,
    children,
    onClick,
}) => (
    <Button
        type={type}
        variant={variant}
        color={color}
        onClick={onClick}
    >
        {children}
    </Button>
)

export default ButtonComponent
