'use client'

import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
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
		</body>
	)
}

export default PageBody
