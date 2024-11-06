import Breadcrumbs from '@/components/Breadcrumbs/Breadcrumbs'
import About from './components/sections/About/About'
import History from './components/sections/History/History'

const HistoryPage: React.FC = () => {
	const navItems = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'Our History',
		},
	]

	return (
		<main className='container mx-auto px-4 md:px-10 lg:px-20 flex-auto'>
			<Breadcrumbs navItems={navItems} />
			<About />
			<History />
		</main>
	)
}

export default HistoryPage
