import ReduxConstants from 'store/constants'
import type { Admin } from 'types'

type UpdateCurrentUserAction = {
    type: ReduxConstants.UPDATE_CURRENT_USER;
    payload?: Admin;
}

export const updateCurrentUser = (currentUser?: Admin): UpdateCurrentUserAction => ({
    type: ReduxConstants.UPDATE_CURRENT_USER,
    payload: currentUser,
})

export type AuthAction = UpdateCurrentUserAction
