import { rapperReducers } from 'rap/runtime/reduxLib'
import { combineReducers } from 'redux'
import { IState,IAction} from './type'

const rootReducer = {
    ...rapperReducers,
}

export default combineReducers<IState, IAction>(rootReducer)