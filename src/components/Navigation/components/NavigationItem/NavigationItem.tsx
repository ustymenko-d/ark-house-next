'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { NavigationLink } from '@/const/const.types';

import styles from './NavigationItem.module.css';

interface INavigationItemProps {
	link: NavigationLink;
	index: number;
	toggleNavListVisible?: () => void;
}

const NavigationItem = ({
	link,
	index,
	toggleNavListVisible,
}: INavigationItemProps) => {
	const { title, href } = link;
	const pathname = usePathname();
	const to = pathname === '/' ? href : `/${href}`;

	return (
		<Link
			className={clsx(styles.navItem, 'animatedUnderline text-black')}
			href={to}
			data-number={index}
			onClick={() => {
				if (toggleNavListVisible) {
					toggleNavListVisible();
				}
			}}
		>
			{title}
		</Link>
	);
};

export default NavigationItem;
