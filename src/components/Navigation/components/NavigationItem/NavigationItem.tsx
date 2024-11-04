import { NavigationLink } from '@/const'
import Link from 'next/link'
import styles from './NavigationItem.module.css'

type NavigationItemProps = {
	link: NavigationLink
	index: number
}

const NavigationItem: React.FC<NavigationItemProps> = ({ link, index }) => {
	return (
		<Link
			className={`${styles.navItem} text-black animatedUnderline`}
			href={link.linkHref}
			data-number={index}>
			{link.title}
		</Link>
	)
}

export default NavigationItem
