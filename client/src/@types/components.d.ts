interface Logo {
	align?: 'center' | 'left' | 'right';
}
interface SuggestionItem {
	name: string;
	description: string;
}

interface Chart {
	versions: VersionData[];
}
type ChartData = {
	product?: string;
	Zipped?: number;
	Unzipped?: number;
}[];
