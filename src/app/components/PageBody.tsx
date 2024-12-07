'use client'

import { FC, useEffect, useState } from 'react'
import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import Modal from '@/components/Modal/Modal'
import ToTopButton from '@/components/UI/ToTopButton/ToTopButton'
import useScrollBeyondThreshold from '@/hooks/useScrollBeyondThreshold'
import { useAppStore } from '@/store/store'
import Loading from '../loading'

type PageBodyProps = {
	children: React.ReactNode
}

const isWebpSupported = (): boolean => {
	const canvas = document.createElement('canvas')
	return canvas.toDataURL('image/webp').startsWith('data:image/webp')
}

const PageBody: FC<PageBodyProps> = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const hasScrolledBeyond = useScrollBeyondThreshold(50)
	const headerNavVisible = useAppStore((state) => state.headerNavVisible)
	const modalOpen = useAppStore((state) => state.modalOpen)
	const webpSupport = useAppStore((state) => state.webpSupport)
	const setWebpSupport = useAppStore((state) => state.setWebpSupport)

	useEffect(() => {
		const timer = setTimeout(() => setIsLoading(false), 100)
		return () => clearTimeout(timer)
	}, [])

	useEffect(() => {
		if (webpSupport === null) {
			setWebpSupport(isWebpSupported())
		}
	}, [webpSupport, setWebpSupport])

	if (isLoading) {
		return (
			<body>
				<Loading />
			</body>
		)
	}

	return (
		<body
			className={`overflow-x-clip${
				headerNavVisible ? ' isOpenNav ' : ' '
			}h-full flex flex-col text-neutral-950 bg-white`}>
			<Header />
			{children}
			<Footer />
			{modalOpen && <Modal />}
			{hasScrolledBeyond && <ToTopButton />}
		</body>
	)
}

export default PageBody
