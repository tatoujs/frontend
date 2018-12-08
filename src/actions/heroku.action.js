import ActionTypes from './actionTypes';
import {fetchLoginHeroku, fetchSelectAppHeroku} from './api';

export const loginAction = (username, data) => ({
  type: ActionTypes.HEROKU_LOGIN_SUCCEDED,
  username,
  data
});
export const login = (username, password) => dispatch => fetchLoginHeroku(username, password)
  .then(response => response.json())
  .then(json => dispatch(loginAction(username, json)));

export const selectAppAction = logs => ({
  type: ActionTypes.HEROKU_SELECT_APP_SUCCEDED,
  logs
});
export const selectApp = appId => dispatch => fetchSelectAppHeroku(appId)
  .then(response => response.json())
  .then(json => dispatch(selectAppAction(json)));

export const saveLogAction = log => ({
  type: ActionTypes.HEROKU_SAVE_LOG,
  log
});
export const saveLog = log => dispatch => dispatch(saveLogAction(log));
