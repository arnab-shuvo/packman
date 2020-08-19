import { FETCH_SUGGESTION } from '../types';
import axios from 'axios';
import { SUGGESTION_URL } from '../../Constants/url';

export const storeSuggestion = (data: SuggestionStore) => ({
	type: FETCH_SUGGESTION,
	payload: data,
});

export const fetchSuggestion = (searchData: string) => async (dispatch: any) => {
	try {
		axios
			.get(`${SUGGESTION_URL}?q=${searchData}`)
			.then((res: any) => {
				const packageData = res.data;
				dispatch(storeSuggestion(packageData));
			})
			.catch((err: any) => {
				throw new Error(`Error Occured ${err}`);
			});
	} catch (e) {
		console.log('error: ', e);
	}
};
