type RootReducer = {
	suggestionStore: SuggestionStore;
	packageStore: PackageStore;
	versionStore: VersionStore;
};

interface SuggestionStore {
	suggestions: any;
}
interface PackageStore {
	package: Package;
}
interface VersionStore {
	version: VersionData[];
	selected: VersionData;
}
interface VersionData {
	link?: string;
	name?: string;
	packedSize?: number;
	path?: string;
	unpackedSize?: number;
}
interface Package {
	status?: number;
	name?: string;
	dependencies?: any;
	description?: string;
	links?: {
		npm: string;
		repository: string;
	};
	version?: string;
	releases?: [];
	keywords?: [];
	license?: string;
	date?: string;
}
