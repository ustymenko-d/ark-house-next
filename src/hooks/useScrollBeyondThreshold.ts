'use client'

import { useEffect, useRef, useState } from 'react'

const useScrollBeyondThreshold = (
	threshold: number = 100,
	delay: number = 200
) => {
	const [hasScrolledBeyondThreshold, setHasScrolledBeyondThreshold] =
		useState(false)
	const timerRef = useRef<NodeJS.Timeout | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const thresholdInPixels = window.innerHeight * (threshold / 100)

			if (timerRef.current) clearTimeout(timerRef.current)

			timerRef.current = setTimeout(() => {
				setHasScrolledBeyondThreshold(scrollPosition > thresholdInPixels)
			}, delay)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			if (timerRef.current) clearTimeout(timerRef.current)
		}
	}, [threshold, delay])

	return hasScrolledBeyondThreshold
}

export default useScrollBeyondThreshold
