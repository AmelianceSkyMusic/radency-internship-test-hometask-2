import { returnError } from './returnError.ts';

export function getObjKeyByValue<T>(object: Record<string, T>, value: T): string | undefined {
	try {
		return Object.keys(object).find((key) => object[key] === value);
	} catch (error) {
		returnError(error);
	}
}
