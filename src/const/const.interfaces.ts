export type NavigationLink = {
	title: string
	href: string
}

export interface Article {
	title: string
	content: string
	dateTime: string
	date: string
	imgSrc: string
}

export interface ProjectCase {
	title: string
	subtitle: string
	imgSrc: string
	category: string
}

export interface TeamMember {
	imgSrc: string
	name: string
	role: string
}

export interface OneTabContent {
	tabName: string
	content: TeamMember[] | string | ProjectCase[]
}

export interface TabList {
	tabs: string[]
	tabsContent: OneTabContent[]
}
