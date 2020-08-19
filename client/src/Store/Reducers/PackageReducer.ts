import { FETCH_PACKAGE, RESET_ALL } from '../types';

const INITIAL_STATE: PackageStore = {
	package: {},
};

const PackageReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case FETCH_PACKAGE:
			return {
				...state,
				...action.payload,
			};
		case RESET_ALL:
			return {
				...state,
				package: {},
			};
		default:
			return state;
	}
};

export default PackageReducer;
