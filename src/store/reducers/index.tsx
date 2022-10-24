import { combineReducers } from 'redux'
import auth, { AuthState } from 'store/reducers/auth'

export type ReduxState = Readonly<{
    auth: AuthState;
}>

const rootReducer = combineReducers({
    auth,
})

export default rootReducer
