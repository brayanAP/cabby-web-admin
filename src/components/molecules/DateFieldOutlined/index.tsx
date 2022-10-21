import React, { useState } from 'react'
import { FormControl } from '@mui/material'
import TextField, { TextFieldComponentProps } from 'components/atoms/TextField'

type Props = Omit<TextFieldComponentProps, 'type' | 'label' | 'labelId' | 'date'> & {
    label: string;
    fullWidth?: boolean;
}

const DateFieldOutlined: React.FC<Props> = ({
    fullWidth,
    label,
    id,
    name,
    variant,
    disabled,
    required,
    helperText,
    className,
    style,
    onChange,
    onBlur,
    onFocus,
}) => {
    const [focus, setFocus] = useState(false)
    return (
        <FormControl fullWidth={fullWidth}>
            <TextField
                id={id}
                type={focus ? 'date' : undefined}
                name={name}
                label={label}
                variant={variant}
                disabled={disabled}
                required={required}
                helperText={helperText}
                className={className}
                style={style}
                onChange={onChange}
                onBlur={(event) => {
                    setFocus(false)
                    onBlur?.(event)
                }}
                onFocus={(event) => {
                    setFocus(true)
                    onFocus?.(event)
                }}
            />
        </FormControl>
    )
}

export default DateFieldOutlined
