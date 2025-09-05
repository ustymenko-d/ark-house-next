import clsx from 'clsx';

import ProjectCard from '@/components/ProjectCard';
import Button from '@/components/UI/Button';
import { SingleProject } from '../Content';

interface Props {
	gallery: SingleProject['gallery'];
}

const gridItemClasses = [
	'md:col-span-7',
	'md:col-span-5',
	'md:col-span-5',
	'md:col-span-7',
	'md:col-span-7',
	'md:col-span-5',
] as const;

const Gallery = ({ gallery }: Props) => (
	<section className='mb-14 md:mb-20'>
		<div className='topline container mx-auto mb-14 px-4 md:px-10 lg:px-20'>
			<h2 className='font-semibold leading-tight'>Gallery</h2>
			<Button to='/contact'>Contact&nbsp;Us</Button>
		</div>

		<div className='container mx-auto grid gap-x-4 gap-y-7 px-4 md:grid-cols-12 md:grid-rows-3 md:px-10 lg:px-20 xl:grid-rows-3 xl:gap-8'>
			{gallery &&
				gallery.map(
					(elem, idx) =>
						elem && (
							<div
								key={`${elem.title}-${idx}`}
								className={clsx(gridItemClasses[idx], 'duration-200')}>
								<ProjectCard {...elem} />
							</div>
						)
				)}
		</div>
	</section>
);

export default Gallery;
