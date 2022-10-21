import ReduxConstants from 'store/constants'
import type { Music } from 'types'

type AddMusicAction = {
    type: ReduxConstants.ADD_MUSIC;
    payload: Music;
}

type DeleteMusicAction = {
    type: ReduxConstants.DELETE_MUSIC;
    payload: Music;
}

export const addMusic = (music: Music): AddMusicAction => ({
    type: ReduxConstants.ADD_MUSIC,
    payload: music,
})

export const deleteMusic = (music: Music): DeleteMusicAction => ({
    type: ReduxConstants.DELETE_MUSIC,
    payload: music,
})

export type PleasuresAction = AddMusicAction | DeleteMusicAction
