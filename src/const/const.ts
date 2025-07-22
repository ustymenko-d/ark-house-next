import {
	Address,
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

export const HOME_PROJECTS: ProjectCase[] = [
	{
		title: 'UVU Classroom Building',
		subtitle: 'Omer, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/classroom.jpg',
			alt: 'UVU Classroom Building',
			width: 896,
			height: 985,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 566px, (max-width: 1535px) 736px, 896px',
		},
	},
	{
		title: 'Thomas S. Monson Center',
		subtitle: 'Salt Lake City',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/monson.jpg',
			alt: 'Thomas S. Monson Center',
			width: 416,
			height: 985,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 267px, (max-width: 1535px) 352px, 416px',
		},
	},
	{
		title: 'USU Swaner Preserve and Ecocenter',
		subtitle: 'Logan, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/swaner.jpg',
			alt: 'USU Swaner Preserve and Ecocenter',
			width: 656,
			height: 985,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 416px, (max-width: 1535px) 544px, 656px',
		},
	},
	{
		title: 'UVU Fulton Library',
		subtitle: 'Orem, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/fulton.jpg',
			alt: 'UVU Fulton Library',
			width: 296,
			height: 445,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 192px, (max-width: 1535px) 256px, 296px',
		},
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/college.jpg',
			alt: 'USU College of Agriculture',
			width: 1016,
			height: 989,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 640px, (max-width: 1535px) 832px, 1016px',
		},
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Salt Lake City, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/sugar-house.jpg',
			alt: 'Sugar House Monument Plaza',
			width: 656,
			height: 985,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 416px, (max-width: 1535px) 544px, 656px',
		},
	},
	{
		title: 'UTA TRAX: Mid-Jordan Line',
		subtitle: 'Salt Lake County, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/trax.jpg',
			alt: 'UTA TRAX: Mid-Jordan Line',
			width: 656,
			height: 985,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 416px, (max-width: 1535px) 544px, 656px',
		},
	},
	{
		title: 'Unified State Laboratory - Module 2',
		subtitle: 'Salt Lake City, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/lab.jpg',
			alt: 'Unified State Laboratory - Module 2',
			width: 896,
			height: 985,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 566px, (max-width: 1535px) 736x, 896px',
		},
	},
	{
		title: 'U of U Sutton Geology and Geophysics',
		subtitle: 'Salt Lake City, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/sutton.jpg',
			alt: 'U of U Sutton Geology and Geophysics',
			width: 416,
			height: 555,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 267px, (max-width: 1535px) 352px, 416px',
		},
	},
	{
		title: 'S - Line',
		subtitle: 'Salt Lake City, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/s-line.jpg',
			alt: 'S - Line',
			width: 656,
			height: 985,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 416px, (max-width: 1535px) 544px, 656px',
		},
	},
]

