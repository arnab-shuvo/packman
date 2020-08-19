import path = require('path');
const fs = require('fs');
var download = require('download-to-file');
const childProcess = require('child_process');
var fsUtils = require('nodejs-fs-utils');
const axios = require('axios');
const tarball = require('tarball-extract');

const InstallerUtils = {
	getInstallPath(packageName: string, name?: string) {
		return path.join('tmp', packageName, name ? name : '');
	},

	async preparePath(packageName: string, majorVersions: []) {
		const installPath = this.getInstallPath(packageName);
		if (!fs.existsSync('tmp')) {
			fs.mkdirSync('tmp');
		}
		if (!fs.existsSync(installPath)) {
			fs.mkdirSync(installPath);
		}

		let version: any = {};
		for await (version of majorVersions) {
			const filePath = this.getInstallPath(packageName, version.name);
			if (!fs.existsSync(filePath)) {
				fs.mkdirSync(filePath);
			}
		}
	},

	async installPackage(singleVersion: any, packageName: string) {
		const installPath = this.getInstallPath(packageName, singleVersion.name);
		const path = `${installPath}/${singleVersion.name}.tgz`;
		singleVersion.path = path;
		const writer = fs.createWriteStream(path);

		const res = await axios.get(singleVersion.link, { responseType: 'stream' }).then((res: any) => {
			res.data.pipe(writer);

			writer.on('finish', async () => {
				if (singleVersion.unpackedSize === 0) {
					await tarball.extractTarball(path, `${installPath}/${singleVersion.name}`, function (err: any) {
						if (err) console.log(err);
					});
				}
			});
			writer.on('error', () => {
				console.log('downaloded error');
			});
		});

		return singleVersion;
	},

	async sizeCalculator(path: string, type: string) {
		if (type === 'zipped') {
			if (fs.existsSync(path)) {
				var { size } = fs.statSync(path);
				return (size / 1024).toFixed(2);
			}
			return 0;
		} else {
			try {
				const pathToFolder = path.split('.tgz')[0];
				const newPath = `${pathToFolder}/package`;
				var unPackedSize = fsUtils.fsizeSync(newPath, {
					symbolicLinks: false,
				});
				const finalSize = (unPackedSize / 1024).toFixed(2);

				return finalSize;
			} catch (error) {
				console.log(error, 'error got');
				return 0;
			}
		}
	},

	async clearPath(dir: any) {
		const command = `sudo rm -rf ${dir}`;
		await childProcess.exec(command, function (error: any, stdout: any, stderr: any) {});
	},
};

module.exports = InstallerUtils;
