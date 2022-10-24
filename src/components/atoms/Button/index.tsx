import React from 'react'
import { Button, ButtonProps } from '@mui/material'

type Props = Pick<ButtonProps, 'type' | 'variant' | 'color' | 'disabled' | 'children' | 'onClick'>

const ButtonComponent: React.FC<Props> = ({
    type,
    variant,
    color,
    disabled,
    children,
    onClick,
}) => (
    <Button
        type={type}
        variant={variant}
        color={color}
        disabled={disabled}
        onClick={onClick}
    >
        {children}
    </Button>
)

export default ButtonComponent
