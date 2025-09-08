'use client';

import clsx from 'clsx';
import { AnimatePresence } from 'framer-motion';
import ReactFocusLock from 'react-focus-lock';

import { useAppStore } from '@/store';

import AnimatedWrapper from './AnimatedWrapper';
import Button from './UI/Button';
import CloseButton from './UI/CloseButton';

const Modal = () => {
	const modalOpen = useAppStore((s) => s.modalOpen);
	const toggleModalOpen = useAppStore((s) => s.toggleModalOpen);

	return (
		<AnimatePresence mode='wait'>
			{modalOpen && (
				<div
					className={clsx(
						'fixed inset-0 z-[100] flex h-lvh w-screen items-center justify-center overflow-y-auto overflow-x-hidden p-4',
						modalOpen && 'isDialogOpen'
					)}>
					<div
						onClick={toggleModalOpen}
						className='absolute inset-0 h-full w-full bg-black/40'></div>

					<AnimatedWrapper
						motionKey='modal'
						variant='opacityScale'
						duration={0.2}
						className='flex items-center justify-center'>
						<div
							className='z-[95] max-w-md bg-white p-6 shadow-xl md:max-w-lg md:p-10'
							role='dialog'
							onKeyDown={(e) => {
								if (e.code === 'Escape') {
									toggleModalOpen();
								}
							}}
							aria-modal={true}
							aria-labelledby='dialog-title'
							aria-describedby='dialog-description'>
							<ReactFocusLock returnFocus disabled={!modalOpen}>
								<div className='flex flex-col gap-6'>
									<div className='flex justify-between gap-4'>
										<h3 className='text-2xl font-semibold leading-tight md:text-3xl'>
											This is an example page
										</h3>
										<CloseButton
											onClick={toggleModalOpen}
											aria-label='Close modal'
										/>
									</div>

									<p className='text-base leading-relaxed md:text-lg'>
										This link isn’t real. Close this window to keep viewing the
										page, or go back to the portfolio.
									</p>

									<Button to='https://ustymenko.vercel.app'>
										Back&nbsp;to&nbsp;portfolio
									</Button>
								</div>
							</ReactFocusLock>
						</div>
					</AnimatedWrapper>
				</div>
			)}
		</AnimatePresence>
	);
};

export default Modal;
