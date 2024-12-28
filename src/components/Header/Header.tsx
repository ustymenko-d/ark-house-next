'use client'

import { useAppStore } from '@/store/store'
import Link from 'next/link'
import FocusLock from 'react-focus-lock'
import Navigation from '../Navigation/Navigation'
import Logo from '../UI/Logo/Logo'
import styles from './Header.module.css'

const Header = () => {
	const headerNavVisible = useAppStore((state) => state.headerNavVisible)

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
