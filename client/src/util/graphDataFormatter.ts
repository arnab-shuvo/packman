export const formatGraphData = (versions: VersionData[]) => {
	let BarData: ChartData = [];
	versions.forEach((version: VersionData) => {
		const tmp = { product: version.name, Zipped: version.packedSize, Unzipped: version.unpackedSize };
		BarData.push(tmp);
	});
	return BarData;
};
