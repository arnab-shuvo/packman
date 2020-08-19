const InstallerUtils = require('../../utils/packageInstallerUtility');
const versionFinderUtility = require('../../utils/versionFinderUtility');

//Get major version list and downloa the package
async function getSize(req: any, res: any) {
	const packageName = req.query.package;
	let majorVersions: {}[] = [];

	await versionFinderUtility.searchValidPackage(packageName).then((response: any) => {
		if (response.status === 200) {
			const regex = /(\d+\.)+[0-9]$/g;
			let versions: {}[] = [];

			const versionList = Object.keys(response.data).filter((data: string) => regex.test(data));
			const looper = versionList.length > 3 ? 3 : versions.length;

			for (let i = versionList.length; i > 0; i--) {
				if (majorVersions.length !== looper) {
					const versionData = {
						name: versionList[i - 1],
						link: response.data[versionList[i - 1]].dist.tarball,
						unpackedSize: response.data[versionList[i - 1]].dist.unpackedSize
							? (response.data[versionList[i - 1]].dist.unpackedSize / 1024).toFixed(2)
							: 0,
					};

					majorVersions.push(versionData);
				}
			}
		} else {
			res.json({
				res,
			});
		}
	});

	await InstallerUtils.preparePath(packageName, majorVersions);
	let singleVersion: any = {};
	let response: any = [];

	for await (singleVersion of majorVersions) {
		const singleResponse = await InstallerUtils.installPackage(singleVersion, packageName);
		response.push(singleResponse);
	}
	res.json({
		response,
	});
}

//Get Version's size info
async function getVersion(req: any, res: any) {
	const version: any[] = req.body;

	let singleVersion: any = {};
	for await (singleVersion of version) {
		singleVersion.packedSize = await InstallerUtils.sizeCalculator(singleVersion.path, 'zipped');
		if (singleVersion.unpackedSize === 0) {
			singleVersion.unpackedSize = await InstallerUtils.sizeCalculator(singleVersion.path, 'unzipped');
		}
	}

	await InstallerUtils.clearPath('tmp');

	res.json({
		version,
	});
}

module.exports = {
	getSize,
	getVersion,
};
