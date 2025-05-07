'use client'

import Link from 'next/link'
import { useAppStore } from '@/store/store'
import FocusLock from 'react-focus-lock'
import Navigation from '../Navigation/Navigation'
import Logo from '../UI/Logo/Logo'
import styles from './Header.module.css'
import clsx from 'clsx'

const Header = () => {
	const headerNavVisible = useAppStore((state) => state.headerNavVisible)

	return (
		<header className={clsx('z-40', { isNavOpen: headerNavVisible })}>
			<FocusLock
				returnFocus
				disabled={!headerNavVisible}>
				<div className='container flex items-center justify-between px-4 py-2 mx-auto overflow-hidden md:px-10 lg:px-20 md:py-3 md:border-b md:border-neutral-950'>
					<div className={clsx(styles.logo, 'relative')}>
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
