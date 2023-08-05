import { returnError } from './returnError.ts';

export function getFormattedDate(dateString: number, format = 'en-US') {
	try {
		return new Intl.DateTimeFormat(format, { dateStyle: 'long' }).format(new Date(dateString));
	} catch (error) {
		returnError(error);
	}
}
