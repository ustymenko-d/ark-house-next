import clsx from 'clsx'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/UI/Button'
import { ONE_PROJECT } from '@/const/const'

const gridItemClasses = [
	'md:col-start-1 md:col-end-8 md:row-start-1 md:row-end-2',
	'md:col-start-8 md:col-end-13 md:row-start-1 md:row-end-2',
	'md:col-start-1 md:col-end-4 md:row-start-2 md:row-end-3',
	'md:col-start-4 md:col-end-13 md:row-start-2 md:row-end-4',
	'md:col-start-1 md:col-end-7 md:row-start-4 md:row-end-5',
	'md:col-start-7 md:col-end-13 md:row-start-4 md:row-end-5',
] as const

const Gallery = () => (
	<section className='mb-14 md:mb-20'>
		<div className='container px-4 mx-auto md:px-10 lg:px-20 topline mb-14'>
			<h2 className='font-semibold leading-tight'>Gallery</h2>
			<Button to='/contact'>Contact&nbsp;Us</Button>
		</div>

		<div className='container mx-auto px-4 md:px-10 lg:px-20 grid md:grid-cols-12 gap-x-4 gap-y-7 xl:grid-rows-3 xl:gap-8 md:grid-rows-[1fr_0.7fr_0.25fr_1fr]'>
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
