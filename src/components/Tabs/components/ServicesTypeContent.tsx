'use client'

import { AnimatePresence } from 'framer-motion'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import ImageWithSkeleton from '@/components/UI/ImageWithSkeleton'
import { ITabContentProps } from '@/const/const.types'

const ServicesTypeContent = ({ tabsContent, activeTab }: ITabContentProps) => (
	<AnimatePresence mode='wait'>
		{tabsContent.map((item, index) => {
			const { tabName, content } = item

			if (activeTab !== tabName) return null

			return (
				<AnimatedWrapper
					key={`${tabName}-${index}`}
					typeFade={false}
					duration={0.3}>
					<div
						id={`services-tabpanel-${index}`}
						role='tabpanel'
						aria-labelledby={`services-tab-${index}`}
						className='relative w-full h-full'>
						<ImageWithSkeleton
							className='h-full object-cover'
							src={content as string}
							alt={`${tabName} image`}
							fill
							sizes='(max-width: 639px) 587px, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 573x, 519px'
							quality={100}
							loading='lazy'
						/>
					</div>
				</AnimatedWrapper>
			)
		})}
	</AnimatePresence>
)

export default ServicesTypeContent
