import { SummaryTable } from '~components/SummaryTable/SummaryTable';

import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Grid } from '~/ameliance-ui/components/Grid';

import { ArchiveTable } from './ArchiveTable/ArchiveTable';

import s from './ArchivePage.module.scss';

export function ArchivePage() {
	return (
		<Block component="main" className={s.ArchivePage}>
			<Grid container component="section" className={s.container}>
				<Block className={s.notes}>
					<ArchiveTable />
				</Block>
				<SummaryTable />
			</Grid>
		</Block>
	);
}
