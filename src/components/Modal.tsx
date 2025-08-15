'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import ReactFocusLock from 'react-focus-lock'

import { useAppStore } from '@/store'

import AnimatedWrapper from './AnimatedWrapper'
import Button from './UI/Button'
import CloseButton from './UI/CloseButton'

const Modal = () => {
	const modalOpen = useAppStore(s => s.modalOpen)
	const toggleModalOpen = useAppStore(s => s.toggleModalOpen)

	return (
		<AnimatePresence mode='wait'>
			{modalOpen && (
				<div
					className={clsx(
						'z-[100] fixed inset-0 w-screen h-lvh overflow-y-auto overflow-x-hidden p-4 flex items-center justify-center',
						modalOpen && 'isDialogOpen'
					)}>
					<div
						onClick={toggleModalOpen}
						className='absolute inset-0 w-full h-full bg-black/50'></div>

					<AnimatedWrapper
						motionKey='modal'
						typeFade={false}
						duration={0.2}
						className='flex items-center justify-center'>
						<div
							className='z-[95] p-4 bg-white shadow-xl md:p-8 md:max-w-screen-sm'
							role='dialog'
							onKeyDown={e => {
								if (e.code === 'Escape') {
									toggleModalOpen()
								}
							}}
							aria-modal={true}
							aria-labelledby='dialog-title'
							aria-describedby='dialog-description'>
							<ReactFocusLock
								returnFocus
								disabled={!modalOpen}>
								<div className='min-h-full'>
									<div>
										<div className='flex justify-between gap-4'>
											<h2 className='mb-6 text-2xl md:text-4xl'>This is an example page</h2>
											<CloseButton
												onClick={toggleModalOpen}
												aria-label='Close modal'
											/>
										</div>
										<p className='mb-4 md:text-lg'>
											So this link is not real. You can continue viewing the page by closing this
											modal window or return to the portfolio.
										</p>
									</div>

									<Button to='https://ustymenko.vercel.app'>Back&nbsp;to&nbsp;portfolio</Button>
								</div>
							</ReactFocusLock>
						</div>
					</AnimatedWrapper>
				</div>
			)}
		</AnimatePresence>
	)
}

export default Modal
