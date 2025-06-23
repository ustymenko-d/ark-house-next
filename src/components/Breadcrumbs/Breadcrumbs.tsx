import Link from 'next/link'

import styles from './Breadcrumbs.module.css'

interface NavItem {
	name: string
	href?: string
}

const Breadcrumbs = ({ navItems }: { navItems: NavItem[] }) => (
	<nav
		className='pt-12 mb-8'
		aria-label='Breadcrumb'>
		<ol className='flex flex-wrap items-center text-xl list-none gap-x-4 gap-y-2'>
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
							className='animatedUnderline text-dark-color'
							href={item.href || '#'}>
							{item.name}
						</Link>
					</li>
				)
			)}
		</ol>
	</nav>
)

export default Breadcrumbs
