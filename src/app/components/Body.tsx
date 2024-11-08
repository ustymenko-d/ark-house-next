'use client'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import ToTopButton from '@/components/UI/ToTopButton/ToTopButton'
import useScrollBeyondThreshold from '@/hooks/useScrollBeyondThreshold'
import { useAppStore } from '@/store/store'
import { useEffect } from 'react'

type PageBodyProps = {
	children: React.ReactNode
}

const isWebpSupported = (): boolean => {
	const canvas = document.createElement('canvas')
	return canvas.toDataURL('image/webp').startsWith('data:image/webp')
}

const PageBody = ({ children }: PageBodyProps) => {
	const hasScrolledBeyond = useScrollBeyondThreshold()
	const headerNavVisible = useAppStore((state) => state.headerNavVisible)
	const webpSupport = useAppStore((state) => state.webpSupport)
	const setWebpSupport = useAppStore((state) => state.setWebpSupport)

	useEffect(() => {
		if (webpSupport === null) {
			setWebpSupport(isWebpSupported())
		}
	}, [webpSupport, setWebpSupport])
	return (
		<body
			className={`h-full flex flex-col text-neutral-950 bg-white${
				headerNavVisible ? ' overflow-hidden' : ''
			}`}>
			<Header />
			{children}
			<Footer />
			{hasScrolledBeyond && <ToTopButton />}
		</body>
	)
}

export default PageBody
