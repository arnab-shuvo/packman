import { FETCH_PACKAGE, FETCH_VERSION, SET_SELECTED, RESET_ALL } from '../types';
import axios from 'axios';
import { INFO_URL, SIZE_URL, VERSION_URL } from '../../Constants/url';

export const storePackage = (data: PackageStore) => ({
	type: FETCH_PACKAGE,
	payload: data,
});
export const storeVersion = (data: PackageStore) => ({
	type: FETCH_VERSION,
	payload: data,
});
export const resetAll = () => ({
	type: RESET_ALL,
});

export const fetchPackage = (packageName: string) => async (dispatch: any) => {
	dispatch(resetAll());

	axios
		.get(`${INFO_URL}${packageName}`)
		.then((res: any) => {
			const response = {
				package: {
					status: res.status,
					...res.data.collected?.metadata,
				},
			};
			dispatch(storePackage(response));
			dispatch(fetchVersion(packageName));
		})
		.catch((err: any) => {
			const error = {
				package: {
					status: err.response?.status,
				},
			};
			dispatch(storePackage(error));
		});
};

export const fetchVersion = (packageName: string) => async (dispatch: any) => {
	axios
		.get(`${SIZE_URL}?package=${packageName}`)
		.then((res: any) => {
			axios
				.post(VERSION_URL, res.data.response)
				.then((res: any) => {
					dispatch(storeVersion(res.data.version));
				})
				.catch((err: any) => {
					console.log(err);
				});
		})
		.catch((err: any) => {
			console.log(err);
		});
};

export const changeVersion = (version: string) => async (dispatch: any, store: any) => {
	let { versionStore } = store();
	const newSelected = versionStore.version.find((element: VersionData) => element.name === version);
	dispatch(setSelected(newSelected));
};

export const setSelected = (data: VersionData) => ({
	type: SET_SELECTED,
	payload: data,
});
