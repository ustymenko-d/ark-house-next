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
			<div className='container mx-auto px-4 md:px-10 lg:px-20'>
				<Breadcrumbs navItems={navItems} />
			</div>

			<HeroSection />
			<GallerySection />

			<div className='topline mb-14 mx-auto container md:px-10 lg:px-20'>
				<h2 className='leading-tight font-semibold'>Development team</h2>
				<Button linkHref='/contact'>Contact&nbsp;Us</Button>
			</div>

			<div className='container mx-auto mb-14 px-4 md:px-10 lg:px-20'>
				<Tabs
					tabsList={TEAM_TABS}
					tabsType='team'
				/>
			</div>
		</main>
	)
}

export default ProjectPage
