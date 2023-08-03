import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Typography } from '~/ameliance-ui/components/Typography';

import s from './ArchivePage.module.scss';

export function ArchivePage() {
	return (
		<Block component="main" className={s.ArchivePage}>
			<Typography>Archive</Typography>
		</Block>
	);
}
