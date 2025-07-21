export type NavigationLink = {
	title: string
	href: string
}

type Media = {
	src: string
	alt: string
	width?: number
	height?: number
	sizes?: string
}

export interface Article {
	title: string
	content: string
	dateTime: string
	date: string
	media: Media
}

export interface ProjectCase {
	title: string
	subtitle: string
	media: Media
	category?: string
}

export interface TeamMember {
	name: string
	role: string
	media: Media
}

export interface OneTabContent {
	tabName: string
	content: TeamMember[] | string | ProjectCase[]
}

export interface ITabContentProps {
	tabsContent: OneTabContent[]
	activeTab: string
}

export interface TabList {
	tabs: string[]
	tabsContent: OneTabContent[]
}

export interface ProjectCharacteristic {
	characteristic: string
	value: string
}

export interface Address {
	title: string
	lines: string[]
	phone: string
	href: string
}
