import Breadcrumbs from '@/components/Breadcrumbs'
import Tabs from '@/components/Tabs/Tabs'
import Button from '@/components/UI/Button'
import { TEAM_TABS } from '@/const/const'

import Gallery from './components/sections/Gallery'
import Hero from './components/sections/Hero'

const navItems = [
	{ name: 'Home', href: '/' },
	{ name: 'Projects', href: '/projects' },
	{ name: 'Central Saint Giles' },
]

const ProjectPage = () => (
	<main className='flex-auto'>
		<div className='container px-4 mx-auto md:px-10 lg:px-20'>
			<Breadcrumbs navItems={navItems} />
		</div>

		<Hero />
		<Gallery />

		<div className='container px-4 mx-auto md:px-10 lg:px-20 topline mb-14'>
			<h2 className='font-semibold leading-tight'>Development team</h2>
			<Button to='/contact'>Contact&nbsp;Us</Button>
		</div>

		<div className='container px-4 mx-auto mb-14 md:px-10 lg:px-20'>
			<Tabs
				tabsList={TEAM_TABS}
				tabsType='team'
			/>
		</div>
	</main>
)

export default ProjectPage
