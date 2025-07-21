import clsx from 'clsx'

import { useBreakpoints } from '@/hooks/useBreakpoints'

interface IContactTypeToggleProps {
	phoneType: boolean
	toggleContactType: () => void
}

const ContactTypeToggle = ({ phoneType, toggleContactType }: IContactTypeToggleProps) => {
	const breakpoints = useBreakpoints([640])

	return (
		<div
			className={clsx(
				'relative w-full flex items-center border border-dark-color text-center',

				'sm:max-w-[60%] xl:max-w-[50%]',

				"before:content-[''] before:absolute before:top-0",
				'before:h-full before:w-1/2 before:bg-dark-color',
				'before:duration-300 before:ease-linear before:pointer-events-none',

				phoneType ? 'before:left-0' : 'before:left-1/2'
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
							'z-[1] flex-1 py-2.5 border border-dark-color bg-transparent outline-none transition-colors duration-300',

							selected ? 'text-white' : 'text-dark-color',
							!selected &&
								'hover:border-transparent active:border-transparent focus-visible:border-transparent'
						)}>
						{breakpoints ? (isPhone ? 'Phone Number' : 'Email') : label}
					</button>
				)
			})}
		</div>
	)
}

export default ContactTypeToggle
