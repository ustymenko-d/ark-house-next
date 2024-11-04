import { NAVIGATION_LINKS } from '@/const'
import styles from './NavigationList.module.css'
import NavigationItem from '../NavigationItem/NavigationItem'
import React from 'react'

interface NavigationListProps {
	basicClasses: string
	navListVisible?: boolean
	header?: boolean
}

const NavigationList: React.FC<NavigationListProps> = ({
	basicClasses,
	navListVisible,
	header,
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
					className='relative container max-w-fit'>
					<NavigationItem
						link={link}
						index={++index}
					/>
				</li>
			))}
		</ul>
	)
}

export default NavigationList
