import React from 'react'
import Image from 'next/image'
import ProjectCharacteristicItem from '../../ProjectCharacteristicItem/ProjectCharacteristicItem'
import { PROJECT_CHARACTERISTICS } from '@/const/const'
import styles from './HeroSection.module.css'
import AnimatedWrapper from '@/components/AnimatedWrapper/AnimatedWrapper'

const HeroSection: React.FC = () => {
	return (
		<section className='mb-14 pt-8'>
			<div className='container mx-auto px-4 md:px-10 lg:px-20'>
				<h1 className='mb-4 text-5xl font-semibold'>Central Saint Giles</h1>

				<div className={`${styles.grid} mb-4 grid gap-6`}>
					<picture className='lg:row-span-full'>
						<source
							media='(max-width: 1024px)'
							srcSet='/img/project/hero@mob.webp'
							type='image/webp'
						/>
						<source
							media='(max-width: 1024px)'
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

					<div className='flex flex-col gap-4'>
						{PROJECT_CHARACTERISTICS.map((characteristic, index) => (
							<AnimatedWrapper
								key={`char-${index}`}
								delay={(index + (++index + 1)) * 0.1}>
								<ProjectCharacteristicItem charItem={characteristic} />
							</AnimatedWrapper>
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
