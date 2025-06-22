import clsx from 'clsx'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import styles from './ContactTypeToggle.module.css'

interface IContactTypeToggleProps {
	phoneType: boolean
	toggleContactType: () => void
}

const ContactTypeToggle = ({
	phoneType,
	toggleContactType,
}: IContactTypeToggleProps) => {
	const breakpoints = useBreakpoints([640])

	return (
		<div
			className={clsx(
				styles.toggler,
				!phoneType && styles.toggler_email,
				'relative w-full flex items-center border border-dark-color text-center'
			)}>
			{['Phone', 'Email'].map((label, idx) => {
				const isPhone = idx === 0
				const selected = phoneType === isPhone
				return (
					<button
						key={label}
						type='button'
						disabled={selected}
						onClick={toggleContactType}
						className={clsx(
							styles.toggler__button,
							'px-4 border border-dark-color bg-transparent text-dark-color outline-none',
							selected && 'text-white'
						)}>
						{breakpoints ? (isPhone ? 'Phone Number' : 'Email') : label}
					</button>
				)
			})}
		</div>
	)
}

export default ContactTypeToggle
