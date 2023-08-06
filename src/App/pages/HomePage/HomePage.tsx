import { SummaryTable } from '~components/SummaryTable/SummaryTable';

import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Grid } from '~/ameliance-ui/components/Grid';

import { NotesTable } from './NotesTable/NotesTable';

import s from './HomePage.module.scss';

export function HomePage() {
	return (
		<>
			<Block component="main" className={s.HomePage}>
				<Grid container component="section" className={s.container}>
					<Block className={s.notes}>
						<NotesTable />
					</Block>
					<SummaryTable />
				</Grid>
			</Block>
		</>
	);
}
