import React from 'react'
import Image from 'next/image'
import ProjectCharacteristicItem from '../../ProjectCharacteristicItem/ProjectCharacteristicItem'
import { PROJECT_CHARACTERISTICS } from '@/const/const'
import styles from './HeroSection.module.css'

const HeroSection: React.FC = () => {
	return (
		<section className='mb-14 pt-8'>
			<div className='container mx-auto px-4 md:px-10 lg:px-20'>
				<h1 className='mb-4 text-5xl font-semibold'>Central Saint Giles</h1>

				<div className={`${styles.grid} mb-4 grid gap-6`}>
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
							className='min-h-48 h-full block bg-dark-color shadow'
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
					program forming the heart of a large residential development. The
					double helix structure towards the wetland area gives 360 degrees
					overview of the neighbourhood as one walks up to the panoramic gallery
					at top.
				</p>
			</div>
		</section>
	)
}

export default HeroSection
