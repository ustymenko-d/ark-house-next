import Image from 'next/image'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import Button from '@/components/UI/Button/Button'

import styles from './AboutSection.module.css'

const imagesNames: string[] = ['about-1', 'about-2', 'about-3']

const AboutSection = () => (
	<section
		id='about'
		className='mb-14'>
		<div className='container px-4 mx-auto md:px-10 md:border-t md:border-t-dark-color md:pt-14 md:text-center lg:px-20'>
			<h1 className={`${styles.title} mb-10 font-semibold`}>
				Forming an irrational love between clients and their buildings
			</h1>
			<p className={`${styles.text} mb-6`}>
				Our approach starts with...
				<br />
				How do you want to make people feel?
			</p>

			<div className='grid grid-cols-3 mb-8 sm:mb-8 sm:gap-5 lg:gap-10'>
				{imagesNames.map((item, index) => (
					<div
						key={`${item}-${index}`}
						className={`${styles.wrapper} overflow-hidden relative aspect-square`}>
						<AnimatedWrapper delay={(index + (index + 2)) * 0.1}>
							<picture className='relative z-10'>
								<source
									srcSet={`/img/home-page/${item}.webp`}
									type='image/webp'
								/>
								<source
									srcSet={`/img/home-page/${item}.png`}
									type='image/png'
								/>
								<Image
									src={`/img/home-page/${item}.png`}
									width={750}
									height={750}
									alt='Building'
								/>
							</picture>
						</AnimatedWrapper>
					</div>
				))}
			</div>

			<p className={`${styles.text} mb-6`}>
				In the face of changing trends and technologies, ARK House creates
				architecture that remains relevant - not based on trends, fads or dates
				- but on timeless human truths.
			</p>
			<Button to='/history'>Our&nbsp;History</Button>
		</div>
	</section>
)

export default AboutSection
