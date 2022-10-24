import { ReduxState } from 'store/reducers'

export const currentUserSelector = (state: ReduxState) => state.auth.currentUser

export const authSelector = (state: ReduxState) => state.auth
