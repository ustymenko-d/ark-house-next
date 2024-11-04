'use client'

import { useAppStore } from '@/store/store'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import Hero from './components/sections/Hero/Hero'

const Home: React.FC = () => {
	const headerNavVisible = useAppStore((state) => state.headerNavVisible)

	return (
		<body
			className={`h-full flex flex-col text-neutral-950${
				headerNavVisible ? ' overflow-hidden' : ''
			}`}>
			<Header />
			<main className='flex-auto'>
				<Hero />
			</main>
			<Footer />
		</body>
	)
}

export default Home
