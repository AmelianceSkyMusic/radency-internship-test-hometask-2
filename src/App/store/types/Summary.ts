import type { Category } from './Category';

export interface Summary {
	category: Category;
	active: number;
	archived: number;
}
