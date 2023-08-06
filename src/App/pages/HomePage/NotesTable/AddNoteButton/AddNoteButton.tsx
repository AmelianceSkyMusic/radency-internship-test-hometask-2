import { useState } from 'react';

import type { NoteModalFields } from '~components/NoteModal/NoteModal';
import { NoteModal } from '~components/NoteModal/NoteModal';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { notesSlice } from '~store/notes/notesSlice';

import { Block } from '~/ameliance-ui/components/blocks';
import { Button } from '~/ameliance-ui/components/Button';

import s from './AddNoteButton.module.scss';

export function AddNoteButton() {
	const dispatch = useTypedDispatch();
	const { actions } = notesSlice;

	const [openNoteModal, setOpenNoteModal] = useState(false);

	const handleNoteButtonOnClick = () => {
		setOpenNoteModal(true);
	};

	const handleNodalOnClose = () => {
		setOpenNoteModal(false);
	};

	const handleModalOnApply = ({ name, category, content }: NoteModalFields) => {
		dispatch(actions.addNote({ name, category, content }));
	};

	return (
		<Block className={s.buttonContainer}>
			<Button size="small" className={s.button} onClick={handleNoteButtonOnClick}>
				Add Note
			</Button>
			{openNoteModal && (
				<NoteModal title="ADD NOTE" onClose={handleNodalOnClose} onApply={handleModalOnApply} />
			)}
		</Block>
	);
}
