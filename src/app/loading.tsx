'use client'

import { FC, useEffect, useState } from 'react'

const Loading: FC = () => {
	const [isLoading, setIsLoading] = useState(true)

	useEffect(() => {
		const animationTime = 3000
		const startTime = performance.now()

		const simulatePageLoad = setTimeout(() => {
			const elapsedTime = performance.now() - startTime
			const remainingTime = animationTime - elapsedTime

			setTimeout(() => setIsLoading(false), Math.max(remainingTime, 0))
		}, 0)

		return () => clearTimeout(simulatePageLoad)
	}, [])

	if (!isLoading) return null

	return (
		<div
			className={`bg-white fixed z-50 inset-0 flex items-center justify-center`}>
			<div className='relative overflow-hidden w-60 h-60 flex justify-center items-center'>
				<div className='absolute w-full h-full bg-transparent border border-neutral-900'></div>
				<div
					className={`bg-white absolute w-9/12 h-3/4 border border-neutral-900`}></div>
				<div
					className={`-z-10 w-96 h-96 aspect-square animate-moveDiagonal absolute rotate-45 bg-dark-color`}></div>
			</div>
		</div>
	)
}

export default Loading
