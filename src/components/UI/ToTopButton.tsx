'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import useScrollBeyondThreshold from '@/hooks/useScrollBeyondThreshold'

const ToTopButton = () => {
	const hasScrolledBeyond = useScrollBeyondThreshold(50)

	const handleGoToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

	return (
		<AnimatePresence mode='wait'>
			{hasScrolledBeyond && (
				<div className='fixed inset-0 z-20 pointer-events-none'>
					<AnimatedWrapper
						typeFade={false}
						duration={0.2}
						className='h-full'>
						<button
							onClick={handleGoToTop}
							aria-label='Scroll to top'
							className={clsx(
								'x-[3] bg-[#f8f8f8] pointer-events-auto box-content w-5 h-5 fixed bottom-4 right-4 border border-dark-color p-4 transition-all duration-200 text-dark-color shadow outline-dark-color',
								'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4',
								'hover:outline hover:outline-1 hover:outline-offset-4',
								'active:outline active:outline-1 active:outline-offset-4',
								'after:content-[url("/img/icons/arrow-up.svg")] after:absolute after:w-full after:h-full after:inset-0 after:scale-75'
							)}></button>
					</AnimatedWrapper>
				</div>
			)}
		</AnimatePresence>
	)
}

export default ToTopButton
