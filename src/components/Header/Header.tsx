'use client'

import { useAppStore } from '@/store/store'

import Link from 'next/link'
import FocusLock from 'react-focus-lock'
import styles from './Header.module.css'
import Logo from '../UI/Logo/Logo'
import Navigation from '../Navigation/Navigation'
import { useEffect } from 'react'

const isWebpSupported = (): boolean => {
	const canvas = document.createElement('canvas')
	return canvas.toDataURL('image/webp').startsWith('data:image/webp')
}

const Header = () => {
	const headerNavVisible = useAppStore((state) => state.headerNavVisible)
	const webpSupport = useAppStore((state) => state.webpSupport)
	const setWebpSupport = useAppStore((state) => state.setWebpSupport)
	
	useEffect(() => {
		if (webpSupport === null) {
			setWebpSupport(isWebpSupported())
		}
	}, [webpSupport, setWebpSupport])

	return (
		<header className={`z-40${headerNavVisible ? ' isNavOpen' : ''}`}>
			<FocusLock
				returnFocus
				disabled={!headerNavVisible}>
				<div className='overflow-hidden container md:px-10 lg:px-20 mx-auto flex items-center justify-between px-4 py-2 md:py-3 md:border-b md:border-neutral-950'>
					<div className={`${styles.logo} relative`}>
						<Link
							href='/'
							aria-label='Go Ark-House home'
							className='inline-block'
							replace>
							<Logo />
						</Link>
					</div>
					<Navigation />
				</div>
			</FocusLock>
		</header>
	)
}
export default Header
