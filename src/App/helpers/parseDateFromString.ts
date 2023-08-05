import { returnError } from './returnError.ts';

export function parseDateFromString(string: string): string {
	try {
		const datePattern = /\b(\d{1,2})\/(\d{1,2})\/(\d{4})\b/g;
		const dates = string.match(datePattern);
		return dates?.join(', ') || '';
	} catch (error) {
		returnError(error);
	}
	return '';
}
