import type { InitCategory } from './InitCategory';

export interface InitNote {
	id: number;
	name: string;
	created: number;
	category: InitCategory;
	content: string;
}
