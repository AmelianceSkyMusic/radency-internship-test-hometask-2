import { APP } from '~constants/APP';

import { returnError as returnErr } from 'ameliance-scripts';

export function returnError(error: unknown): string {
	return returnErr(error, APP.name, 1);
}
