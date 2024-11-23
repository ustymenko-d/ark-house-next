import React from 'react'
import { NAVIGATION_LINKS } from '@/const/const'
import NavigationItem from '../NavigationItem/NavigationItem'
import styles from './NavigationList.module.css'

interface NavigationListProps {
	basicClasses: string
	navListVisible?: boolean
	header?: boolean
	toggleNavListVisible: () => void
}

const NavigationList: React.FC<NavigationListProps> = ({
	basicClasses,
	navListVisible,
	header,
	toggleNavListVisible,
}) => {
	return (
		<ul
			className={`${basicClasses}${
				header ? ` ${styles['navigation-list_header']}` : ''
			}${navListVisible ? ` ${styles['navigation-list_active']}` : ''}`}
			id='navigation-list'
			aria-hidden={navListVisible ? !navListVisible : false}>
			{NAVIGATION_LINKS.map((link, index) => (
				<li
					key={`${link.title}-${index}`}
					className={`${
						header
							? 'relative container sm:mx-auto sm:pl-4 md:pl-0'
							: 'relative'
					}`}>
					<NavigationItem
						link={link}
						index={++index}
						toggleNavListVisible={toggleNavListVisible}
					/>
				</li>
			))}
		</ul>
	)
}

export default NavigationList
