import Image from 'next/image'
import React from 'react'

import { PROJECT_CHARACTERISTICS } from '@/const/const'

import ProjectCharacteristicItem from '../ProjectCharacteristicItem'

const Hero = () => (
	<section className='pt-8 mb-14'>
		<div className='container px-4 mx-auto md:px-10 lg:px-20'>
			<h1 className='mb-4 text-5xl font-semibold'>Central Saint Giles</h1>

			<div className='mb-4 grid gap-6 sm:grid-cols-[1fr_auto] xl:grid-cols-[73%_auto]'>
				<picture className='lg:row-span-full'>
					<source
						media='(max-width: 1023px)'
						srcSet='/img/project/hero@mob.webp'
						type='image/webp'
					/>
					<source
						media='(max-width: 1023px)'
						srcSet='/img/project/hero@mob.jpg'
					/>
					<source
						srcSet='/img/project/hero.webp'
						type='image/webp'
					/>
					<Image
						width={4000}
						height={3000}
						className='block h-full shadow min-h-48 bg-dark-color'
						src='/img/project/hero.jpg'
						alt='Central Saint Giles'
					/>
				</picture>

				<div className='flex flex-wrap gap-x-8 gap-y-4 sm:flex-col sm:gap-4'>
					{PROJECT_CHARACTERISTICS.map((characteristic, index) => (
						<ProjectCharacteristicItem
							key={`char-${index}`}
							charItem={characteristic}
						/>
					))}
				</div>
			</div>
			<p className='text-xl'>
				Nanchang Wave is a landscape based community centre with a varied
				program forming the heart of a large residential development. The double
				helix structure towards the wetland area gives 360 degrees overview of
				the neighbourhood as one walks up to the panoramic gallery at top.
			</p>
		</div>
	</section>
)

export default Hero
