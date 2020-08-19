const axios = require('axios');

const versionInfoFinderUtity = {
	async searchValidPackage(packageName: string) {
		let res: any;
		await axios
			.get(`https://registry.npmjs.org/${packageName}`)
			.then((response: any) => {
				res = {
					status: 200,
					message: 'Package Found',
					data: response.data.versions,
				};
			})
			.catch((err: any) => {
				if (err.response.status === 404) {
					res = {
						status: 404,
						message: 'Invalid Package',
					};
				} else {
					res = {
						status: 500,
						message: 'Ops!! Something is not right',
					};
				}
			});
		return res;
	},
};

module.exports = versionInfoFinderUtity;
