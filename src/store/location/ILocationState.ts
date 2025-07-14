export interface ITab {
	index: number;
	title: string;
	htmlContent: string;
}

export interface ILocationData {
	title: string;
	titlePhotoUrl: string;
	tabs: Array<ITab>;
	tags: Array<string>;
	viewsCount: number;
}

export interface ILocationState {
	data: ILocationData;

	getLocationStatus: 'idle' | 'loading' | 'failed';
}
