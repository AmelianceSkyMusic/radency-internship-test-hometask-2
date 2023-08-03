import { ROUTES } from '~constants/ROUTES';

interface NavigationItem {
	label: string;
	path: string;
	end: boolean;
}

type NavigationList = NavigationItem[];

export const navigationList: NavigationList = [
	{
		label: 'Notes',
		path: ROUTES.home,
		end: false,
	},
	{
		label: 'Archive',
		path: ROUTES.archive,
		end: false,
	},
];
