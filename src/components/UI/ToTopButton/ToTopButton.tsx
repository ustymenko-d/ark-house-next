import React from 'react'
import styles from './ToTopButton.module.css'

const ToTopButton: React.FC = () => {
	const handleGoToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<button
			onClick={handleGoToTop}
			aria-label='To top button'
			className={`${styles.toTop} box-content w-5 h-5 fixed bottom-4 right-4 border border-dark-color p-4 transition-all duration-300 text-dark-color shadow`}></button>
	)
}

export default ToTopButton
