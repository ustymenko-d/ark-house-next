import clsx from 'clsx'
import Image from 'next/image'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import { ITabContentProps } from '@/const/const.types'

import styles from './ServicesTypeContent.module.css'

const ServicesTypeContent = ({ tabsContent, activeTab }: ITabContentProps) =>
	tabsContent.map((item, index) => {
		const { tabName, content } = item

		return (
			<div
				key={`${tabName}-${index}`}
				className={clsx({
					'h-full': activeTab === tabName,
					'overflow-hidden invisible opacity-0 h-0 w-0': activeTab !== tabName,
				})}
				id={`services-tabpanel-${index}`}
				role='tabpanel'
				aria-labelledby={`services-tab-${index}`}>
				<AnimatedWrapper typeFade={false}>
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
				</AnimatedWrapper>
			</div>
		)
	})

export default ServicesTypeContent