export const PROJECTS_CASES: ProjectCase[] = [
	{
		title: 'UVU Classroom Building',
		subtitle: 'Omer, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/classroom.jpg',
			alt: 'UVU Classroom Building',
			width: 784,
			height: 676,
		},
	},
	{
		title: 'Thomas S. Monson Center',
		subtitle: 'Salt Lake City',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/monson.jpg',
			alt: 'Thomas S. Monson Center',
			width: 384,
			height: 577,
		},
	},
	{
		title: 'USU Swaner Preserve and Ecocenter',
		subtitle: 'Logan, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/swaner.jpg',
			alt: 'USU Swaner Preserve and Ecocenter',
			width: 584,
			height: 877,
		},
	},
	{
		title: 'UVU Fulton Library',
		subtitle: 'Orem, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/fulton.jpg',
			alt: 'UVU Fulton Library',
			width: 584,
			height: 877,
		},
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/college.jpg',
			alt: 'USU College of Agriculture',
			width: 384,
			height: 1177,
		},
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Salt Lake City, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/sugar-house.jpg',
			alt: 'Sugar House Monument Plaza',
			width: 784,
			height: 1177,
		},
	},
	{
		title: 'UTA TRAX: Mid-Jordan Line',
		subtitle: 'Salt Lake County, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/trax.jpg',
			alt: 'UTA TRAX: Mid-Jordan Line',
			width: 584,
			height: 468,
		},
	},
	{
		title: 'Unified State Laboratory - Module 2',
		subtitle: 'Salt Lake City, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/lab.jpg',
			alt: 'Unified State Laboratory - Module 2',
			width: 584,
			height: 468,
		},
	},
	{
		title: 'U of U Sutton Geology and Geophysics',
		subtitle: 'Salt Lake City, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/sutton.jpg',
			alt: 'U of U Sutton Geology and Geophysics',
			width: 784,
			height: 1045,
		},
	},
	{
		title: 'S - Line',
		subtitle: 'Salt Lake City, UT',
		category: 'Architecture',
		media: {
			src: '/img/projects-page/arc/s-line.jpg',
			alt: 'S - Line',
			width: 384,
			height: 1045,
		},
	},
	// Landscape
	{
		title: 'UVU Fulton Library',
		subtitle: 'Orem, UT',
		category: 'Landscape',
		media: {
			src: '/img/projects-page/landscape/1.jpg',
			alt: 'UVU Fulton Library',
			width: 784,
			height: 1068,
		},
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		category: 'Landscape',
		media: {
			src: '/img/projects-page/landscape/2.jpg',
			alt: 'USU College of Agriculture',
			width: 384,
			height: 1068,
		},
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Salt Lake City, UT',
		category: 'Landscape',
		media: {
			src: '/img/projects-page/landscape/3.jpg',
			alt: 'Sugar House Monument Plaza',
			width: 584,
			height: 798,
		},
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		category: 'Landscape',
		media: {
			src: '/img/projects-page/landscape/4.jpg',
			alt: 'USU College of Agriculture',
			width: 584,
			height: 798,
		},
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Salt Lake City, UT',
		category: 'Landscape',
		media: {
			src: '/img/projects-page/landscape/5.jpg',
			alt: 'Sugar House Monument Plaza',
			width: 384,
			height: 308,
		},
	},
	// Interior
	{
		title: 'UVU Fulton Library',
		subtitle: 'Orem, UT',
		category: 'Interior',
		media: {
			src: '/img/projects-page/interior/1.jpg',
			alt: 'UVU Fulton Library',
			width: 784,
			height: 588,
		},
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, RT',
		category: 'Interior',
		media: {
			src: '/img/projects-page/interior/2.jpg',
			alt: 'USU College of Agriculture',
			width: 384,
			height: 588,
		},
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Salt Lake City, UT',
		category: 'Interior',
		media: {
			src: '/img/projects-page/interior/3.jpg',
			alt: 'Sugar House Monument Plaza',
			width: 584,
			height: 876,
		},
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Salt Logan, UT',
		category: 'Interior',
		media: {
			src: '/img/projects-page/interior/4.jpg',
			alt: 'USU College of Agriculture',
			width: 584,
			height: 876,
		},
	},
	{
		title: 'USU House Monument Plaza Agriculture',
		subtitle: 'Salt Lake City, UT',
		category: 'Interior',
		media: {
			src: '/img/projects-page/interior/5.jpg',
			alt: 'USU House Monument Plaza Agriculture',
			width: 384,
			height: 1147,
		},
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		category: 'Interior',
		media: {
			src: '/img/projects-page/interior/6.jpg',
			alt: 'USU College of Agriculture',
			width: 784,
			height: 1176,
		},
	},
	// Design
	{
		title: 'UVU Fulton Plaza',
		subtitle: 'Orem, UT',
		category: 'Design',
		media: {
			src: '/img/projects-page/design/first.jpg',
			alt: 'UVU Fulton Plaza',
			width: 784,
			height: 1110,
		},
	},
	{
		title: 'USU College of Agriculture',
		subtitle: 'Logan, UT',
		category: 'Design',
		media: {
			src: '/img/projects-page/design/second.jpg',
			alt: 'USU College of Agriculture',
			width: 384,
			height: 1110,
		},
	},
	{
		title: 'Sugar House Monument Plaza',
		subtitle: 'Logan, UT',
		category: 'Design',
		media: {
			src: '/img/projects-page/design/third.jpg',
			alt: 'Sugar House Monument Plaza',
			width: 584,
			height: 676,
		},
	},
]

