'use client';

import clsx from 'clsx';

const CloseButton = ({
	onClick,
	...rest
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
	const { 'aria-label': ariaLabel, ...buttonProps } = rest;

	return (
		<button
			onClick={onClick}
			aria-label={ariaLabel}
			className={clsx(
				'relative cursor-pointer bg-[#f8f8f8] duration-150',

				'hover:outline hover:outline-1 hover:outline-dark-color',
				'hover:outline-offset-[1.5px]',
				'focus-visible:outline focus-visible:outline-1 focus-visible:outline-dark-color',
				'focus-visible:outline-offset-[1.5px]',

				'aspect-square h-8 w-8 shadow',

				"before:content-['']",
				'before:absolute before:left-1/2 before:top-1/2',
				'before:translate-x-[-50%] before:translate-y-[-50%]',
				'before:rotate-[45deg]',
				'before:block before:h-[2px] before:w-1/2 before:bg-[var(--dark-color)]',

				"after:content-['']",
				'after:absolute after:left-1/2 after:top-1/2',
				'after:translate-x-[-50%] after:translate-y-[-50%]',
				'after:rotate-[-45deg]',
				'after:block after:h-[2px] after:w-1/2 after:bg-[var(--dark-color)]'
			)}
			{...buttonProps}
		/>
	);
};
export default CloseButton;
