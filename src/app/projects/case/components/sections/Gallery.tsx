import clsx from 'clsx'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/UI/Button'
import { ONE_PROJECT } from '@/const/const'

const gridItemClasses = [
	'md:col-span-7',
	'md:col-span-5',
	'md:col-span-5',
	'md:col-span-7',
	'md:col-span-7',
	'md:col-span-5',
] as const

const Gallery = () => (
	<section className='mb-14 md:mb-20'>
		<div className='container px-4 mx-auto md:px-10 lg:px-20 topline mb-14'>
			<h2 className='font-semibold leading-tight'>Gallery</h2>
			<Button to='/contact'>Contact&nbsp;Us</Button>
		</div>

		<div className='container grid px-4 mx-auto md:px-10 lg:px-20 md:grid-cols-12 gap-x-4 gap-y-7 xl:grid-rows-3 xl:gap-8 md:grid-rows-3'>
			{ONE_PROJECT.map((project, idx) => (
				<div
					key={`project-${idx}`}
					className={clsx(gridItemClasses[idx], 'duration-200')}>
					<AnimatedWrapper className='h-full'>
						<ProjectCard {...project} />
					</AnimatedWrapper>
				</div>
			))}
		</div>
	</section>
)

export default Gallery
