'use client';

import { useState } from 'react';
import clsx from 'clsx';

import { TabList } from '@/const/const.types';

import ProjectsTypeContent from './components/ProjectsTypeContent/ProjectsTypeContent';
import ServicesTypeContent from './components/ServicesTypeContent';
import TeamTypeContent from './components/TeamTypeContent';

interface Props {
	tabsType: 'services' | 'projects' | 'team';
	tabsList: TabList;
}

const CONTENT_COMPONENTS = {
	services: ServicesTypeContent,
	projects: ProjectsTypeContent,
	team: TeamTypeContent,
} as const;

const Tabs = ({ tabsType, tabsList }: Props) => {
	const { tabs, tabsContent } = tabsList;

	const [activeTab, setActiveTab] = useState(tabs[0]);

	const isProjects = tabsType === 'projects';
	const isServices = tabsType === 'services';

	const handleChangeTab = (tab: string | null) => {
		if (tab) setActiveTab(tab);
	};

	const ContentComponent = CONTENT_COMPONENTS[tabsType];

	return (
		<div
			className={clsx(
				{
					'grid-rows-[auto_minmax(auto,640px)] xl:grid-cols-[auto_66.66%] xl:grid-rows-[auto]':
						isServices,
					'xl:grid-cols-[auto_1fr]': !isServices,
				},
				'grid gap-6 xl:gap-12'
			)}>
			<div
				className={clsx(
					'flex h-full w-full flex-wrap items-center gap-x-4 gap-y-2',
					'sm:justify-between',
					'xl:mb-0 xl:flex-col xl:items-start',
					{
						'xl:justify-start xl:gap-y-8': isProjects,
						'xl:justify-evenly': isServices,
						'xl:justify-start xl:gap-y-10': !isProjects && !isServices,
					}
				)}
				role='tablist'>
				{tabs.map((tab, index) => (
					<button
						key={`${tab}-${index}`}
						id={`${tabsType}-tab-${index}`}
						style={{ backgroundSize: activeTab === tab ? '100% 1px' : '' }}
						className='animatedUnderline bg-transparent text-2xl font-semibold text-dark-color'
						onClick={() => handleChangeTab(tab)}
						role='tab'
						aria-selected={activeTab === tab}
						aria-controls={`${tabsType}-tabpanel-${index}`}
						aria-label={`Set ${tab} tab`}>
						{tab}
					</button>
				))}
			</div>

			{ContentComponent && (
				<ContentComponent tabsContent={tabsContent} activeTab={activeTab} />
			)}
		</div>
	);
};

export default Tabs;
