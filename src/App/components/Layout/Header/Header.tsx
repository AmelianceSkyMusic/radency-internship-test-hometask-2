import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Grid } from '~/ameliance-ui/components/Grid';
import { Typography } from '~/ameliance-ui/components/Typography';

import { Navigation } from './Navigation/Navigation';

import s from './Header.module.scss';

export function Header() {
	return (
		<Block component="header" className={s.Header}>
			<Grid container component="section" className={s.container}>
				<Typography component="h1" display="h5" className={s.logo}>
					RADENCY
				</Typography>
				<Navigation />
			</Grid>
		</Block>
	);
}
