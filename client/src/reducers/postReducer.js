import { 
	GET_ALL_POSTS,
	SUBMIT_POST } from '../actions/types';
// import isEmpty from '../validation/is-empty';


const initialState = {
	currentPost: null,
	posts: null,
	loading:false
}

export default (state=initialState, actions) => {
	switch(actions.type) {
		case GET_ALL_POSTS:
			return {
				...state,
				posts: actions.payload
			}
		default:
			return state
	}
}