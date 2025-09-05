import clsx from 'clsx';
import Image from 'next/image';

import AnimatedWrapper from '@/components/AnimatedWrapper';
import Button from '@/components/UI/Button';

const imagesNames: string[] = ['about-1', 'about-2', 'about-3'];

const AboutSection = () => (
	<section id='about' className='mb-14'>
		<div className='container mx-auto px-4 md:border-t md:border-t-dark-color md:px-10 md:pt-14 md:text-center lg:px-20'>
			<h1 className='mb-10 text-4xl font-semibold tracking-tight md:text-5xl xl:mx-auto xl:max-w-[80%]'>
				Forming an irrational love between clients and their buildings
			</h1>
			<p className='mb-6 text-xl tracking-tight md:mx-auto md:w-3/4 md:text-2xl xl:w-1/2'>
				Our approach starts with...
				<br />
				How do you want to make people feel?
			</p>

			<div className='mb-8 grid grid-cols-3 sm:gap-5 lg:gap-10'>
				{imagesNames.map((item, index) => (
					<div
						key={`${item}-${index}`}
						className={clsx(
							'relative aspect-square overflow-hidden',
							'before:absolute before:bottom-0 before:left-0 before:right-0 before:h-3/4 before:w-full before:bg-[rgb(248,248,248)] before:content-[""]'
						)}>
						<AnimatedWrapper delay={(index + (index + 2)) * 0.1}>
							<Image
								className='relative z-[1]'
								src={`/img/home-page/${item}.png`}
								width={432}
								height={432}
								quality={90}
								sizes='(max-width: 639px) 31vw, (max-width: 767px) 190px, (max-width: 1023px) 216px, (max-width: 1279px) 262px, 432px'
								alt='Building'
							/>
						</AnimatedWrapper>
					</div>
				))}
			</div>

			<p className='mb-6 text-base tracking-tight text-gray-800 md:mx-auto md:w-3/4 md:text-lg xl:w-1/2'>
				In the face of changing trends and technologies, ARK House creates
				architecture that remains relevant - not based on trends, fads or dates
				- but on timeless human truths.
			</p>
			<Button to='/history'>Our&nbsp;History</Button>
		</div>
	</section>
);

export default AboutSection;
