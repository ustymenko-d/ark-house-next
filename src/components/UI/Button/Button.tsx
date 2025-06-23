import clsx from 'clsx'
import Link from 'next/link'

import styles from './Button.module.css'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	to?: string
	children: string
}

const CLASSES = clsx(
	'relative inline-block overflow-hidden py-3 pl-8 pr-16 bg-neutral-950 text-neutral-50 font-medium text-base tracking-wide text-center shadow duration-150',
	'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--dark-color)] focus-visible:outline-offset-2',
	'hover:outline hover:outline-2 hover:outline-[var(--dark-color)] hover:outline-offset-2',
	styles.button
)

const Button = ({ to, children, onClick }: IButtonProps) =>
	to ? (
		<Link
			href={to}
			className={CLASSES}>
			{children}
		</Link>
	) : (
		<button
			className={CLASSES}
			onClick={onClick}>
			{children}
		</button>
	)

export default Button
