import React from 'react'
import { Select, MenuItem, SelectProps } from '@mui/material'

export type SelectComponentProps = Pick<SelectProps, 'labelId' | 'name' | 'value' | 'label' | 'onChange'> & {
    items: Array<{
        label: string;
        value: string | number,
    }>;
}

const SelectComponent: React.FC<SelectComponentProps> = ({
    labelId,
    name,
    value,
    label,
    items,
    onChange,
}) => (
    <Select
        labelId={labelId}
        name={name}
        value={value}
        label={label}
        onChange={onChange}
    >
        {items.map(({ label, value }) => (<MenuItem key={value} value={value}>{label}</MenuItem>))}
    </Select>
)

export default SelectComponent
