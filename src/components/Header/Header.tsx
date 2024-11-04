import { useAppStore } from '@/store/store'

import Link from 'next/link'
import FocusLock from 'react-focus-lock'
import styles from './Header.module.css'
import Logo from '../UI/Logo/Logo'
import Navigation from '../Navigation/Navigation'

const Header = () => {
	const headerNavVisible = useAppStore((state) => state.headerNavVisible)

	return (
		<header className='z-10'>
			<FocusLock
				returnFocus
				disabled={!headerNavVisible}>
				<div className='overflow-hidden container mx-auto flex items-center justify-between px-4 py-2 md:py-3 md:border-b md:border-neutral-950'>
					<div className={`${styles.logo} relative`}>
						<Link
							href='/'
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
