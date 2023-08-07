import { forwardRef } from 'react';

import s from './AudioPlayer.module.scss';

import { join } from 'ameliance-scripts/scripts/join';

type AudioPlayerElement = HTMLAudioElement;

export type AudioPlayerProps = React.DetailedHTMLProps<
	React.AudioHTMLAttributes<AudioPlayerElement>,
	AudioPlayerElement
>;

export const AudioPlayer = forwardRef<AudioPlayerElement, AudioPlayerProps>(
	({ className, ...rest }, ref) => (
		<audio className={join(s.AudioPlayer, className)} ref={ref} {...rest}>
			<track kind="captions" />
		</audio>
	),
);

AudioPlayer.displayName = 'AudioPlayer';
