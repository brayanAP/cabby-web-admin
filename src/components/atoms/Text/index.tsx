import React from 'react'
import { Typography, TypographyProps } from '@mui/material'

type Props = Pick<TypographyProps, 'align' | 'variant' | 'children'>

const Text: React.FC<Props> = ({
    align,
    variant,
    children,
}) => (
    <Typography
        align={align}
        variant={variant}
    >
        {children}
    </Typography>
)

export default Text
