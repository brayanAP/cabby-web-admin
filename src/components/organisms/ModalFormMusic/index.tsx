import React from 'react'
import Text from 'components/atoms/Text'
import TextField from 'components/atoms/TextField'
import Button from 'components/atoms/Button'
import Modal from 'components/atoms/Modal'
import useControlledForm from 'hooks/useControlledForm'
import useAddMusic from 'hooks/useAddMusic'
import useAlertDialog from 'hooks/useAlertDialog'
import getValueByPathFromUnknown from 'shared/getValueByPathFromUnknown'
import {
    Frame,
    FormFrame,
    Form,
    ButtonsFrame,
} from './style'

type Props = {
    open: boolean;
    onClose: () => Promise<void> | void;
}

const ModalFormMusic: React.FC<Props> = ({ open, onClose }) => {
    const { handleOnChange, handleOnSubmit } = useControlledForm({ name: '', author: '' })
    const alert = useAlertDialog()
    const addmusic = useAddMusic()

    return (
        <Modal open={open}>
            <Frame>
                <FormFrame>
                    <Form
                        onSubmit={handleOnSubmit((music) => {
                            try {
                                addmusic(music)
                                onClose()
                            } catch (error) {
                                const errorMessage = getValueByPathFromUnknown(error, ['message'])
                                alert({
                                    title: `${errorMessage}`,
                                    message: 'Please enter a valid one',
                                })
                            }
                        })}
                    >
                        <Text variant="h5">Add Music</Text>
                        <TextField
                            name="name"
                            label="Name"
                            variant="outlined"
                            onChange={handleOnChange}
                        />
                        <TextField
                            name="author"
                            label="Author"
                            variant="outlined"
                            onChange={handleOnChange}
                        />
                        <ButtonsFrame>
                            <Button variant="contained" type="submit">Save</Button>
                            <Button variant="outlined" onClick={onClose}>Cancelar</Button>
                        </ButtonsFrame>
                    </Form>
                </FormFrame>
            </Frame>
        </Modal>
    )
}

export default ModalFormMusic
