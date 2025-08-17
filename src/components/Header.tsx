'use client';

import clsx from 'clsx';
import Link from 'next/link';
import FocusLock from 'react-focus-lock';

import { useAppStore } from '@/store';

import Navigation from './Navigation/Navigation';
import Logo from './UI/Logo';

const Header = () => {
	const headerNavVisible = useAppStore((s) => s.headerNavVisible);

	return (
		<header className={clsx('z-40', { isNavOpen: headerNavVisible })}>
			<FocusLock returnFocus disabled={!headerNavVisible}>
				<div className='container mx-auto flex items-center justify-between overflow-hidden px-4 py-2 md:border-b md:border-neutral-950 md:px-10 md:py-3 lg:px-20'>
					<div
						className={clsx(
							'relative',
							'before:pointer-events-none before:absolute before:bottom-0 before:left-0 before:-z-10 before:h-[300%] before:w-full before:bg-dark-color before:transition-transform before:duration-300 before:ease-linear before:content-[""]',
							'has-[a:focus-visible]:before:translate-y-5',
							'hover:before:translate-y-5',
							'active:before:translate-y-5'
						)}>
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
	);
};
export default Header;
