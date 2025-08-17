import clsx from 'clsx';

import AnimatedWrapper from '@/components/AnimatedWrapper';
import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/UI/Button';
import { ONE_PROJECT } from '@/const/const';

const gridItemClasses = [
	'md:col-span-7',
	'md:col-span-5',
	'md:col-span-5',
	'md:col-span-7',
	'md:col-span-7',
	'md:col-span-5',
] as const;

const Gallery = () => (
	<section className='mb-14 md:mb-20'>
		<div className='topline container mx-auto mb-14 px-4 md:px-10 lg:px-20'>
			<h2 className='font-semibold leading-tight'>Gallery</h2>
			<Button to='/contact'>Contact&nbsp;Us</Button>
		</div>

		<div className='container mx-auto grid gap-x-4 gap-y-7 px-4 md:grid-cols-12 md:grid-rows-3 md:px-10 lg:px-20 xl:grid-rows-3 xl:gap-8'>
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
);

export default Gallery;
