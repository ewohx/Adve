import LocationsIcon from './icons/location.svg';
import InfoIcon from './icons/info.svg';
import { MenuItem } from "../../../contracts/entities/MenuItem";

export const HeaderItemsList: Array<MenuItem> = [
	{
		title: 'Локации',
		iconUrl: LocationsIcon,
		url: '/locations',
	},
];

export const FooterItemsList: Array<MenuItem> = [
	{
		title: 'О проекте',
		iconUrl: InfoIcon,
		url: '/about',
	},
];