export const SERVICES_TABS: TabList = {
	tabs: ['Architecture', 'Landscape', 'Interior', 'Design'],
	tabsContent: [
		{ tabName: 'Architecture', content: '/img/home-page/services-arc.jpg' },
		{ tabName: 'Landscape', content: '/img/home-page/services-landscape.jpg' },
		{ tabName: 'Interior', content: '/img/home-page/services-interior.jpg' },
		{ tabName: 'Design', content: '/img/home-page/services-design.jpg' },
	],
}

export const TEAM_TABS: TabList = {
	tabs: ['Management', 'Architects', 'Engineers', 'Builders'],
	tabsContent: [
		{
			tabName: 'Management',
			content: [
				{
					name: 'Jane Cooper',
					role: 'Art Director',
					media: {
						src: '/img/team/managment/jane.jpg',
						alt: 'Jane Cooper',
					},
				},
				{
					name: 'Cameron Williamson',
					role: 'Senior Manager',
					media: {
						src: '/img/team/managment/cameron.jpg',
						alt: 'Cameron Williamson',
					},
				},
				{
					name: 'Brooklyn Simmons',
					role: 'PR Manager',
					media: {
						src: '/img/team/managment/brooklyn.jpg',
						alt: 'Brooklyn Simmons',
					},
				},
				{
					name: 'Jacob Jones',
					role: 'Financial Director',
					media: {
						src: '/img/team/managment/jacob.jpg',
						alt: 'Jacob Jones',
					},
				},
				{
					name: 'Jerome Bell',
					role: 'Lead Designer',
					media: {
						src: '/img/team/managment/jerome.jpg',
						alt: 'Jerome Bell',
					},
				},
				{
					name: 'Kristin Watson',
					role: 'HR Manager',
					media: {
						src: '/img/team/managment/kristin.jpg',
						alt: 'Kristin Watson',
					},
				},
			],
		},
		{
			tabName: 'Engineers',
			content: [
				{
					name: 'Caleb Hayes',
					role: 'Project Architect',
					media: {
						src: '/img/team/engineers/caleb.jpg',
						alt: 'Caleb Hayes',
					},
				},
				{
					name: 'Grace Sullivan',
					role: 'Design Architect',
					media: {
						src: '/img/team/engineers/grace.jpg',
						alt: 'Grace Sullivan',
					},
				},
				{
					name: 'Isabella Jordan',
					role: 'Urban Planner',
					media: {
						src: '/img/team/engineers/isabella.jpg',
						alt: 'Isabella Jordan',
					},
				},
				{
					name: 'Leo Bennett',
					role: 'Sustainable Specialist',
					media: {
						src: '/img/team/engineers/leo.jpg',
						alt: 'Leo Bennett',
					},
				},
				{
					name: 'Lily Coleman',
					role: 'Interior Architect',
					media: {
						src: '/img/team/engineers/lily.jpg',
						alt: 'Lily Coleman',
					},
				},
				{
					name: 'Owen Mitchell',
					role: 'BIM Specialist',
					media: {
						src: '/img/team/engineers/owen.jpg',
						alt: 'Owen Mitchell',
					},
				},
			],
		},
		{
			tabName: 'Architects',
			content: [
				{
					name: 'Ava Reynolds',
					role: 'Mechanical Engineer',
					media: {
						src: '/img/team/arc/ava.jpg',
						alt: 'Ava Reynolds',
					},
				},
				{
					name: 'Ethan Anderson',
					role: 'Civil Engineer',
					media: {
						src: '/img/team/arc/ethan.jpg',
						alt: 'Ethan Anderson',
					},
				},
				{
					name: 'Gabriel Rivera',
					role: 'Electrical Engineer',
					media: {
						src: '/img/team/arc/gabriel.jpg',
						alt: 'Gabriel Rivera',
					},
				},
				{
					name: 'Mason Parker',
					role: 'Software Engineer',
					media: {
						src: '/img/team/arc/mason.jpg',
						alt: 'Mason Parker',
					},
				},
				{
					name: 'Sophia Myers',
					role: 'Environmental Engineer',
					media: {
						src: '/img/team/arc/sophia.jpg',
						alt: 'Sophia Myers',
					},
				},
			],
		},
		{
			tabName: 'Builders',
			content: [
				{
					name: 'Robert Fox',
					role: 'Chief Engineer',
					media: {
						src: '/img/team/builder/robert.jpg',
						alt: 'Robert Fox',
					},
				},
				{
					name: 'Devon Lane',
					role: 'Lead designer',
					media: {
						src: '/img/team/builder/devon.jpg',
						alt: 'Devon Lane',
					},
				},
				{
					name: 'Olivia Turner',
					role: 'Communications Engineer',
					media: {
						src: '/img/team/builder/olivia.jpg',
						alt: 'Olivia Turner',
					},
				},
				{
					name: 'Jerome Bell',
					role: 'Communications Engineer',
					media: {
						src: '/img/team/builder/jerome.jpg',
						alt: 'Jerome Bell',
					},
				},
			],
		},
	],
}

