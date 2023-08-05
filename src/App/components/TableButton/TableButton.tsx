import { Button } from '~/ameliance-ui/components/Button';

interface TableButtonProps {
	icon: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export function TableButton({ icon, onClick }: TableButtonProps) {
	return (
		<Button size="small" onClick={onClick}>
			<p className={icon} />
		</Button>
	);
}
