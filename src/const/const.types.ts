import { DEPARTMENTS, SERVICES } from './const';

export type NavigationLink = {
	title: string;
	href: string;
};

export interface OneTabContent<C> {
	tabName: Service;
	content: C;
}

export type Service = (typeof SERVICES)[number];
export type Department = (typeof DEPARTMENTS)[number];

export interface TabList<C> {
	tabs: Service[];
	tabsContent: OneTabContent<C>[];
}

export interface Address {
	title: string;
	lines: string[];
	phone: string;
	href: string;
}
