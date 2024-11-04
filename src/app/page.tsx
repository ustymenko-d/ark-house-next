'use client'

import { useAppStore } from '@/store/store'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from './components/sections/Hero/Hero'
import About from './components/sections/About/About'
import { useEffect } from 'react'

const isWebpSupported = (): boolean => {
	const canvas = document.createElement('canvas')
	return canvas.toDataURL('image/webp').startsWith('data:image/webp')
}

const Home: React.FC = () => {
	const headerNavVisible = useAppStore((state) => state.headerNavVisible)
	const webpSupport = useAppStore((state) => state.webpSupport)
	const setWebpSupport = useAppStore((state) => state.setWebpSupport)

	useEffect(() => {
		if (webpSupport === null) {
			setWebpSupport(isWebpSupported())
			console.log(4, webpSupport)
		}
	}, [webpSupport, setWebpSupport])

	return (
		<body
			className={`h-full flex flex-col text-neutral-950${
				headerNavVisible ? ' overflow-hidden' : ''
			}`}>
			<Header />
			<main className='flex-auto'>
				<Hero />
				<About />
			</main>
			<Footer />
		</body>
	)
}

export default Home
