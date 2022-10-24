import { AuthAction } from 'store/actions/auth'
import ReduxConstants from 'store/constants'
import type { Admin } from 'types'

export type AuthState = {
    loading: boolean;
    currentUser?: Admin;
}

const defaultState: AuthState = {
    loading: true,
    currentUser: undefined,
}

export default (paramState: AuthState | undefined, action: AuthAction): AuthState => {
    const state = paramState || defaultState
    switch (action.type) {
    case ReduxConstants.UPDATE_CURRENT_USER:
        return {
            ...state,
            loading: false,
            currentUser: action.payload,
        }
    default:
        return state
    }
}
