import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'

const navItems = [
	{
		name: 'Home',
		href: '/',
	},
	{
		name: 'Projects',
		href: '/projects',
	},
	{
		name: 'Central Saint Giles',
	},
]

const ProjectPage: React.FC = () => {
	return (
		<main className='flex-auto'>
			<div className='container mx-auto px-4 md:px-10 lg:px-20'>
				<Breadcrumbs navItems={navItems} />

				
			</div>
		</main>
	)
}

export default ProjectPage
