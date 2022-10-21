import { combineReducers } from 'redux'
import auth, { AuthState } from 'store/reducers/auth'
import pleasures, { PleasuresState } from 'store/reducers/pleasures'

export type ReduxState = Readonly<{
    auth: AuthState;
    pleasures: PleasuresState
}>

const rootReducer = combineReducers({
    auth,
    pleasures,
})

export default rootReducer
