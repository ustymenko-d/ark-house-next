'use client'

import React from 'react'
import { useAppStore } from '@/store/store'
import Button from '@/components/UI/Button/Button'
import SocialLinks from '@/components/UI/SocialLinks/SocialLinks'
import styles from './HeroSection.module.css'
import AnimatedWrapper from '@/components/AnimatedWrapper/AnimatedWrapper'

const HeroSection: React.FC = () => {
	const webpSupport = useAppStore((state) => state.webpSupport)

	return (
		<section
			className={`${styles.hero} container mx-auto md:px-10 lg:px-20 relative overflow-hidden py-16 mb-10 flex flex-col items-start gap-12 justify-center md:justify-normal md:bg-none lg:gap-0 lg:flex-row lg:justify-between `}>
			<div
				className={`${styles.title} z-10 relative mb-10 px-4 pt-4 font-bold md:text-8xl lg:px-0`}>
				<span className='absolute top-0 right-3 mr-4 font-medium text-lg tracking-wide'>
					Since&nbsp;1975&nbsp;-
				</span>
				<AnimatedWrapper additionalClasses='max-h-fit'>
					Architecture.
				</AnimatedWrapper>
				<AnimatedWrapper
					delay={0.3}
					additionalClasses='max-h-fit'>
					Planning.
				</AnimatedWrapper>
				<AnimatedWrapper
					delay={0.5}
					additionalClasses='max-h-fit'>
					Design.
				</AnimatedWrapper>
			</div>
			<div className='z-10 px-4 flex flex-col items-start gap-8 lg:items-end lg:px-0 lg:self-center xl:self-start xl:gap-20 xl:items-end'>
				<Button linkHref='/contact'>Contact&nbsp;us</Button>
				<SocialLinks />
			</div>

			{webpSupport !== null && (
				<div
					className={`${styles.background}${
						webpSupport ? '' : ` ${styles.background_noWebp}`
					} absolute left-0 right-0 bottom-0 flex flex-col justify-end items-center overflow-hidden pointer-events-none bg-no-repeat`}></div>
			)}
		</section>
	)
}

export default HeroSection
