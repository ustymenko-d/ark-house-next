import clsx from 'clsx'
import styles from './Popup.module.css'

const Popup = ({ closePopup }: { closePopup: () => void }) => (
	<div className='fixed z-50 px-4 mx-auto -translate-x-1/2 pointer-events-none top-4 left-1/2 max-lg:container'>
		<output className='flex items-start justify-between gap-4 p-4 mx-auto bg-white shadow-2xl pointer-events-auto max-w-fit'>
			<p className='lg:w-4/5'>
				<span className='text-lg font-bold'>Successfully submitted.</span>
				<br /> <strong>Note:</strong> This is an example page, and no data has
				been sent.
			</p>
			<button
				className={clsx(styles.button, 'relative w-8 h-8 aspect-square shadow')}
				onClick={closePopup}
				aria-label='Close popup'></button>
		</output>
	</div>
)

export default Popup
