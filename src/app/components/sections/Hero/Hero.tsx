import clsx from 'clsx'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import Button from '@/components/UI/Button'
import SocialLinks from '@/components/UI/SocialLinks/SocialLinks'

import HeroImage from './components/HeroImage'

const Hero = () => (
	<div
		className={clsx(
			'container relative mx-auto min-h-[calc(100dvh-78px)] max-h-[800px] py-16 mb-10 flex flex-col items-start gap-12 justify-center overflow-hidden',
			'md:px-10 md:justify-normal md:bg-none',
			'lg:min-h-[800px] lg:max-h-[1000px] lg:h-[calc(100dvh-93px)] lg:px-20 lg:flex-row lg:gap-0 lg:justify-between',
			'duration-500',
			'before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:w-full before:h-[70%] before:bg-[#f8f8f8] before:z-0',
			'lg:before:w-[calc(100%-160px)] lg:before:min-h-[63%] lg:before:mx-auto'
		)}>
		<div
			className={clsx(
				'relative z-10 mb-10 px-4 pt-4 font-bold text-[clamp(2.625rem,1.0179rem+8.0357vw,4.875rem)]',
				'md:text-8xl lg:px-0'
			)}>
			<span className='absolute top-0 mr-4 text-lg font-medium tracking-wide right-3'>
				Since&nbsp;1975&nbsp;-
			</span>
			<AnimatedWrapper className='max-h-fit leading-tight'>Architecture.</AnimatedWrapper>
			<AnimatedWrapper
				delay={0.1}
				className='max-h-fit leading-tight'>
				Planning.
			</AnimatedWrapper>
			<AnimatedWrapper
				delay={0.2}
				className='max-h-fit leading-tight'>
				Design.
			</AnimatedWrapper>
		</div>

		<div
			className={clsx(
				'z-10 flex flex-col items-start gap-8 px-4 lg:items-end lg:px-0 lg:self-center',
				'xl:self-start xl:gap-20 xl:items-end'
			)}>
			<Button to='/contact'>Contact&nbsp;us</Button>
			<SocialLinks />
		</div>

		<HeroImage />
	</div>
)

export default Hero
