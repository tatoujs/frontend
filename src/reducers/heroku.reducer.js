import ActionTypes from '../actions/actionTypes';

const herokuReducer = (state = {
  username: undefined,
  apps: [],
  logs: []
}, action) => {

  switch (action.type) {

    case ActionTypes.HEROKU_LOGIN_SUCCEDED:
      return {
        ...state,
        apps: action.data.apps,
        username: action.username
      };

    case ActionTypes.HEROKU_SELECT_APP_SUCCEDED:
      return {
        ...state,
        logs: action.logs
      };

    case ActionTypes.HEROKU_SAVE_LOG:
      return {
        ...state,
        logs: [...state.logs, action.log]
      };

    default:
      return state;
  }
};

export default herokuReducer;
