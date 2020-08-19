import { FETCH_VERSION, SET_SELECTED, RESET_ALL } from '../types';

const INITIAL_STATE: VersionStore = {
	version: [],
	selected: {},
};

const PackageReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case FETCH_VERSION:
			return {
				...state,
				version: action.payload,
				selected: { ...action.payload[0] },
			};
		case SET_SELECTED:
			return {
				...state,
				selected: { ...action.payload },
			};
		case RESET_ALL:
			return {
				...state,
				version: [],
				selected: {},
			};
		default:
			return state;
	}
};

export default PackageReducer;
