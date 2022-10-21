import { PleasuresAction } from 'store/actions/pleasures'
import ReduxConstants from 'store/constants'
import type { Music } from 'types'

export type PleasuresState = {
    music?: Array<Music>;
}

const defaultState: PleasuresState = {
    music: undefined,
}

export default (
    paramState: PleasuresState | undefined,
    action: PleasuresAction,
): PleasuresState => {
    const state = paramState || defaultState
    switch (action.type) {
    case ReduxConstants.ADD_MUSIC:
        return {
            ...state,
            music: [...(state.music || []), action.payload],
        }
    case ReduxConstants.DELETE_MUSIC: {
        const music = [...(state.music || [])]
        const index = music.findIndex(({ id }) => id === action.payload.id)
        if (index !== -1) {
            music.splice(index, 1)
        }
        return {
            ...state,
            music,
        }
    }
    default:
        return state
    }
}
