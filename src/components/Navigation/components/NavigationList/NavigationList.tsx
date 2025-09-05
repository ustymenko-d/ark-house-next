'use client';

import clsx from 'clsx';

import { NAVIGATION_LINKS } from '@/const/const';
import { useBreakpoints } from '@/hooks/useBreakpoints';
import NavigationItem from '../NavigationItem/NavigationItem';

import styles from './NavigationList.module.css';

interface Props extends React.HTMLAttributes<HTMLUListElement> {
	navListVisible?: boolean;
	header?: boolean;
	toggleNavListVisible?: () => void;
}

const NavigationList = ({
	className,
	navListVisible,
	header,
	toggleNavListVisible,
}: Props) => {
	const breakpoints = useBreakpoints([768]);
	const isMobile = breakpoints === 0;
	const listId = header ? 'navigation-list' : 'footer-navigation-list';
	const isHidden = isMobile && !navListVisible && header;

	return (
		<ul
			id={listId}
			aria-hidden={isHidden}
			className={clsx(
				className,
				header && [
					'justify-center max-md:-left-full max-md:top-[78px] max-md:h-[calc(100%-78.5px)] max-md:min-h-[calc(100dvh-78.5px)] max-md:duration-300',
					styles['navigation-list_header'],
				],
				navListVisible && 'visible max-md:left-0'
			)}
			data-testid='navigation-list'>
			{NAVIGATION_LINKS.map((link, index) => (
				<li
					key={`${link.title}-${index}`}
					className={clsx('relative', {
						'container sm:mx-auto sm:pl-4 md:pl-0': header,
					})}>
					<NavigationItem
						link={link}
						index={++index}
						toggleNavListVisible={toggleNavListVisible}
					/>
				</li>
			))}
		</ul>
	);
};

export default NavigationList;
