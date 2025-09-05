import { Suspense } from 'react';

import Loader from '@/components/Loader';
import Button from '@/components/UI/Button';

import Content from './components/Content';

const Projects = () => (
	<section id='projects' className='mb-14 px-4'>
		<div className='topline container mx-auto mb-14 md:px-10 lg:px-20'>
			<h2 className='font-semibold leading-tight'>Recent Projects</h2>
			<Button to='/projects'>Discover&nbsp;All</Button>
		</div>

		<Suspense fallback={<Loader />}>
			<Content />
		</Suspense>
	</section>
);

export default Projects;
