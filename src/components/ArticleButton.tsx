'use client'

import { useAppStore } from '@/store/store'

interface IArticleButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode
}

const ArticleButton = ({ children, className }: IArticleButtonProps) => {
	const toggleModalOpen = useAppStore((s) => s.toggleModalOpen)

	const handleOpenModal = (e: React.KeyboardEvent<HTMLButtonElement>) => {
		if (e.key === 'Tab') return
		e.preventDefault()
		if (e.code === 'Space' || e.code === 'Enter') toggleModalOpen()
	}

	return (
		<button
			className={className}
			onClick={toggleModalOpen}
			onKeyDown={handleOpenModal}>
			{children}
		</button>
	)
}

export default ArticleButton
