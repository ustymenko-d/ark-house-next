'use client'

import { AnimatePresence } from 'framer-motion'
import { useAppStore } from '@/store/store'
import ReactFocusLock from 'react-focus-lock'
import Button from '../UI/Button/Button'
import AnimatedWrapper from '../AnimatedWrapper/AnimatedWrapper'
import styles from './Modal.module.css'
import clsx from 'clsx'

const Modal = () => {
	const modalOpen = useAppStore((state) => state.modalOpen)
	const toggleModalOpen = useAppStore((state) => state.toggleModalOpen)

	return (
		<AnimatePresence mode='wait'>
			{modalOpen && (
				<div
					className={clsx(
						styles.dialogWrapper,
						'fixed inset-0 w-screen h-lvh overflow-y-auto overflow-x-hidden p-4 flex items-center justify-center'
					)}>
					<div
						onClick={toggleModalOpen}
						className={clsx(
							styles.backdrop,
							'absolute inset-0 w-full h-full'
						)}></div>

					<AnimatedWrapper
						motionKey='modal'
						typeFade={false}
						duration={0.2}
						additionalClasses='flex items-center justify-center'>
						<div
							className={clsx(styles.dialog, 'p-4 bg-white shadow-xl md:p-8')}
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
										<Button onClickProp={toggleModalOpen}>
											Close&nbsp;modal&nbsp;window
										</Button>
										<Button linkHref='https://ustymenko.vercel.app'>
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
