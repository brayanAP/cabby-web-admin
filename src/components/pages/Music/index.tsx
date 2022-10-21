import React, { useState } from 'react'
import Text from 'components/atoms/Text'
import Button from 'components/atoms/Button'
import MusicList from 'components/molecules/MusicList'
import ScreenMenuPleasures from 'components/molecules/ScreenMenuPleasures'
import ModalFormMusic from 'components/organisms/ModalFormMusic'
import useDeleteMusic from 'hooks/useDeleteMusic'
import useListMusic from 'hooks/useListMusic'
import {
    Frame,
    Card,
    AddFrame,
    ListFrame,
} from './style'

export default () => {
    const [openModal, setOpenModal] = useState(false)
    const music = useListMusic()
    const deleteMusic = useDeleteMusic()

    return (
        <ScreenMenuPleasures>
            <Frame>
                <Card>
                    <ModalFormMusic open={openModal} onClose={() => setOpenModal(false)} />
                    <AddFrame>
                        <Text variant="h5" align="center">My music</Text>
                        <Button variant="contained" onClick={() => setOpenModal(true)}>Add</Button>
                    </AddFrame>
                    <ListFrame>
                        {(!music?.length) && (
                            <Text variant="body1" align="center">Your music playlist is empty</Text>
                        )}
                        {!!music?.length && (
                            <MusicList
                                data={music}
                                onDelete={deleteMusic}
                            />
                        )}
                    </ListFrame>
                </Card>
            </Frame>
        </ScreenMenuPleasures>
    )
}
