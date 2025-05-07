import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './Banner.module.css'

interface BannerProps {
	svgImage: ReactNode
	topLineText: string
	bottomLineText: string
	className?: string
}

const Banner = ({
	svgImage,
	topLineText,
	bottomLineText,
	className,
}: BannerProps) => {
	return (
		<div
			className={clsx(
				className,
				'flex flex-col justify-center items-center gap-4 text-center text-dark-color'
			)}>
			{svgImage}
			<p className={clsx(styles.text, 'font-bold text-4xl')}>
				{topLineText}
				<br />
				{bottomLineText}
			</p>
		</div>
	)
}

export default Banner
