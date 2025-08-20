'use client';

import { useCallback, useEffect } from 'react';
import clsx from 'clsx';
import { useLenis } from 'lenis/react';

import { useBreakpoints } from '@/hooks/useBreakpoints';
import { useAppStore } from '@/store';

import NavigationList from './components/NavigationList/NavigationList';

import styles from './Navigation.module.css';

const Navigation = () => {
	const headerNavVisible = useAppStore((s) => s.headerNavVisible);
	const toggleHeaderNav = useAppStore((s) => s.toggleHeaderNav);

	const breakpoints = useBreakpoints([768]);
	const isMobile = breakpoints === 0;
	const shouldAutoClose = breakpoints === 1 && headerNavVisible;

	const lenis = useLenis();

	const toggleNavListVisible = useCallback(() => {
		if (!headerNavVisible && lenis) {
			lenis.scrollTo(0, { duration: 1 });
		}
		toggleHeaderNav();
	}, [headerNavVisible, toggleHeaderNav, lenis]);

	useEffect(() => {
		const handleEsc = (event: KeyboardEvent) => {
			if (event.key === 'Escape' && headerNavVisible) {
				toggleNavListVisible();
			}
		};

		document.addEventListener('keydown', handleEsc);
		return () => document.removeEventListener('keydown', handleEsc);
	}, [headerNavVisible, toggleNavListVisible]);

	useEffect(() => {
		if (shouldAutoClose) toggleNavListVisible();
	}, [shouldAutoClose, toggleNavListVisible]);

	return (
		<nav>
			{isMobile && (
				<button
					className={clsx(
						styles.toggler,
						{ [styles.toggler_active]: headerNavVisible },
						'relative aspect-square overflow-hidden bg-transparent md:hidden'
					)}
					aria-expanded={headerNavVisible}
					aria-controls='navigation-list'
					aria-label={`${headerNavVisible ? 'Hide' : 'Show'}page navigation`}
					onClick={toggleNavListVisible}
					data-testid='navigation-toggler'>
					<span className={`${styles['toggler-text']}`}></span>
				</button>
			)}

			<NavigationList
				className={clsx(
					'fixed flex w-full flex-col gap-8 overflow-auto bg-white px-4 text-5xl font-normal',
					{ visible: headerNavVisible, invisible: !headerNavVisible },
					'md:visible md:relative md:left-0 md:top-0 md:min-h-fit md:flex-row md:items-center md:justify-end md:gap-8 md:px-0 md:py-5 md:text-xl md:transition-none'
				)}
				navListVisible={headerNavVisible}
				header
				toggleNavListVisible={toggleNavListVisible}
			/>
		</nav>
	);
};

export default Navigation;
