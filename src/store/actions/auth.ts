import ReduxConstants from 'store/constants'
import type { User } from 'types'

type UpdateCurrentUserAction = {
    type: ReduxConstants.UPDATE_CURRENT_USER;
    payload?: User;
}

export const updateCurrentUser = (currentUser?: User): UpdateCurrentUserAction => ({
    type: ReduxConstants.UPDATE_CURRENT_USER,
    payload: currentUser,
})

export type AuthAction = UpdateCurrentUserAction
