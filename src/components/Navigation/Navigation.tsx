'use client'

import clsx from 'clsx'
import { useLenis } from 'lenis/react'
import { useCallback, useEffect } from 'react'

import { useBreakpoints } from '@/hooks/useBreakpoints'
import { useAppStore } from '@/store'

import NavigationList from './components/NavigationList/NavigationList'
import styles from './Navigation.module.css'

const Navigation = () => {
	const headerNavVisible = useAppStore(s => s.headerNavVisible)
	const toggleHeaderNav = useAppStore(s => s.toggleHeaderNav)

	const breakpoints = useBreakpoints([768])
	const isMobile = breakpoints === 0
	const shouldAutoClose = breakpoints === 1 && headerNavVisible

	const lenis = useLenis()

	const toggleNavListVisible = useCallback(() => {
		if (!headerNavVisible && lenis) {
			lenis.scrollTo(0, { duration: 1 })
		}
		toggleHeaderNav()
	}, [headerNavVisible, toggleHeaderNav, lenis])

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
		if (shouldAutoClose) toggleNavListVisible()
	})

	return (
		<nav>
			{isMobile && (
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
