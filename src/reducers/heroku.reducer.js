import ActionTypes from '../actions/actionTypes';
import Config from '../config/config';

const herokuReducer = (state = {
  logs: []
}, action) => {

  switch (action.type) {

    case ActionTypes.HEROKU_LOGIN_SUCCEDED:
      console.log(action);
      return Object.assign({}, state, {});

    case ActionTypes.HEROKU_SAVE_LOG:
      console.log(action);
      return {
        ...state,
        logs: [...state.logs, action.log]
      };

    default:
      return state;
  }
};

export default herokuReducer;
