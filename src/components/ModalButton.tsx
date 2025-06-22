'use client'

import { useAppStore } from '@/store/store'

interface ModalButtonProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

const ModalButton = ({ children, className }: ModalButtonProps) => {
	const toggleModalOpen = useAppStore((s) => s.toggleModalOpen)

	return (
		<div
			tabIndex={0}
			className={className}
			role='button'
			onClick={toggleModalOpen}
			onKeyDown={(e: React.KeyboardEvent<HTMLDivElement>) => {
				if (e.key === 'Tab') return
				e.preventDefault()
				if (e.code === 'Space' || e.code === 'Enter') {
					toggleModalOpen()
				}
			}}>
			{children}
		</div>
	)
}

export default ModalButton
