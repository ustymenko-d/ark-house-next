import React from 'react'
import styles from './ContactPopup.module.css'

interface ContactPopupProps {
	togglePopupShow: (isShow: boolean) => void
}

const ContactPopup: React.FC<ContactPopupProps> = ({ togglePopupShow }) => {
	return (
		<div className='fixed top-4 left-1/2 -translate-x-1/2 z-50 mx-auto px-4 max-lg:container pointer-events-none'>
			<div className='mx-auto p-4 bg-white shadow-2xl flex gap-4 items-start justify-between max-w-fit pointer-events-auto'>
				<p className='lg:w-4/5'>
					<span className='font-bold text-lg'>Successfully submitted.</span>
					<br /> <strong>Note:</strong> This is an example page, and no data has
					been sent.
				</p>
				<button
					className={`${styles.button} relative w-8 h-8 aspect-square shadow`}
					onClick={() => togglePopupShow(false)}
					aria-label='Close popup'></button>
			</div>
		</div>
	)
}

export default ContactPopup
