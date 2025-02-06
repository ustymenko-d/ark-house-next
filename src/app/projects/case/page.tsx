import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import HeroSection from './components/sections/HeroSection/HeroSection'
import GallerySection from './components/sections/GallerySection/GallerySection'
import Tabs from '@/components/Tabs/Tabs'
import { TEAM_TABS } from '@/const/const'
import Button from '@/components/UI/Button/Button'

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
			<div className='container px-4 mx-auto md:px-10 lg:px-20'>
				<Breadcrumbs navItems={navItems} />
			</div>

			<HeroSection />
			<GallerySection />

			<div className='container px-4 mx-auto md:px-10 lg:px-20 topline mb-14'>
				<h2 className='font-semibold leading-tight'>Development team</h2>
				<Button linkHref='/contact'>Contact&nbsp;Us</Button>
			</div>

			<div className='container px-4 mx-auto mb-14 md:px-10 lg:px-20'>
				<Tabs
					tabsList={TEAM_TABS}
					tabsType='team'
				/>
			</div>
		</main>
	)
}

export default ProjectPage
