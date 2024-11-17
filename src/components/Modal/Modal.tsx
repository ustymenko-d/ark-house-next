'use client'

import React from 'react'
import Button from '../UI/Button/Button'
import styles from './Modal.module.css'
import { useAppStore } from '@/store/store'

const Modal: React.FC = () => {
	const toggleModalOpen = useAppStore((state) => state.toggleModalOpen)

	const handleClose = () => {
		toggleModalOpen()
	}

	return (
		<div
			className={`${styles.dialogWrapper} fixed inset-0 w-screen h-lvh overflow-y-auto overflow-x-hidden p-4 flex items-center justify-center`}>
			<div
				onClick={handleClose}
				className={`${styles.backdrop} absolute inset-0 w-full h-full`}></div>

			<div
				className={`${styles.dialog} p-4 bg-white md:p-8 max-w`}
				role='dialog'
				aria-modal={true}
				aria-labelledby='dialog-title'
				aria-describedby='dialog-description'>
				<div className='min-h-full'>
					<div>
						<h2 className='mb-2 text-xl md:text-4xl'>
							This is an example page
						</h2>
						<p className='mb-4 md:text-2xl'>
							So this link is not real. You can continue viewing the page by
							closing this modal window or return to the portfolio.
						</p>
					</div>
					<div className='flex flex-col md:items-start gap-4'>
						<Button onClickProp={handleClose}>
							Close&nbsp;modal&nbsp;window
						</Button>
						<Button linkHref='https://ustymenko.vercel.app'>
							Back&nbsp;to&nbsp;portfolio
						</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Modal
