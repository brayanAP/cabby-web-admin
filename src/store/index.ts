import { Store, createStore } from 'redux'
import RootReducer, { ReduxState } from 'store/reducers'
import { StoreAction } from 'store/actions'

type ReduxStore = Store<ReduxState, StoreAction>

const store: ReduxStore = createStore(RootReducer)

export default store
