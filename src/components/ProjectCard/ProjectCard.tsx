import React from 'react'
import { ProjectCase } from '@/const/const.interfaces'
import Image from 'next/image'
import Logo from '../UI/Logo/Logo'
import styles from './ProjectCard.module.css'

interface ProjectCardProps {
	projectCase: ProjectCase
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectCase }) => {
	const { title, subtitle, imgSrc } = projectCase

	return (
		<div className='relative h-full flex flex-col gap-1 tracking-tight text-center bg-neutral-100 md:text-left md:bg-transparent'>
			<div className='h-full flex flex-col justify-start gap-2 md:gap-4'>
				<picture className='flex-grow w-full'>
					<source
						media='(max-width: 1250px)'
						srcSet={`${imgSrc}@mob.webp`}
						type='image/webp'
					/>
					<source
						media='(max-width: 1250px)'
						srcSet={`${imgSrc}@mob.jpg`}
					/>
					<source
						srcSet={`${imgSrc}.webp`}
						type='image/webp'
					/>
					<Image
						width={896}
						height={985}
						className='w-full h-full min-h-20 bg-dark-color'
						src={`${imgSrc}.jpg`}
						alt='Project case'
						loading='lazy'
					/>
				</picture>

				<p className={`${styles.title} font-semibold leading-tight`}>
					{title}
					<br />
					<span className={styles.subtitle}>{subtitle}</span>
				</p>
			</div>
			<Logo classes='absolute left-4 top-4 w-1/3 max-w-16 pointer-events-none' />
		</div>
	)
}

export default ProjectCard
