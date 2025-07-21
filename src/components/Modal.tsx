'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import ReactFocusLock from 'react-focus-lock'

import { useAppStore } from '@/store'

import AnimatedWrapper from './AnimatedWrapper'
import Button from './UI/Button'

const Modal = () => {
	const modalOpen = useAppStore((s) => s.modalOpen)
	const toggleModalOpen = useAppStore((s) => s.toggleModalOpen)

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
							onKeyDown={(e) => {
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
										<h2 className='mb-2 text-xl md:text-4xl'>
											This is an example page
										</h2>
										<p className='mb-4 md:text-2xl'>
											So this link is not real. You can continue viewing the
											page by closing this modal window or return to the
											portfolio.
										</p>
									</div>
									<div className='flex flex-col gap-4 md:items-start'>
										<Button onClick={toggleModalOpen}>
											Close&nbsp;modal&nbsp;window
										</Button>
										<Button to='https://ustymenko.vercel.app'>
											Back&nbsp;to&nbsp;portfolio
										</Button>
									</div>
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
