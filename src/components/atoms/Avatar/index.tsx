import React from 'react'
import { Avatar, AvatarProps } from '@mui/material'

type Props = Pick<AvatarProps, 'src' | 'sx' | 'children' | 'onClick'>

const AvatarComponent: React.FC<Props> = ({
    src,
    sx,
    children,
    onClick,
}) => (
    <Avatar
        src={src}
        sx={sx}
        onClick={onClick}
    >
        {children}
    </Avatar>
)

export default AvatarComponent
