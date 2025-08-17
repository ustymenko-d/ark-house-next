import clsx from 'clsx';

import AnimatedWrapper from '@/components/AnimatedWrapper';
import Button from '@/components/UI/Button';
import SocialLinks from '@/components/UI/SocialLinks/SocialLinks';

import HeroImage from './components/HeroImage';

const Hero = () => (
	<div
		className={clsx(
			'container relative mx-auto mb-10 flex max-h-[800px] min-h-[calc(100dvh-78px)] flex-col items-start justify-center gap-12 overflow-hidden py-16',
			'md:justify-normal md:bg-none md:px-10',
			'lg:h-[calc(100dvh-93px)] lg:max-h-[1000px] lg:min-h-[800px] lg:flex-row lg:justify-between lg:gap-0 lg:px-20',
			'duration-500',
			'before:absolute before:bottom-0 before:left-0 before:right-0 before:z-0 before:h-[70%] before:w-full before:bg-[#f8f8f8] before:content-[""]',
			'lg:before:mx-auto lg:before:min-h-[63%] lg:before:w-[calc(100%-160px)]'
		)}
	>
		<div
			className={clsx(
				'relative z-10 mb-10 px-4 pt-4 text-[clamp(2.625rem,1.0179rem+8.0357vw,4.875rem)] font-bold',
				'md:text-8xl lg:px-0'
			)}
		>
			<span className='absolute right-3 top-0 mr-4 text-lg font-medium tracking-wide'>
				Since&nbsp;1975&nbsp;-
			</span>
			<AnimatedWrapper className='max-h-fit leading-tight'>
				Architecture.
			</AnimatedWrapper>
			<AnimatedWrapper delay={0.1} className='max-h-fit leading-tight'>
				Planning.
			</AnimatedWrapper>
			<AnimatedWrapper delay={0.2} className='max-h-fit leading-tight'>
				Design.
			</AnimatedWrapper>
		</div>

		<div
			className={clsx(
				'z-10 flex flex-col items-start gap-8 px-4 lg:items-end lg:self-center lg:px-0',
				'xl:items-end xl:gap-20 xl:self-start'
			)}
		>
			<Button to='/contact'>Contact&nbsp;us</Button>
			<SocialLinks />
		</div>

		<HeroImage />
	</div>
);

export default Hero;
