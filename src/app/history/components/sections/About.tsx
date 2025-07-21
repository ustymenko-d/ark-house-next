import Image from 'next/image'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import Button from '@/components/UI/Button'

const About = () => (
	<section className='mb-16 xl:grid xl:gap-x-6 xl:grid-cols-[61.3%_auto] xl:grid-rows-[auto_1fr]'>
		<h2 className='mb-4 text-5xl font-semibold leading-normal tracking-tight xl:col-span-2'>
			Who we are
		</h2>

		<Image
			className='w-full h-full mb-4 bg-dark-color xl:mb-0'
			src='/img/history-page/meet.jpg'
			width={844}
			height={563}
			sizes='(max-width: 639px) 92vw, (max-width: 767px) 608px, (max-width: 1023px) 688px, (max-width: 1279px) 864px, 844px'
			quality={100}
			alt='Meet'
		/>

		<div className='text-xl'>
			<p className='mb-6'>
				We are dedicated individuals from a range of different countries. Based in Oslo, with
				offices in Copenhagen, London and Reykjavik, we are actively involved in projects in various
				countries across Europe, Africa, the Middle East and Asia.
			</p>
			<p className='mb-6'>
				Together, we are a community with a culture for beautiful and outstanding architecture, a
				culture that is Powered by Commitment.
			</p>
			<AnimatedWrapper>
				<p className='mb-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl'>
					Do you want to work with us?
				</p>
			</AnimatedWrapper>
			<AnimatedWrapper delay={0.2}>
				<Button to='/contact'>Our&nbsp;Vacancies</Button>
			</AnimatedWrapper>
		</div>
	</section>
)

export default About
