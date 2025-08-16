'use client'

import clsx from 'clsx'

import { useAppStore } from '@/store'

interface IArticleButtonProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode
}

const ArticleButton = ({ children, ...rest }: IArticleButtonProps) => {
	const toggleModalOpen = useAppStore(s => s.toggleModalOpen)
	const isModalOpen = useAppStore(s => s.modalOpen)

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Tab') return
		if (e.key === ' ' || e.key === 'Enter') {
			e.preventDefault()
			toggleModalOpen()
		}
	}

	return (
		<div
			role='button'
			aria-haspopup='dialog'
			aria-expanded={isModalOpen}
			tabIndex={0}
			className={clsx(
				'bg-neutral-100 cursor-pointer transition-[outline-offset] duration-150',
				'hover:outline hover:outline-2 hover:outline-dark-color hover:outline-offset-2',
				'focus-visible:outline focus-visible:outline-2 focus-visible:outline-dark-color focus-visible:outline-offset-2'
			)}
			onClick={toggleModalOpen}
			onKeyDown={handleKeyDown}
			{...rest}>
			{children}
		</div>
	)
}

export default ArticleButton
