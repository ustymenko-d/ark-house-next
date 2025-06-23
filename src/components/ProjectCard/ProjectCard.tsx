import clsx from 'clsx'
import Image from 'next/image'

import { ProjectCase } from '@/const/const.types'

import Logo from '../UI/Logo'
import styles from './ProjectCard.module.css'

const ProjectCard = ({ projectCase }: { projectCase: ProjectCase }) => {
	const { title, subtitle, imgSrc } = projectCase

	return (
		<div className='relative flex flex-col h-full gap-1 tracking-tight text-center bg-neutral-100 md:text-left md:bg-transparent'>
			<div className='flex flex-col justify-start h-full gap-2 md:gap-4'>
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
						className='w-full h-full shadow min-h-20 bg-dark-color'
						src={`${imgSrc}.jpg`}
						alt='Project case'
						loading='lazy'
					/>
				</picture>

				<p className={clsx(styles.title, 'mb-2 font-semibold leading-tight')}>
					{title}
					<br />
					<span className={styles.subtitle}>{subtitle}</span>
				</p>
			</div>
			<Logo className='absolute w-1/3 pointer-events-none left-4 top-4 max-w-16' />
		</div>
	)
}

export default ProjectCard
