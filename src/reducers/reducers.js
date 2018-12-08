import ActionTypes from '../actions/actionTypes';
import Config from '../config/config';

const reducers = (state = {

}, action) => {

	switch (action.type) {

		case ActionTypes.FOO:
			return Object.assign({}, state, {});

		default:
			return state;
	}
};

export default reducers;
