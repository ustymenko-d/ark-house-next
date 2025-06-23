import AnimatedWrapper from '@/components/AnimatedWrapper'
import Button from '@/components/UI/Button/Button'
import SocialLinks from '@/components/UI/SocialLinks/SocialLinks'

import styles from './HeroSection.module.css'

const HeroSection = () => (
	<section
		className={`${styles.hero} container mx-auto md:px-10 lg:px-20 relative overflow-hidden py-16 mb-10 flex flex-col items-start gap-12 justify-center md:justify-normal md:bg-none lg:gap-0 lg:flex-row lg:justify-between `}>
		<div
			className={`${styles.title} z-10 relative mb-10 px-4 pt-4 font-bold md:text-8xl lg:px-0`}>
			<span className='absolute top-0 mr-4 text-lg font-medium tracking-wide right-3'>
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
		<div className='z-10 flex flex-col items-start gap-8 px-4 lg:items-end lg:px-0 lg:self-center xl:self-start xl:gap-20 xl:items-end'>
			<Button to='/contact'>Contact&nbsp;us</Button>
			<SocialLinks />
		</div>

		<div
			className={`${styles.background} absolute left-0 right-0 bottom-0 flex flex-col justify-end items-center overflow-hidden pointer-events-none bg-no-repeat`}></div>
	</section>
)

export default HeroSection
