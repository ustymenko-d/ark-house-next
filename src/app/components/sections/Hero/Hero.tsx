import React from 'react'
import styles from './Hero.module.css'
import Button from '@/components/UI/Button/Button'
import SocialLinks from '@/components/UI/SocialLinks/SocialLinks'

const Hero: React.FC = () => {
	return (
		<section
			className={`${styles.hero} container mx-auto md:px-10 lg:px-20 relative overflow-hidden py-16 mb-10 flex flex-col items-start gap-12 justify-center md:justify-normal md:bg-none lg:gap-0 lg:flex-row lg:justify-between `}>
			<h1
				className={`${styles.title} z-10 relative mb-10 px-4 pt-4 font-bold md:text-8xl lg:px-0`}>
				<span className='absolute top-0 right-3 font-medium text-lg md:tracking-wide'>
					Since&nbsp;1975&nbsp;—
				</span>
				Architecture.
				<br />
				Planning.
				<br />
				Design.
			</h1>
			<div className='z-10 px-4 flex flex-col items-start gap-8 lg:px-0 lg:self-center xl:self-start xl:gap-20 xl:items-end'>
				<Button linkHref='/contact'>Contact&nbsp;us</Button>
				<SocialLinks />
			</div>
			<div
				className={`${styles.background} absolute left-0 right-0 bottom-0 flex flex-col justify-end items-center overflow-hidden pointer-events-none bg-no-repeat`}></div>
		</section>
	)
}

export default Hero
