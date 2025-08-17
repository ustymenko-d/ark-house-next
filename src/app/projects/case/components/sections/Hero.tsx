import React from 'react';

import ImageWithSkeleton from '@/components/UI/ImageWithSkeleton';
import { PROJECT_CHARACTERISTICS } from '@/const/const';

import Characteristics from '../Characteristics';

const Hero = () => (
	<section className='mb-14 pt-6'>
		<div className='container mx-auto px-4 md:px-10 lg:px-20'>
			<h1 className='mb-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl'>
				Central Saint Giles
			</h1>

			<div className='grid gap-6 sm:grid-cols-[1fr_auto] xl:grid-cols-[66%_auto] xl:grid-rows-[auto_auto]'>
				<ImageWithSkeleton
					src='/img/project/hero.jpg'
					alt='Central Saint Giles'
					width={1005}
					height={754}
					sizes='(max-width: 639px) 84vw, (max-width: 767px) 360px, (max-width: 1023px) 440px, (max-width: 1279px) 616px, 1005px'
					className='block h-full min-h-48 bg-dark-color shadow xl:row-span-2'
				/>

				<div className='flex flex-wrap gap-x-8 gap-y-4 sm:flex-col sm:gap-4'>
					{PROJECT_CHARACTERISTICS.map((characteristic, index) => (
						<Characteristics key={`char-${index}`} char={characteristic} />
					))}
				</div>

				<p className='text-balance text-base text-gray-800 sm:max-xl:col-span-2 md:text-lg xl:self-end'>
					Nanchang Wave is a landscape based community centre with a varied
					program forming the heart of a large residential development. The
					double helix structure towards the wetland area gives 360 degrees
					overview of the neighbourhood as one walks up to the panoramic gallery
					at top.
				</p>
			</div>
		</div>
	</section>
);

export default Hero;
