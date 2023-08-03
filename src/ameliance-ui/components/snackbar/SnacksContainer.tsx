import { Block } from '../blocks/Block';
import { Portal } from '../Portal';
import type { SnackProps } from './Snack';
import { Snack } from './Snack';

import s from './SnacksContainer.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

interface SnacksContainer {
	snacks: SnackProps[];
	position?: {
		horizontal: 'left' | 'center' | 'right';
		vertical: 'top' | 'center' | 'bottom';
	};
}

export function SnacksContainer({
	snacks,
	position = {
		horizontal: 'right',
		vertical: 'top',
	},
}: SnacksContainer) {
	const componentPositionClass = s[`${position.horizontal}-${position.vertical}`];

	if (!snacks || snacks.length <= 0) return null;

	return (
		<Portal>
			<Block className={join(s.SnacksContainer, componentPositionClass)}>
				<>
					{snacks.map((snack) => (
						<Snack
							key={snack.id}
							id={snack.id}
							message={snack.message}
							title={snack.title}
							type={snack.type}
							size={snack.size}
							position={snack.position}
							oneLine={snack.oneLine}
							onCloseButtonClick={snack.onCloseButtonClick}
							duration={snack.duration}
						/>
					))}
				</>
			</Block>
		</Portal>
	);
}
