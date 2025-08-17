'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import { useLenis } from 'lenis/react';

import AnimatedWrapper from '@/components/AnimatedWrapper';
import useScrollBeyondThreshold from '@/hooks/useScrollBeyondThreshold';

const ToTopButton = () => {
	const hasScrolledBeyond = useScrollBeyondThreshold(50);

	const lenis = useLenis();

	const [isDisabled, setIsDisabled] = useState(false);

	const handleGoToTop = () => {
		if (!lenis) return;

		setIsDisabled(true);

		lenis.scrollTo(0, {
			duration: 1,
		});

		setTimeout(() => {
			setIsDisabled(false);
		}, 1000);
	};

	return (
		<AnimatePresence mode='wait'>
			{hasScrolledBeyond && (
				<div className='pointer-events-none fixed inset-0 z-20'>
					<AnimatedWrapper typeFade={false} duration={0.2} className='h-full'>
						<button
							disabled={isDisabled}
							onClick={handleGoToTop}
							aria-label='Scroll to top'
							className={clsx(
								'x-[3] pointer-events-auto fixed bottom-4 right-4 box-content h-5 w-5 border border-dark-color bg-[#f8f8f8] p-4 text-dark-color shadow outline-dark-color transition-all duration-200',
								'focus-visible:outline focus-visible:outline-1 focus-visible:outline-offset-4',
								'hover:outline hover:outline-1 hover:outline-offset-4',
								'active:outline active:outline-1 active:outline-offset-4',
								'after:absolute after:inset-0 after:h-full after:w-full after:scale-75 after:content-[url("/img/icons/arrow-up.svg")]'
							)}
						></button>
					</AnimatedWrapper>
				</div>
			)}
		</AnimatePresence>
	);
};

export default ToTopButton;
