import clsx from 'clsx';
import Link from 'next/link';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	to?: string;
	children: string;
}

const Button = ({ to, children, onClick, className }: Props) =>
	to ? (
		<Link href={to} className={clsx(className, 'button-with-icon')}>
			{children}
		</Link>
	) : (
		<button className={clsx(className, 'button-with-icon')} onClick={onClick}>
			{children}
		</button>
	);

export default Button;
