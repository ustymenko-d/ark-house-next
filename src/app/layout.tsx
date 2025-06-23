import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '@/components/Footer'
import Header from '@/components/Header/Header'
import Modal from '@/components/Modal'
import ToTopButton from '@/components/UI/ToTopButton/ToTopButton'
import { PROJECT_DESCRIPTION } from '@/const/const'

export const metadata: Metadata = {
	title: 'Ark-House',
	description: PROJECT_DESCRIPTION,
	creator: 'ustymenko.denys@gmail.com',
}

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
})

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode
}>) => (
	<html
		lang='en'
		className={clsx(inter.variable, 'font-sans overflow-x-clip h-fit')}>
		<body className='flex flex-col h-full bg-white overflow-x-clip text-neutral-950'>
			<Header />
			{children}
			<Footer />
			<ToTopButton />
			<Modal />
		</body>
	</html>
)

export default RootLayout
