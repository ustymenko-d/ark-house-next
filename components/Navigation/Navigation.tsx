'use client'

import { useBreakpoints } from '@/hooks/useBreakpoints'
import { useState } from 'react'
import { NAVIGATION_LINKS } from '@/const'
import styles from './Navigation.module.css'
import NavigationItem from './components/NavigationItem/NavigationItem'

const Navigation = () => {
	const breakpoints = useBreakpoints([767])
	const [showNavList, setShowNavList] = useState(false)

	const BASIC_NAV_LIST_CLASSES: string = `fixed flex flex-col justify-center gap-8 ${
		showNavList ? 'visible' : 'invisible'
	} w-full overflow-auto font-medium text-5xl px-4 bg-white md:visible md:relative md:min-h-fit md:left-0 md:top-0 md:py-5 md:px-0 md:flex-row md:justify-end md:items-center md:gap-8 md:transition-none md:text-xl`

	return (
		<nav>
			{breakpoints === 0 && (
				<button
					className={`${styles.toggler} ${
						showNavList ? styles.toggler_active : null
					} bg-transparent relative aspect-square overflow-hidden md:hidden`}
					aria-expanded={showNavList}
					aria-controls='navigation-list'
					aria-label={`${showNavList ? 'Hide' : 'Show'}page navigation`}
					onClick={() => {
						setShowNavList((prev) => !prev)
					}}>
					<span className={`${styles['toggler-text']}`}></span>
				</button>
			)}

			<ul
				className={`${styles['navigation-list']} ${BASIC_NAV_LIST_CLASSES} ${
					showNavList ? styles['navigation-list_active'] : ''
				}`}
				id='navigation-list'
				aria-hidden={!showNavList}>
				{NAVIGATION_LINKS.map((link, index) => (
					<li
						key={`${link.title}-${index}`}
						className='relative'>
						<NavigationItem
							link={link}
							index={index}
						/>
					</li>
				))}
			</ul>
		</nav>
	)
}

export default Navigation
