import React from 'react'
import { Modal, ModalProps } from '@mui/material'

type Props = Pick<ModalProps, 'open' | 'children'>

const ModalComponent: React.FC<Props> = ({
    open,
    children,
}) => (
    <Modal
        open={open}
    >
        {children}
    </Modal>
)

export default ModalComponent