const ARCHITECTURE_CASES = PROJECTS_CASES.filter(
	projectCase => projectCase.category === 'Architecture'
)
const LANDSCAPE_CASES = PROJECTS_CASES.filter(projectCase => projectCase.category === 'Landscape')
const INTERIOR_CASES = PROJECTS_CASES.filter(projectCase => projectCase.category === 'Interior')
const DESIGN_CASES = PROJECTS_CASES.filter(projectCase => projectCase.category === 'Design')

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
		media: {
			src: '/img/home-page/blog-items/meet.jpg',
			alt: 'Meet',
			width: 540,
			height: 386,
			sizes:
				'(max-width: 639px) 587px, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 412x, 540px',
		},
	},
	{
		title: 'Design of public spaces',
		content:
			'Public space design focuses on creating functional, safe, and visually appealing areas that foster social connections, community involvement, and a strong sense of place.',
		dateTime: '2023-11-12',
		date: 'Nov 12, 2023',
		media: {
			src: '/img/home-page/blog-items/street.jpg',
			alt: 'Park',
			width: 540,
			height: 386,
			sizes:
				'(max-width: 639px) 587px, (max-width: 767px) 640px, (max-width: 1023px) 688px, (max-width: 1279px) 412x, 540px',
		},
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
		media: {
			src: '/img/project/first.jpg',
			alt: 'Front facades',
			width: 790,
			height: 832,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 608px, (max-width: 1023px) 395px, (max-width: 1279px) 498px, 790px',
		},
	},
	{
		title: 'Facades from the side',
		subtitle: 'London',
		media: {
			src: '/img/project/second.jpg',
			alt: 'Facades from the side',
			width: 555,
			height: 832,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 608px, (max-width: 1023px) 278px, (max-width: 1279px) 351px, 555px',
		},
	},
	{
		title: 'Facades close up',
		subtitle: 'London',
		media: {
			src: '/img/project/third.jpg',
			alt: 'Facades close up',
			width: 320,
			height: 832,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 608px, (max-width: 1023px) 160px, (max-width: 1279px) 204px, 320px',
		},
	},
	{
		title: 'Facades close up',
		subtitle: 'London',
		media: {
			src: '/img/project/fourth.jpg',
			alt: 'Facades close up',
			width: 1024,
			height: 1778,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 608px, (max-width: 1023px) 512px, (max-width: 1279px) 644px, 1024px',
		},
	},
	{
		title: 'Side glass panels',
		subtitle: 'London',
		media: {
			src: '/img/project/fifth.jpg',
			alt: 'Side glass panels',
			width: 672,
			height: 504,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 608px, (max-width: 1023px) 336px, (max-width: 1279px) 424px, 672px',
		},
	},
	{
		title: 'Hanging balconies',
		subtitle: 'London',
		media: {
			src: '/img/project/sixth.jpg',
			alt: 'Hanging balconies',
			width: 672,
			height: 504,
			sizes:
				'(max-width: 639px) 92vw, (max-width: 767px) 608px, (max-width: 1023px) 336px, (max-width: 1279px) 424px, 672px',
		},
	},
]

export const ADDRESSES: Address[] = [
	{
		title: 'North',
		lines: ['AFL Architects', 'St Georges House 56', 'Peter Street', 'Manchester'],
		phone: '+44 (0)161 236 6263',
		href: 'tel:+4401612366263',
	},
	{
		title: 'Midlands',
		lines: ['AFL Architects', 'Unit 12 133', 'Newhall Street', 'Birmingham'],
		phone: '+44 (0)121 289 4363',
		href: 'tel:+4401212894363',
	},
]
