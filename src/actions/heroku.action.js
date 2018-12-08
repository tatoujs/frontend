import ActionTypes from './actionTypes';
import {fetchLoginHeroku} from './api';

export const loginAction = data => ({
  type: ActionTypes.HEROKU_LOGIN_SUCCEDED,
  data
});
export const login = (login, username) => dispatch => fetchLoginHeroku(login, username)
  .then(response => response.json())
  .then(json => dispatch(loginAction(json)));

export const saveLogAction = log => ({
  type: ActionTypes.HEROKU_SAVE_LOG,
  log
});
export const saveLog = log => dispatch => dispatch(saveLogAction(log));
