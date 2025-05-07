'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { NavigationLink } from '@/const/const.types'
import styles from './NavigationItem.module.css'

type NavigationItemProps = {
	link: NavigationLink
	index: number
	toggleNavListVisible?: () => void
}

const NavigationItem = ({
	link,
	index,
	toggleNavListVisible,
}: NavigationItemProps) => {
	const { title, href } = link
	const pathname = usePathname()
	const hrefValue = pathname === '/' ? href : `/${href}`

	return (
		<Link
			className={clsx(styles.navItem, 'text-black animatedUnderline')}
			href={hrefValue}
			data-number={index}
			onClick={() => {
				if (toggleNavListVisible) {
					toggleNavListVisible()
				}
			}}>
			{title}
		</Link>
	)
}

export default NavigationItem
