'use client'

import debounce from 'lodash.debounce'
import { useEffect, useState } from 'react'

export const useBreakpoints = (breakpoints: number[]): number => {
	const [index, setIndex] = useState(0)

	useEffect(() => {
		const updateIndex = () => {
			const width = window.innerWidth
			const newIndex = breakpoints.findLastIndex(bp => width >= bp) + 1
			setIndex(newIndex)
		}

		const debouncedUpdate = debounce(updateIndex, 150)

		updateIndex()
		window.addEventListener('resize', debouncedUpdate)

		return () => {
			window.removeEventListener('resize', debouncedUpdate)
			debouncedUpdate.cancel()
		}
	}, [breakpoints])

	return index
}
