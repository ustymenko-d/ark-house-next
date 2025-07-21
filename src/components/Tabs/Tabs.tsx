'use client'

import clsx from 'clsx'
import { useState } from 'react'

import { TabList } from '@/const/const.types'

import ProjectsTypeContent from './components/ProjectsTypeContent/ProjectsTypeContent'
import ServicesTypeContent from './components/ServicesTypeContent'
import TeamTypeContent from './components/TeamTypeContent'

interface ITabsProps {
	tabsType: 'services' | 'projects' | 'team'
	tabsList: TabList
}

const CONTENT_COMPONENTS = {
	services: ServicesTypeContent,
	projects: ProjectsTypeContent,
	team: TeamTypeContent,
} as const

const Tabs = ({ tabsType, tabsList }: ITabsProps) => {
	const { tabs, tabsContent } = tabsList

	const [activeTab, setActiveTab] = useState(tabs[0])

	const isProjects = tabsType === 'projects'
	const isServices = tabsType === 'services'

	const handleChangeTab = (tab: string | null) => {
		if (tab) setActiveTab(tab)
	}

	const ContentComponent = CONTENT_COMPONENTS[tabsType]

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
					'h-full w-full flex items-center flex-wrap gap-y-2 gap-x-4',
					'sm:justify-between',
					'xl:flex-col xl:items-start xl:mb-0',
					{
						'xl:justify-start xl:gap-y-8': isProjects,
						'xl:justify-evenly': !isProjects,
					}
				)}
				role='tablist'>
				{tabs.map((tab, index) => (
					<button
						key={`${tab}-${index}`}
						id={`${tabsType}-tab-${index}`}
						style={{ backgroundSize: activeTab === tab ? '100% 1px' : '' }}
						className='text-2xl font-semibold bg-transparent animatedUnderline text-dark-color'
						onClick={() => handleChangeTab(tab)}
						role='tab'
						aria-selected={activeTab === tab}
						aria-controls={`${tabsType}-tabpanel-${index}`}
						aria-label={`Set ${tab} tab`}>
						{tab}
					</button>
				))}
			</div>

			{/* <div> */}
				{ContentComponent && (
					<ContentComponent
						tabsContent={tabsContent}
						activeTab={activeTab}
					/>
				)}
			{/* </div> */}
		</div>
	)
}

export default Tabs
