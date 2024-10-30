import Link from 'next/link'
import styles from './Header.module.css'
import Logo from '../UI/Logo/Logo'
import Navigation from '../Navigation/Navigation'

const Header = () => {
	return (
		<header className='z-10 overflow-hidden'>
			<div className='container mx-auto flex items-center justify-between px-4 py-2 md:py-3 md:border-b md:border-neutral-950'>
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
		</header>
	)
}
export default Header
