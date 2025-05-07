'use client'

import { AnimatePresence } from 'framer-motion'
import useScrollBeyondThreshold from '@/hooks/useScrollBeyondThreshold'
import AnimatedWrapper from '@/components/AnimatedWrapper/AnimatedWrapper'
import styles from './ToTopButton.module.css'
import clsx from 'clsx'

const ToTopButton = () => {
	const hasScrolledBeyond = useScrollBeyondThreshold(50)

	const handleGoToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<AnimatePresence mode='wait'>
			{hasScrolledBeyond && (
				<div className='fixed inset-0 z-20 pointer-events-none'>
					<AnimatedWrapper
						typeFade={false}
						duration={0.2}
						additionalClasses='h-full'>
						<button
							onClick={handleGoToTop}
							aria-label='To top button'
							className={clsx(
								styles.toTop,
								'pointer-events-auto box-content w-5 h-5 fixed bottom-4 right-4 border border-dark-color p-4 transition-all duration-300 text-dark-color shadow'
							)}></button>
					</AnimatedWrapper>
				</div>
			)}
		</AnimatePresence>
	)
}

export default ToTopButton
