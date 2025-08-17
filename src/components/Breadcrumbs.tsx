import clsx from 'clsx';
import Link from 'next/link';

interface INavItem {
	name: string;
	href?: string;
}

const Breadcrumbs = ({ navItems }: { navItems: INavItem[] }) => (
	<nav className='mb-6 pt-10 md:mb-8 md:pt-12' aria-label='Breadcrumb'>
		<ol className='flex list-none flex-wrap items-center gap-x-4 gap-y-2 text-base leading-relaxed md:gap-x-6 md:text-lg'>
			{navItems.map((item, index) =>
				index === navItems.length - 1 ? (
					<li
						key={`${item.name}-${index}`}
						className='font-semibold text-gray-900'
						aria-current='page'
					>
						{item.name}
					</li>
				) : (
					<li
						key={`${item.name}-${index}`}
						className={clsx(
							'relative mr-10 leading-tight md:mr-8',
							'after:pointer-events-none after:absolute after:right-[-40px] after:top-1/2 after:translate-y-[-50%] after:leading-[0] after:content-[url("/img/icons/arrow.svg")]'
						)}>
						<Link
							className='animatedUnderline text-dark-color'
							href={item.href || '#'}
						>
							{item.name}
						</Link>
					</li>
				)
			)}
		</ol>
	</nav>
);

export default Breadcrumbs;
