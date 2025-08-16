import clsx from 'clsx'
import Link from 'next/link'

interface INavItem {
	name: string
	href?: string
}

const Breadcrumbs = ({ navItems }: { navItems: INavItem[] }) => (
	<nav
		className='pt-10 md:pt-12 mb-6 md:mb-8'
		aria-label='Breadcrumb'>
		<ol className='flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-2 text-base md:text-lg leading-relaxed list-none'>
			{navItems.map((item, index) =>
				index === navItems.length - 1 ? (
					<li
						key={`${item.name}-${index}`}
						className='font-semibold text-gray-900'
						aria-current='page'>
						{item.name}
					</li>
				) : (
					<li
						key={`${item.name}-${index}`}
						className={clsx(
							'relative leading-tight mr-8',
							'after:absolute after:top-1/2 after:translate-y-[-50%] after:right-[-40px] after:content-[url("/img/icons/arrow.svg")] after:leading-[0] after:pointer-events-none'
						)}>
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
