import React from 'react'
import styles from './ToTopButton.module.css'

const ToTopButton: React.FC = () => {
	return (
		<button
			className={`${styles.toTop} w-5 h-5 fixed bottom-4 right-4 border border-dark-color p-4 transition-all duration-300 text-dark-color`}></button>
	)
}

export default ToTopButton
