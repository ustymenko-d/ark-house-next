import clsx from 'clsx';

import { useBreakpoints } from '@/hooks/useBreakpoints';

interface Props {
	phoneType: boolean;
	toggleContactType: () => void;
}

const ContactTypeToggle = ({ phoneType, toggleContactType }: Props) => {
	const breakpoints = useBreakpoints([640]);

	return (
		<div
			className={clsx(
				'relative flex w-full items-center border border-dark-color text-center',

				'sm:max-w-[60%] xl:max-w-[50%]',

				'before:absolute before:top-0 before:content-[""]',
				'before:h-full before:w-1/2 before:bg-dark-color',
				'before:pointer-events-none before:duration-300 before:ease-linear',

				phoneType ? 'before:left-0' : 'before:left-1/2'
			)}>
			{['Phone', 'Email'].map((label, idx) => {
				const isPhone = idx === 0;
				const selected = phoneType === isPhone;

				return (
					<button
						key={label}
						type='button'
						disabled={selected}
						onClick={toggleContactType}
						className={clsx(
							'z-[1] flex-1 border border-dark-color bg-transparent py-2.5 outline-none transition-colors duration-300',

							selected ? 'text-white' : 'text-dark-color',
							!selected &&
								'hover:border-transparent focus-visible:border-transparent active:border-transparent'
						)}>
						{breakpoints ? (isPhone ? 'Phone Number' : 'Email') : label}
					</button>
				);
			})}
		</div>
	);
};

export default ContactTypeToggle;
