'use client'

import clsx from 'clsx'
import { useCallback, useEffect } from 'react'
import { useBreakpoints } from '@/hooks/useBreakpoints'
import { useAppStore } from '@/store/store'
import NavigationList from './components/NavigationList/NavigationList'
import styles from './Navigation.module.css'

const Navigation = () => {
	const headerNavVisible = useAppStore((state) => state.headerNavVisible)
	const toggleHeaderNav = useAppStore((state) => state.toggleHeaderNav)
	const breakpoints = useBreakpoints([767])

	const toggleNavListVisible = useCallback(() => {
		if (!headerNavVisible) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: 'smooth',
			})
		}

		toggleHeaderNav()
	}, [headerNavVisible, toggleHeaderNav])

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && headerNavVisible) {
				toggleNavListVisible()
			}
		}

		document.addEventListener('keydown', handleEsc)
		return () => document.removeEventListener('keydown', handleEsc)
	}, [headerNavVisible, toggleNavListVisible])

	useEffect(() => {
		if (breakpoints === 1 && headerNavVisible) {
			toggleNavListVisible()
		}
	})

	return (
		<nav>
			{breakpoints === 0 && (
				<button
					className={clsx(
						styles.toggler,
						{ [styles.toggler_active]: headerNavVisible },
						'bg-transparent relative aspect-square overflow-hidden md:hidden'
					)}
					aria-expanded={headerNavVisible}
					aria-controls='navigation-list'
					aria-label={`${headerNavVisible ? 'Hide' : 'Show'}page navigation`}
					onClick={toggleNavListVisible}>
					<span className={`${styles['toggler-text']}`}></span>
				</button>
			)}

			<NavigationList
				className={clsx(
					'fixed flex flex-col gap-8 w-full overflow-auto font-normal text-5xl px-4 bg-white',
					{ visible: headerNavVisible, invisible: !headerNavVisible },
					'md:visible md:relative md:min-h-fit md:left-0 md:top-0 md:py-5 md:px-0 md:flex-row md:justify-end md:items-center md:gap-8 md:transition-none md:text-xl'
				)}
				navListVisible={headerNavVisible}
				header={true}
				toggleNavListVisible={toggleNavListVisible}
			/>
		</nav>
	)
}

export default Navigation
