import ActionTypes from "./actionTypes";
import {fetch} from "./api";

export const foo = () => ({
	type: ActionTypes.FOO
});

export const foo2 = () => ({
	type: ActionTypes.FOO,
	payload: {

	}
});
