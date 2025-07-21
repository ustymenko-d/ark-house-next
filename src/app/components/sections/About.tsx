import clsx from 'clsx'
import Image from 'next/image'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import Button from '@/components/UI/Button'

const imagesNames: string[] = ['about-1', 'about-2', 'about-3']

const AboutSection = () => (
	<section
		id='about'
		className='mb-14'>
		<div className='container px-4 mx-auto md:px-10 md:border-t md:border-t-dark-color md:pt-14 md:text-center lg:px-20'>
			<h1 className='mb-10 text-4xl font-semibold md:text-5xl xl:max-w-[80%] xl:mx-auto tracking-tight'>
				Forming an irrational love between clients and their buildings
			</h1>
			<p className='mb-6 text-xl tracking-tight md:text-2xl md:w-3/4 md:mx-auto xl:w-1/2'>
				Our approach starts with...
				<br />
				How do you want to make people feel?
			</p>

			<div className='grid grid-cols-3 mb-8 sm:mb-8 sm:gap-5 lg:gap-10'>
				{imagesNames.map((item, index) => (
					<div
						key={`${item}-${index}`}
						className={clsx(
							'overflow-hidden relative aspect-square',
							'before:content-[""] before:absolute before:left-0 before:right-0 before:bottom-0 before:w-full before:h-3/4 before:bg-[rgb(248,248,248)]'
						)}>
						<AnimatedWrapper delay={(index + (index + 2)) * 0.1}>
							<Image
								className='relative z-[1]'
								src={`/img/home-page/${item}.png`}
								width={432}
								height={432}
								quality={100}
								sizes='(max-width: 639px) 31vw, (max-width: 767px) 190px, (max-width: 1023px) 216px, (max-width: 1279px) 262px, 432px'
								alt='Building'
							/>
						</AnimatedWrapper>
					</div>
				))}
			</div>

			<p className='mb-6 text-xl tracking-tight md:text-2xl md:w-3/4 md:mx-auto xl:w-1/2'>
				In the face of changing trends and technologies, ARK House creates architecture that remains
				relevant - not based on trends, fads or dates - but on timeless human truths.
			</p>
			<Button to='/history'>Our&nbsp;History</Button>
		</div>
	</section>
)

export default AboutSection
