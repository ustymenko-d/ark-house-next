'use client'

import { useAppStore } from '@/store/store'
import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'

const Home: React.FC = () => {
	const headerNavVisible = useAppStore((state) => state.headerNavVisible)

	return (
		<body
			className={`h-full flex flex-col text-neutral-950${
				headerNavVisible ? ' overflow-hidden' : ''
			}`}>
			<Header />
			<main className='flex-auto'></main>
			<Footer />
		</body>
	)
}

export default Home
