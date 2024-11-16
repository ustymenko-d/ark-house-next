import { Article, NavigationLink, ProjectCase } from './const.interfaces'

export const NAVIGATION_LINKS: NavigationLink[] = [
	{
		linkHref: '#about',
		title: 'About',
	},
	{
		linkHref: '#services',
		title: 'Services',
	},
	{
		linkHref: '#projects',
		title: 'Projects',
	},
	{
		linkHref: '#team',
		title: 'Team',
	},
	{
		linkHref: '#blog',
		title: 'Blog',
	},
]

export const PROJECT_DESCRIPTION: string = 'Lorem text'

export const BLOG_ARTICLES: Article[] = [
	{
		title: 'Design and architecture training',
		text: 'Designers and architects learn through a combination of formal education, practical experience, and continuing professional development.',
		dateTime: '2023-01-01',
		date: 'Nov 01, 2023',
		imageUrl: '/img/home-page/blog-items/meet',
	},
	{
		title: 'Design of public spaces',
		text: 'Public space design focuses on creating functional, safe, and visually appealing areas that foster social connections, community involvement, and a strong sense of place.',
		dateTime: '2023-11-12',
		date: 'Nov 12, 2023',
		imageUrl: '/img/home-page/blog-items/street',
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
