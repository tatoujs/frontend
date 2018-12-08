import {combineReducers} from 'redux';

import herokuReducer from './heroku.reducer';

const rootReducer = combineReducers({
  heroku: herokuReducer
});

export default rootReducer;
