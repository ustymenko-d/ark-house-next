import React from 'react'
import styles from './Breadcrumbs.module.css'
import Link from 'next/link'

interface NavItem {
	name: string
	href?: string
}

interface BreadcrumbsProps {
	navItems: NavItem[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ navItems }) => {
	return (
		<nav
			className='pt-12 mb-8'
			aria-label='Breadcrumb'>
			<ol className='list-none flex flex-wrap items-center gap-x-4 gap-y-2 text-xl'>
				{navItems.map((item, index) =>
					index === navItems.length - 1 ? (
						<li
							key={`${item.name}-${index}`}
							className='font-semibold'>
							<span
								key={`${item.name}-${index}`}
								aria-current='page'>
								{item.name}
							</span>
						</li>
					) : (
						<li
							key={`${item.name}-${index}`}
							className={`${styles.item} relative leading-tight mr-10`}>
							<Link
								className='animatedUnderline  text-dark-color'
								href={item.href || '#'}>
								{item.name}
							</Link>
						</li>
					)
				)}
			</ol>
		</nav>
	)
}

export default Breadcrumbs
