import clsx from 'clsx'
import NavigationItem from '../NavigationItem/NavigationItem'
import { NAVIGATION_LINKS } from '@/const/const'
import styles from './NavigationList.module.css'

interface NavigationListProps {
	className: string
	navListVisible?: boolean
	header?: boolean
	toggleNavListVisible?: () => void
}

const NavigationList = ({
	className,
	navListVisible,
	header,
	toggleNavListVisible,
}: NavigationListProps) => (
	<ul
		id={header ? 'navigation-list' : 'footer-navigation-list'}
		className={clsx(className, {
			[styles['navigation-list_header']]: header,
			[styles['navigation-list_active']]: navListVisible,
		})}
		aria-hidden={navListVisible ? !navListVisible : false}>
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
)

export default NavigationList
