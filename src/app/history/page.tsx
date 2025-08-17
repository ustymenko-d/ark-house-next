import Breadcrumbs from '@/components/Breadcrumbs';

import About from './components/sections/About';
import History from './components/sections/History';

const navItems = [{ name: 'Home', href: '/' }, { name: 'Our History' }];

const HistoryPage = () => (
	<main className='container mx-auto flex-auto px-4 md:px-10 lg:px-20'>
		<Breadcrumbs navItems={navItems} />
		<About />
		<History />
	</main>
);

export default HistoryPage;
