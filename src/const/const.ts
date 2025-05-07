import {
	Article,
	NavigationLink,
	ProjectCase,
	ProjectCharacteristic,
	TabList,
} from './const.types'

export const PROJECT_DESCRIPTION: string =
	'The project is built with React and Next.js. TypeScript ensures type safety and code reliability, while TailwindCSS enables fast, consistent styling. Zustand handles global state management, and Zod provides data validation.'

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
]

export const PROJECTS_CASES: ProjectCase[] = [
	{
		title: 'UVU Classroom Building',
		subtitle: 'Omer, UT',
		imgSrc: '/img/projects-page/arc/classroom',
		category: 'Architecture',
	},
	{
		title: 'Thomas S. Monson Center',
		subtitle: 'Salt Lake City',
		imgSrc: '/img/projects-page/arc/monson',
		category: 'Architecture',
	},
	{
		title: 'USU Swaner Preserve and Ecocenter',
		subtitle: 'Logan, UT',
		imgSrc: '/img/projects-page/arc/swaner',
		category: 'Architecture',
	},
	{
		title: 'UVU Fulton Library',
		subtitle: 'Orem, UT',
		imgSrc: '/img/projects-page/arc/fulton',
		category: 'Architecture',
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		imgSrc: '/img/projects-page/arc/college',
		category: 'Architecture',
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Salt Lake City, UT',
		imgSrc: '/img/projects-page/arc/sugar-house',
		category: 'Architecture',
	},
	{
		title: 'UTA TRAX: Mid-Jordan Line',
		subtitle: 'Salt Lake County, UT',
		imgSrc: '/img/projects-page/arc/trax',
		category: 'Architecture',
	},
	{
		title: 'Unified State Laboratory - Module 2',
		subtitle: 'Salt Lake City, UT',
		imgSrc: '/img/projects-page/arc/lab',
		category: 'Architecture',
	},
	{
		title: 'U of U Sutton Geology and Geophysics',
		subtitle: 'Salt Lake City, UT',
		imgSrc: '/img/projects-page/arc/sutton',
		category: 'Architecture',
	},
	{
		title: 'S - Line',
		subtitle: 'Salt Lake City, UT',
		imgSrc: '/img/projects-page/arc/s-line',
		category: 'Architecture',
	},
	// Landscape
	{
		title: 'UVU Fulton Library',
		subtitle: 'Orem, UT',
		imgSrc: '/img/projects-page/landscape/1',
		category: 'Landscape',
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		imgSrc: '/img/projects-page/landscape/2',
		category: 'Landscape',
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Salt Lake City, UT',
		imgSrc: '/img/projects-page/landscape/3',
		category: 'Landscape',
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		imgSrc: '/img/projects-page/landscape/4',
		category: 'Landscape',
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Salt Lake City, UT',
		imgSrc: '/img/projects-page/landscape/5',
		category: 'Landscape',
	},
	// Interior
	{
		title: 'UVU Fulton Library',
		subtitle: 'Orem, UT',
		imgSrc: '/img/projects-page/interior/1',
		category: 'Interior',
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, RT',
		imgSrc: '/img/projects-page/interior/2',
		category: 'Interior',
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Salt Lake City, UT',
		imgSrc: '/img/projects-page/interior/3',
		category: 'Interior',
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Salt Logan, UT',
		imgSrc: '/img/projects-page/interior/4',
		category: 'Interior',
	},
	{
		title: 'USU House Monument Plaza Agriculture',
		subtitle: 'Salt Lake City, UT',
		imgSrc: '/img/projects-page/interior/5',
		category: 'Interior',
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		imgSrc: '/img/projects-page/interior/6',
		category: 'Interior',
	},
	// Design
	{
		title: 'UVU Fulton Plaza',
		subtitle: 'Orem, UT',
		imgSrc: '/img/projects-page/design/first',
		category: 'Design',
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		imgSrc: '/img/projects-page/design/second',
		category: 'Design',
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Logan, UT',
		imgSrc: '/img/projects-page/design/third',
		category: 'Design',
	},
]

export const SERVICES_TABS: TabList = {
	tabs: ['Architecture', 'Landscape', 'Interior', 'Design'],
	tabsContent: [
		{ tabName: 'Architecture', content: '/home-page/services-arc' },
		{ tabName: 'Landscape', content: '/home-page/services-landscape' },
		{ tabName: 'Interior', content: '/home-page/services-interior' },
		{ tabName: 'Design', content: '/home-page/services-design' },
	],
}

