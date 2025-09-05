import Breadcrumbs from '@/components/Breadcrumbs';

import ProjectsTabs from './components/ProjectsTabs';

const navItems = [{ name: 'Home', href: '/' }, { name: 'Projects' }];

const ProjectsPage = () => (
	<main className='flex-auto'>
		<div className='container mx-auto px-4 md:px-10 lg:px-20'>
			<Breadcrumbs navItems={navItems} />

			<section className='mb-10 pt-6'>
				<h1 className='mb-6 text-4xl font-semibold leading-tight tracking-tight md:text-5xl'>
					Projects
				</h1>
				<p className='mb-4 text-xl font-semibold sm:text-3xl'>
					Our projects are examples of attitudes rather than design
				</p>
				<p className='mb-8 text-balance text-base text-gray-800 md:text-lg lg:w-4/5'>
					They are samples in a series of contextual examination rather than
					isolated masterpieces. They are associative rather than symbolic. They
					are comments rather than statements. Every story told is a shared
					experience of contemporary conditions set within a given frame.
				</p>

				<ProjectsTabs />
			</section>
		</div>
	</main>
);

export default ProjectsPage;
