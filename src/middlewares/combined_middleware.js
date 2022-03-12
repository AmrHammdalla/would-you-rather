import logger from './logger';
import user_checker from './user_checker'
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
const combined_middleware=applyMiddleware(ReduxThunk,logger,user_checker)
export default combined_middleware

