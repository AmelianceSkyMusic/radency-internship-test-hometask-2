import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Grid } from '~/ameliance-ui/components/Grid';

import { NotesTable } from './NotesTable/NotesTable';
import { Typography } from '~/ameliance-ui/components/Typography';

import s from './HomePage.module.scss';

export function HomePage() {
	return (
		<Block component="main" className={s.HomePage}>
			<Grid container component="section" className={s.container}>
				<NotesTable />
				
			</Grid>
		</Block>
	);
}
