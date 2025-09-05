import { Address, NavigationLink, TabList } from './const.types';

export const PROJECT_DESCRIPTION: string =
	'The project is built with React and Next.js. TypeScript ensures type safety and code reliability, while TailwindCSS enables fast, consistent styling. Zustand handles global state management, and Zod provides data validation.';

export const NAVIGATION_LINKS: NavigationLink[] = [
	{
		title: 'About',
		href: '#about',
	},
	{
		title: 'Services',
		href: '#services',
	},
	{
		title: 'Projects',
		href: '#projects',
	},
	{
		title: 'Team',
		href: '#team',
	},
	{
		title: 'Blog',
		href: '#blog',
	},
];

export const SERVICES = [
	'Architecture',
	'Landscape',
	'Interior',
	'Design',
] as const;

export const SERVICES_TABS: TabList<string> = {
	tabs: ['Architecture', 'Landscape', 'Interior', 'Design'],
	tabsContent: [
		{ tabName: 'Architecture', content: '/img/home-page/services-arc.jpg' },
		{ tabName: 'Landscape', content: '/img/home-page/services-landscape.jpg' },
		{ tabName: 'Interior', content: '/img/home-page/services-interior.jpg' },
		{ tabName: 'Design', content: '/img/home-page/services-design.jpg' },
	],
};

export const DEPARTMENTS = [
	'Management',
	'Engineers',
	'Architects',
	'Builders',
] as const;

export const ADDRESSES: Address[] = [
	{
		title: 'North',
		lines: [
			'AFL Architects',
			'St Georges House 56',
			'Peter Street',
			'Manchester',
		],
		phone: '+44 (0)161 236 6263',
		href: 'tel:+4401612366263',
	},
	{
		title: 'Midlands',
		lines: ['AFL Architects', 'Unit 12 133', 'Newhall Street', 'Birmingham'],
		phone: '+44 (0)121 289 4363',
		href: 'tel:+4401212894363',
	},
];
