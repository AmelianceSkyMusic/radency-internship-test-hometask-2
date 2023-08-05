import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';

import { ROUTES } from '~constants/ROUTES';

import { Block } from '~/ameliance-ui/components/blocks/Block';
import { Button, ButtonLink } from '~/ameliance-ui/components/Button';
import { Grid } from '~/ameliance-ui/components/Grid';
import { Typography } from '~/ameliance-ui/components/Typography';

import { PageNotFound } from './PageNotFound/PageNotFound';

import s from './ErrorPage.module.scss';

import { clearLocalStorageAndReload } from 'ameliance-scripts/scripts/clearLocalStorageAndReload';

export function ErrorPage() {
	const error = useRouteError();
	const navigate = useNavigate();

	const handleResetButtonOnClick = () => {
		clearLocalStorageAndReload();
	};

	if (isRouteErrorResponse(error) && error.status) return <PageNotFound />;

	return (
		<Block component="main">
			<Grid container component="section" className={s.container}>
				<>
					<Block className={s.buttons}>
						<Button size="small" onClick={() => navigate(ROUTES.home)}>
							To Main
						</Button>
						<Button type="secondary" size="small" onClick={handleResetButtonOnClick}>
							Remove data and reload
						</Button>
						<ButtonLink
							type="secondary"
							size="small"
							href="https://t.me/amelianceskymusic"
							blank
						>
							Write me on Telegram
						</ButtonLink>
					</Block>
					<Block className={s.title}>
						<Typography component="h3">
							Sorry, something went wrong
							<br />
							¯\_(ツ)_/¯
						</Typography>
					</Block>
					<Block className={s.description}>
						<>
							<Typography component="h4">
								{isRouteErrorResponse(error) && error.status}
							</Typography>
							<Typography component="h5">
								{error instanceof Error && error.message}
								{isRouteErrorResponse(error) && error.statusText}
								{isRouteErrorResponse(error) && error.data.message}
							</Typography>
						</>
					</Block>
				</>
			</Grid>
		</Block>
	);
}
