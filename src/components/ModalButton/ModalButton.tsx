'use client'

import { useAppStore } from '@/store/store'
import React from 'react'

interface ModalButtonProps {
	children: React.ReactNode
	classNames: string
}

const ModalButton: React.FC<ModalButtonProps> = ({ children, classNames }) => {
	const toggleModalOpen = useAppStore((state) => state.toggleModalOpen)

	const handleOpenModal = () => {
		toggleModalOpen()
	}

	return (
		<div
			tabIndex={0}
			className={classNames}
			role='button'
			onClick={handleOpenModal}
			onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
				if (!(e.code === 'Tab')) {
					e.preventDefault()
				}
				if (e.code === 'Space' || e.code === 'Enter') {
					handleOpenModal()
				}
			}}>
			{children}
		</div>
	)
}

export default ModalButton
