import React from 'react'

import ImageWithSkeleton from '@/components/UI/ImageWithSkeleton'
import { PROJECT_CHARACTERISTICS } from '@/const/const'

import Characteristics from '../Characteristics'

const Hero = () => (
	<section className='pt-8 mb-14'>
		<div className='container px-4 mx-auto md:px-10 lg:px-20'>
			<h1 className='mb-4 text-5xl font-semibold'>Central Saint Giles</h1>

			<div className='mb-4 grid gap-6 sm:grid-cols-[1fr_auto] xl:grid-cols-[73%_auto]'>
				<ImageWithSkeleton
					src='/img/project/hero.jpg'
					alt='Central Saint Giles'
					width={1005}
					height={754}
					sizes='(max-width: 639px) 84vw, (max-width: 767px) 360px, (max-width: 1023px) 440px, (max-width: 1279px) 616px, 1005px'
					className='block h-full shadow min-h-48 bg-dark-color'
				/>

				<div className='flex flex-wrap gap-x-8 gap-y-4 sm:flex-col sm:gap-4'>
					{PROJECT_CHARACTERISTICS.map((characteristic, index) => (
						<Characteristics
							key={`char-${index}`}
							char={characteristic}
						/>
					))}
				</div>
			</div>
			<p className='text-xl'>
				Nanchang Wave is a landscape based community centre with a varied program forming the heart
				of a large residential development. The double helix structure towards the wetland area
				gives 360 degrees overview of the neighbourhood as one walks up to the panoramic gallery at
				top.
			</p>
		</div>
	</section>
)

export default Hero
