import Link from 'next/link'

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	to?: string
	children: string
}

const Button = ({ to, children, onClick }: IButtonProps) =>
	to ? (
		<Link
			href={to}
			className='button-with-icon'>
			{children}
		</Link>
	) : (
		<button
			className='button-with-icon'
			onClick={onClick}>
			{children}
		</button>
	)

export default Button
