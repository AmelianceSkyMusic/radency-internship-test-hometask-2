import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Typography } from '~/ameliance-ui/components/Typography';

import s from './HomePage.module.scss';

export function HomePage() {
	return (
		<Block component="main" className={s.HomePage}>
			<Typography>Hello</Typography>
		</Block>
	);
}
