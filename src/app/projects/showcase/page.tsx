import { Suspense } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';
import Loader from '@/components/Loader';

import Content from './components/Content';
import Team from './components/sections/Team';

const navItems = [
	{ name: 'Home', href: '/' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Central Saint Giles' },
];

const ProjectPage = () => (
	<main className='flex-auto'>
		<div className='container mx-auto px-4 md:px-10 lg:px-20'>
			<Breadcrumbs navItems={navItems} />
		</div>

		<Suspense fallback={<Loader className='h-64 justify-center' />}>
			<Content />
		</Suspense>

		<Team />
	</main>
);

export default ProjectPage;
