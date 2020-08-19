import { FETCH_SUGGESTION } from '../types';

const INITIAL_STATE: SuggestionStore = {
	suggestions: {},
};

const SuggestionReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case FETCH_SUGGESTION:
			return {
				...state,
				suggestions: {
					...action.payload,
				},
			};
		default:
			return state;
	}
};

export default SuggestionReducer;