export const TEAM_TABS: TabList = {
	tabs: ['Management', 'Architects', 'Engineers', 'Builders'],
	tabsContent: [
		{
			tabName: 'Management',
			content: [
				{
					imgSrc: '/team/managment/jane',
					name: 'Jane Cooper',
					role: 'Art Director',
				},
				{
					imgSrc: '/team/managment/cameron',
					name: 'Cameron Williamson',
					role: 'Senior Manager',
				},
				{
					imgSrc: '/team/managment/brooklyn',
					name: 'Brooklyn Simmons',
					role: 'PR Manager',
				},
				{
					imgSrc: '/team/managment/jacob',
					name: 'Jacob Jones',
					role: 'Financial Director',
				},
				{
					imgSrc: '/team/managment/jerome',
					name: 'Jerome Bell',
					role: 'Lead Designer',
				},
				{
					imgSrc: '/team/managment/kristin',
					name: 'Kristin Watson',
					role: 'HR Manager',
				},
			],
		},
		{
			tabName: 'Engineers',
			content: [
				{
					imgSrc: '/team/engineers/caleb',
					name: 'Caleb Hayes',
					role: 'Project Architect',
				},
				{
					imgSrc: '/team/engineers/grace',
					name: 'Grace Sullivan',
					role: 'Design Architect',
				},
				{
					imgSrc: '/team/engineers/isabella',
					name: 'Isabella Jordan',
					role: 'Urban Planner',
				},
				{
					imgSrc: '/team/engineers/leo',
					name: 'Leo Bennett',
					role: 'Sustainable Specialist',
				},
				{
					imgSrc: '/team/engineers/lily',
					name: 'Lily Coleman',
					role: 'Interior Architect',
				},
				{
					imgSrc: '/team/engineers/owen',
					name: 'Owen Mitchell',
					role: 'BIM Specialist',
				},
			],
		},
		{
			tabName: 'Architects',
			content: [
				{
					imgSrc: '/team/arc/ava',
					name: 'Ava Reynolds',
					role: 'Mechanical Engineer',
				},
				{
					imgSrc: '/team/arc/ethan',
					name: 'Ethan Anderson',
					role: 'Civil Engineer',
				},
				{
					imgSrc: '/team/arc/gabriel',
					name: 'Gabriel Rivera',
					role: 'Electrical Engineer',
				},
				{
					imgSrc: '/team/arc/mason',
					name: 'Mason Parker',
					role: 'Software Engineer',
				},
				{
					imgSrc: '/team/arc/sophia',
					name: 'Sophia Myers',
					role: 'Environmental Engineer',
				},
			],
		},
		{
			tabName: 'Builders',
			content: [
				{
					imgSrc: '/team/builder/robert',
					name: 'Robert Fox',
					role: 'Chief Engineer',
				},
				{
					imgSrc: '/team/builder/devon',
					name: 'Devon Lane',
					role: 'Lead designer',
				},
				{
					imgSrc: '/team/builder/olivia',
					name: 'Olivia Turner',
					role: 'Communications Engineer',
				},
				{
					imgSrc: '/team/builder/jerome',
					name: 'Jerome Bell',
					role: 'Communications Engineer',
				},
			],
		},
	],
}

const ARCHITECTURE_CASES = PROJECTS_CASES.filter(
	(projectCase) => projectCase.category === 'Architecture'
)
const LANDSCAPE_CASES = PROJECTS_CASES.filter(
	(projectCase) => projectCase.category === 'Landscape'
)
const INTERIOR_CASES = PROJECTS_CASES.filter(
	(projectCase) => projectCase.category === 'Interior'
)
const DESIGN_CASES = PROJECTS_CASES.filter(
	(projectCase) => projectCase.category === 'Design'
)

export const PROJECTS_TABS: TabList = {
	tabs: ['All Projects', 'Architecture', 'Landscape', 'Interior', 'Design'],
	tabsContent: [
		{ tabName: 'All Projects', content: PROJECTS_CASES },
		{ tabName: 'Architecture', content: ARCHITECTURE_CASES },
		{ tabName: 'Landscape', content: LANDSCAPE_CASES },
		{ tabName: 'Interior', content: INTERIOR_CASES },
		{ tabName: 'Design', content: DESIGN_CASES },
	],
}

export const BLOG_ARTICLES: Article[] = [
	{
		title: 'Design and architecture training',
		content:
			'Designers and architects learn through a combination of formal education, practical experience, and continuing professional development.',
		dateTime: '2023-01-01',
		date: 'Nov 01, 2023',
		imgSrc: '/img/home-page/blog-items/meet',
	},
	{
		title: 'Design of public spaces',
		content:
			'Public space design focuses on creating functional, safe, and visually appealing areas that foster social connections, community involvement, and a strong sense of place.',
		dateTime: '2023-11-12',
		date: 'Nov 12, 2023',
		imgSrc: '/img/home-page/blog-items/street',
	},
]

export const PROJECT_CHARACTERISTICS: ProjectCharacteristic[] = [
	{
		characteristic: 'Construction cost',
		value: '130 mill NOK',
	},
	{
		characteristic: 'Location',
		value: 'London',
	},
	{
		characteristic: 'Area',
		value: '70.000 m',
	},
	{
		characteristic: 'Client',
		value: 'Vanre MVC',
	},
	{
		characteristic: 'Year',
		value: '2018',
	},
]

export const ONE_PROJECT: ProjectCase[] = [
	{
		title: 'Front facades',
		subtitle: 'London',
		imgSrc: '/img/project/first',
	},
	{
		title: 'Facades from the side',
		subtitle: 'London',
		imgSrc: '/img/project/second',
	},
	{
		title: 'Facades close up',
		subtitle: 'London',
		imgSrc: '/img/project/third',
	},
	{
		title: 'Facades close up',
		subtitle: 'London',
		imgSrc: '/img/project/fourth',
	},
	{
		title: 'Side glass panels',
		subtitle: 'London',
		imgSrc: '/img/project/fifth',
	},
	{
		title: 'Hanging balconies',
		subtitle: 'London',
		imgSrc: '/img/project/sixth',
	},
]
