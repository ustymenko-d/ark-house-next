import clsx from 'clsx'
import Link from 'next/link'
import styles from './Button.module.css'

interface ButtonProps {
	linkHref?: string
	children: string
	onClickProp?: () => void
}

const Button = ({ linkHref, children, onClickProp }: ButtonProps) => {
	const className = clsx(
		'relative inline-block overflow-hidden py-3 pl-8 pr-16 bg-neutral-950 text-neutral-50 font-medium text-base tracking-wide text-center shadow',
		styles.button
	)

	return linkHref ? (
		<Link
			href={linkHref}
			className={className}>
			{children}
		</Link>
	) : (
		<button
			className={className}
			onClick={onClickProp}>
			{children}
		</button>
	)
}

export default Button
