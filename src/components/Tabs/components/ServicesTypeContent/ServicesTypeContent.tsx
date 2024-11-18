import React from 'react'
import { OneTabContent } from '@/const/const.interfaces'
import Image from 'next/image'
import styles from './ServicesTypeContent.module.css'

interface ServicesTypeContentProps {
	tabsContent: OneTabContent[]
	activeTab: string
}

const ServicesTypeContent: React.FC<ServicesTypeContentProps> = ({
	tabsContent,
	activeTab,
}) => {
	return tabsContent.map((item, index) => {
		const { tabName, content } = item

		return (
			<div
				key={`${tabName}-${index}`}
				className={
					activeTab === tabName
						? 'h-full'
						: 'overflow-hidden invisible opacity-0 h-0 w-0'
				}
				id={`services-tabpanel-${++index}`}
				role='tabpanel'
				aria-labelledby={`services-tab-${++index}`}>
				<picture>
					<source
						media='(max-width: 1280px)'
						srcSet={`/img${content}@mob.webp`}
						type='image/webp'
					/>
					<source
						media='(max-width: 1024px)'
						srcSet={`/img${content}@mob.jpg`}
					/>
					<source
						srcSet={`/img${content}.webp`}
						type='image/webp'
					/>
					<Image
						className={`${styles.image} w-full h-full bg-dark-color`}
						width={1920}
						height={2880}
						src={`/img${content}.jpg`}
						alt={`${tabName} image`}
						loading='lazy'
					/>
				</picture>
			</div>
		)
	})
}

export default ServicesTypeContent
