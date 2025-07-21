'use client'

import { AnimatePresence } from 'framer-motion'
import Image from 'next/image'

import AnimatedWrapper from '@/components/AnimatedWrapper'
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
					duration={0.3}
					className='relative bg-dark-color'>
					<div
						id={`services-tabpanel-${index}`}
						role='tabpanel'
						aria-labelledby={`services-tab-${index}`}
						className='relative w-full h-[400px] md:h-[600px] xl:h-[700px]'>
						<Image
							className='object-cover'
							fill
							sizes='(max-width: 639px) 587px, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 573x, 519px'
							quality={100}
							src={content as string}
							alt={`${tabName} image`}
							loading='lazy'
						/>
					</div>
				</AnimatedWrapper>
			)
		})}
	</AnimatePresence>
)

export default ServicesTypeContent
