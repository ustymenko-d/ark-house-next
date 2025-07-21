import clsx from 'clsx'

const Popup = ({ closePopup }: { closePopup: () => void }) => (
	<div className='fixed z-50 px-4 mx-auto -translate-x-1/2 pointer-events-none top-4 left-1/2 max-lg:container'>
		<output className='flex items-start justify-between gap-4 p-4 mx-auto bg-white shadow-2xl pointer-events-auto max-w-fit'>
			<p className='lg:w-4/5'>
				<span className='text-lg font-bold'>Successfully submitted.</span>
				<br /> <strong>Note:</strong> This is an example page, and no data has been sent.
			</p>
			<button
				onClick={closePopup}
				aria-label='Close popup'
				className={clsx(
					'relative cursor-pointer bg-[#f8f8f8] duration-150',

					'hover:outline hover:outline-1 hover:outline-dark-color',
					'hover:outline-offset-[1.5px]',
					'focus-visible:outline focus-visible:outline-1 focus-visible:outline-dark-color',
					'focus-visible:outline-offset-[1.5px]',

					'w-8 h-8 aspect-square shadow',

					"before:content-['']",
					'before:absolute before:top-1/2 before:left-1/2',
					'before:translate-x-[-50%] before:translate-y-[-50%]',
					'before:rotate-[45deg]',
					'before:block before:h-[2px] before:w-1/2 before:bg-[var(--dark-color)]',

					"after:content-['']",
					'after:absolute after:top-1/2 after:left-1/2',
					'after:translate-x-[-50%] after:translate-y-[-50%]',
					'after:rotate-[-45deg]',
					'after:block after:h-[2px] after:w-1/2 after:bg-[var(--dark-color)]'
				)}
			/>
		</output>
	</div>
)

export default Popup
