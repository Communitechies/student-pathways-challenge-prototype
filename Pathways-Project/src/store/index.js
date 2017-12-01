import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import { composeWithDevTools } from 'redux-devtools-extension'

// Reducers
import user from './user'
import pathway, { loadUserPathway } from './pathway'
import jobPathway from './jobPathway'

export const history = createHistory()

const reducer = combineReducers({
  user,
  pathway,
  jobPathway,
  routing: routerReducer
})

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, routerMiddleware(history)))
)

store.dispatch(loadUserPathway())

export default store
