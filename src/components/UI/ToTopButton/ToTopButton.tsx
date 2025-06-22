'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import useScrollBeyondThreshold from '@/hooks/useScrollBeyondThreshold'
import AnimatedWrapper from '@/components/AnimatedWrapper'
import styles from './ToTopButton.module.css'

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
							aria-label='Scroll to top'
							className={clsx(
								styles.toTop,
								'x-[3] bg-[#f8f8f8] pointer-events-auto box-content w-5 h-5 fixed bottom-4 right-4 border border-dark-color p-4 transition-all duration-300 text-dark-color shadow',
								'focus-visible:outline focus-visible:outline-1 focus-visible:outline-[var(--dark-color)] focus-visible:outline-offset-4',
								'hover:outline hover:outline-1 hover:outline-[var(--dark-color)] hover:outline-offset-4',
								'active:outline active:outline-1 active:outline-[var(--dark-color)] active:outline-offset-4'
							)}></button>
					</AnimatedWrapper>
				</div>
			)}
		</AnimatePresence>
	)
}

export default ToTopButton
