import React from 'react'
import { FormControl, InputLabel } from '@mui/material'
import Select, { SelectComponentProps } from 'components/atoms/Select'

type Props = Omit<SelectComponentProps, 'label' | 'labelId'> & {
    label: string;
    fullWidth?: boolean;
}

const SelectOutlined: React.FC<Props> = ({
    name,
    value,
    label,
    items,
    fullWidth,
    onChange,
}) => (
    <FormControl fullWidth={fullWidth}>
        <InputLabel id={label}>{label}</InputLabel>
        <Select
            labelId={label}
            name={name}
            value={value}
            label={label}
            items={items}
            onChange={onChange}
        />
    </FormControl>
)

export default SelectOutlined
