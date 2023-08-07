import type { SubmitHandler } from 'react-hook-form';
import { useForm } from 'react-hook-form';

import { CATEGORIES } from '~constants/CATEGORIES';
import { getObjKeyByValue } from '~helpers/getObjKeyByValue';
import type { Category } from '~store/types/Category';

import { Dropdown, TextArea, TextInput } from '~/ameliance-ui/components/Inputs';
import { Modal } from '~/ameliance-ui/components/Modal';
import { Typography } from '~/ameliance-ui/components/Typography';

import s from './NoteModal.module.scss';

export interface NoteModalFields {
	name: string;
	category: Category;
	content: string;
}

interface NoteModalProps {
	title?: string;
	onClose: () => void;
	onApply: ({ name, category, content }: NoteModalFields) => void;
	name?: string;
	category?: string;
	content?: string;
}

interface FormFields {
	name: string;
	category: Category | string;
	content: string;
}

export function NoteModal({
	title,
	name = '',
	category = '',
	content = '',
	onClose,
	onApply,
}: NoteModalProps) {
	const {
		register,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<FormFields>({
		mode: 'onSubmit',
		defaultValues: {
			name,
			category,
			content,
		},
	});

	const registers = {
		name: register('name', { required: 'Field is so empty. Need some information!' }),
		category: register('category', { required: 'Field is so empty. Need some information!' }),
		content: register('content', { required: 'Field is so empty. Need some information!' }),
	};

	const onSubmit: SubmitHandler<FormFields> = (fields: FormFields) => {
		onApply({
			name: fields.name,
			category: getObjKeyByValue(CATEGORIES, fields.category) as Category,
			content: fields.content,
		});
	};

	return (
		<Modal
			onClose={onClose}
			noTitle
			mainButton={{
				text: 'Apply',
				type: 'secondary',
				isSubmit: true,
				form: 'form',
				close: isValid,
			}}
			secondButton={{
				text: 'Cancel',
				type: 'secondary',
				close: true,
			}}
		>
			<form id="form" onSubmit={handleSubmit(onSubmit)} className={s.form}>
				<Typography component="h4" className="">
					{title}
				</Typography>
				<TextInput register={registers.name} errors={errors}>
					TextInput
				</TextInput>
				<Dropdown
					register={registers.category}
					options={Object.values(CATEGORIES)}
					blank
					errors={errors}
				>
					Category
				</Dropdown>
				<TextArea register={registers.content} className={s.content} errors={errors}>
					Content
				</TextArea>
			</form>
		</Modal>
	);
}
