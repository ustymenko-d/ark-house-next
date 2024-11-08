import React, { ReactNode } from 'react'
import styles from './Banner.module.css'

interface BannerProps {
	svgImage: ReactNode // ReactNode type can be used for SVG elements
	topLineText: string
	bottomLineText: string
}

const Banner: React.FC<BannerProps> = ({
	svgImage,
	topLineText,
	bottomLineText,
}) => {
	return (
		<div className='flex flex-col justify-center items-center gap-4 text-center text-dark-color'>
			{svgImage}
			<p className={`${styles.text}font-bold text-4xl`}>
				{topLineText}
				<br />
				{bottomLineText}
			</p>
		</div>
	)
}

export default Banner
