import { Article, NavigationLink } from './const.interfaces'

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
