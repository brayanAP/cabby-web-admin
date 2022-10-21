import { AuthAction } from 'store/actions/auth'
import ReduxConstants from 'store/constants'
import type { User } from 'types'

export type AuthState = {
    currentUser?: User;
}

const defaultState: AuthState = {
    currentUser: undefined,
}

export default (paramState: AuthState | undefined, action: AuthAction): AuthState => {
    const state = paramState || defaultState
    switch (action.type) {
    case ReduxConstants.UPDATE_CURRENT_USER:
        return {
            ...state,
            currentUser: action.payload,
        }
    default:
        return state
    }
}
