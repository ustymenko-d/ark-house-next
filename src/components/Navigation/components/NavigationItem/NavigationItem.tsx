import { NavigationLink } from '@/const/const.interfaces'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './NavigationItem.module.css'

type NavigationItemProps = {
	link: NavigationLink
	index: number
}

const NavigationItem: React.FC<NavigationItemProps> = ({ link, index }) => {
	const { title, linkHref } = link
	const pathname = usePathname()

	return (
		<Link
			className={`${styles.navItem} text-black animatedUnderline`}
			href={pathname === '/' ? linkHref : `/${linkHref}`}
			data-number={index}>
			{title}
		</Link>
	)
}

export default NavigationItem
