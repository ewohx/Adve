export interface ILocationsListData {
	image: string;
	title: string;
	link: string;
	activities: string[];
}

export interface ILocationsListState {
	data: Array<ILocationsListData>;

	getLocationsListStatus: 'idle' | 'loading' | 'failed';
}
