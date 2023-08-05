import type { Category } from './Category';

export interface Note {
	id: number;
	name: string;
	created: string;
	category: Category;
	content: string;
	dates: string;
}
