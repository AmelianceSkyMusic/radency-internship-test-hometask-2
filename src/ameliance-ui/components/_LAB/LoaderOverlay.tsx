import { Backdrop } from '../Backdrop/Backdrop';
import { Block } from '../blocks/Block';
import { LoaderLine } from '../Loader/LoaderLine';
import { Portal } from '../Portal';

import s from './LoaderOverlay.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

export function LoaderOverlay() {
	return (
		<Portal>
			<Block className={join(s.LoaderOverlay)}>
				<Backdrop show />
				<LoaderLine />
			</Block>
		</Portal>
	);
}
