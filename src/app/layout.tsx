import './globals.css';

import clsx from 'clsx';
import ReactLenis from 'lenis/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Modal from '@/components/Modal';
import ToTopButton from '@/components/UI/ToTopButton';
import { PROJECT_DESCRIPTION } from '@/const/const';

export const metadata: Metadata = {
	title: 'Ark-House',
	description: PROJECT_DESCRIPTION,
	creator: 'ustymenko.denys@gmail.com',
};

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
});

const RootLayout = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => (
	<html
		lang='en'
		className={clsx(inter.variable, 'h-fit overflow-x-clip font-sans')}>
		<body className='flex h-full flex-col overflow-x-clip bg-white text-neutral-950'>
			<Header />
			{children}
			<Footer />
			<ToTopButton />
			<Modal />
			<ReactLenis root />
		</body>
	</html>
);

export default RootLayout;
