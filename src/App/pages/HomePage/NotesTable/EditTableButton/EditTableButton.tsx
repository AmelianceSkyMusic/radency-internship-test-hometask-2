import { useState } from 'react';

import type { NoteModalFields } from '~components/NoteModal/NoteModal';
import { NoteModal } from '~components/NoteModal/NoteModal';
import { TableButton } from '~components/TableButton/TableButton';
import { useTypedDispatch } from '~store/hooks/useTypedDispatch';
import { notesSlice } from '~store/notes/notesSlice';

interface EditTableButtonProps extends NoteModalFields {
	id: number;
}

export function EditTableButton({ id, name, category, content }: EditTableButtonProps) {
	const dispatch = useTypedDispatch();
	const { actions } = notesSlice;

	const [openNoteModal, setOpenNoteModal] = useState(false);

	const handleNoteButtonOnClick = () => {
		setOpenNoteModal(true);
	};

	const handleNodalOnClose = () => {
		setOpenNoteModal(false);
	};

	const handleModalOnApply = (fields: NoteModalFields) => {
		dispatch(
			actions.editNote({
				id,
				name: fields.name,
				category: fields.category,
				content: fields.content,
			}),
		);
	};

	return (
		<>
			<TableButton icon="icon--edit" onClick={handleNoteButtonOnClick} />
			{openNoteModal && (
				<NoteModal
					title="EDIT NOTE"
					name={name}
					category={category}
					content={content}
					onClose={handleNodalOnClose}
					onApply={handleModalOnApply}
				/>
			)}
		</>
	);
}
