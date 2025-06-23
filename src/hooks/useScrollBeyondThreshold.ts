import { useEffect,useState } from 'react'

const useScrollBeyondThreshold = (threshold = 100, delay = 200) => {
	const [hasScrolledBeyondThreshold, setHasScrolledBeyondThreshold] =
		useState(false)
	const [timer, setTimer] = useState<NodeJS.Timeout | null>(null)

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY
			const thresholdInPixels = window.innerHeight * (threshold / 100)

			if (timer) clearTimeout(timer)

			const newTimer = setTimeout(() => {
				setHasScrolledBeyondThreshold(scrollPosition > thresholdInPixels)
			}, delay)

			setTimer(newTimer)
		}

		window.addEventListener('scroll', handleScroll)

		return () => {
			window.removeEventListener('scroll', handleScroll)
			if (timer) clearTimeout(timer)
		}
	}, [threshold, delay, timer])

	return hasScrolledBeyondThreshold
}

export default useScrollBeyondThreshold
