'use client'

import { useState } from 'react'
import clsx from 'clsx'
import ServicesTypeContent from './components/ServicesTypeContent/ServicesTypeContent'
import ProjectsTypeContent from './components/ProjectsTypeContent/ProjectsTypeContent'
import TeamTypeContent from './components/TeamTypeContent/TeamTypeContent'
import { TabList } from '@/const/const.types'
import styles from './Tabs.module.css'

interface TabsProps {
	tabsType: 'services' | 'projects' | 'team'
	tabsList: TabList
}

const Tabs = ({ tabsType, tabsList }: TabsProps) => {
	const { tabs, tabsContent } = tabsList
	const [activeTab, setActiveTab] = useState<string>(tabs[0])
	const isProjects = tabsType === 'projects'
	const isServices = tabsType === 'services'

	const handleChangeTab = (newActiveTab: string | null) => {
		if (newActiveTab) {
			setActiveTab(newActiveTab)
		}
	}

	const renderContent = () => {
		switch (tabsType) {
			case 'services':
				return (
					<ServicesTypeContent
						tabsContent={tabsContent}
						activeTab={activeTab}
					/>
				)
			case 'projects':
				return (
					<ProjectsTypeContent
						tabsContent={tabsContent}
						activeTab={activeTab}
					/>
				)
			case 'team':
				return (
					<TeamTypeContent
						tabsContent={tabsContent}
						activeTab={activeTab}
					/>
				)
			default:
				return null
		}
	}

	return (
		<div
			className={clsx(
				{
					[styles.tabs_services]: isServices,
					[styles.tabs_team]: !isServices,
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
				{tabs.map((tabName, index) => (
					<button
						key={`${tabName}-${index}`}
						id={`${tabsType}-tab-${index}`}
						className={clsx(
							{ [styles.tabButton_active]: activeTab === tabName },
							'animatedUnderline text-2xl font-semibold bg-transparent text-dark-color'
						)}
						onClick={(e) =>
							handleChangeTab((e.target as HTMLButtonElement).textContent)
						}
						role='tab'
						aria-selected={activeTab === tabName}
						aria-controls={`${tabsType}-tabpanel-${index}`}
						aria-label={`Set ${tabName} tab`}>
						{tabName}
					</button>
				))}
			</div>

			<div>{renderContent()}</div>
		</div>
	)
}

export default Tabs
