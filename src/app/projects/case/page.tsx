import { Suspense } from 'react';

import Breadcrumbs from '@/components/Breadcrumbs';

import Content from './components/Content';
// import Team from './components/sections/Team';

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

		<Suspense
			fallback={
				<div className='container mx-auto md:px-10 lg:px-20'>
					<p>Loading...</p>
				</div>
			}>
			<Content />
			{/* <Team /> */}
		</Suspense>
	</main>
);

export default ProjectPage;
