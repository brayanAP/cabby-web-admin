import React from 'react'
import { TextField, TextFieldProps } from '@mui/material'

export type TextFieldComponentProps = Pick<TextFieldProps,
    'id'
    | 'type'
    | 'name'
    | 'label'
    | 'variant'
    | 'disabled'
    | 'required'
    | 'helperText'
    | 'className'
    | 'style'
    | 'onChange'
    | 'onBlur'
    | 'onFocus'
>;

const TextFieldComponent: React.FC<TextFieldComponentProps> = ({
    label,
    id,
    type,
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
}) => (
    <TextField
        id={id}
        type={type}
        name={name}
        label={label}
        variant={variant}
        disabled={disabled}
        required={required}
        helperText={helperText}
        className={className}
        style={style}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
    />
)

export default TextFieldComponent
