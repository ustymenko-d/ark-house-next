import { NavigationLink } from '@/const/const.interfaces'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './NavigationItem.module.css'

type NavigationItemProps = {
	link: NavigationLink
	index: number
	toggleNavListVisible: () => void
}

const NavigationItem: React.FC<NavigationItemProps> = ({
	link,
	index,
	toggleNavListVisible,
}) => {
	const { title, href } = link
	const pathname = usePathname()

	return (
		<Link
			className={`${styles.navItem} text-black animatedUnderline`}
			href={pathname === '/' ? href : `/${href}`}
			data-number={index}
			onClick={() => {
				console.log(1)
				toggleNavListVisible()
			}}>
			{title}
		</Link>
	)
}

export default NavigationItem
