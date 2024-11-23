'use client'

import React, { useState } from 'react'
import { TabList } from '@/const/const.interfaces'
import ServicesTypeContent from './components/ServicesTypeContent/ServicesTypeContent'
import ProjectsTypeContent from './components/ProjectsTypeContent/ProjectsTypeContent'
import TeamTypeContent from './components/TeamTypeContent/TeamTypeContent'
import styles from './Tabs.module.css'

interface TabsProps {
	tabsType: 'services' | 'projects' | 'team'
	tabsList: TabList
}

const Tabs: React.FC<TabsProps> = ({ tabsType, tabsList }) => {
	const { tabs, tabsContent } = tabsList

	const [activeTab, setActiveTab] = useState<string>(tabs[0])

	const handleChangeTab = (newActiveTab: string | null) => {
		if (newActiveTab) {
			setActiveTab(newActiveTab)
		}
	}

	return (
		<div
			className={`${
				tabsType === 'services'
					? `${styles.tabs_services} `
					: `${styles.tabs_team} `
			}grid gap-6 xl:gap-12`}>
			<ul
				className={`h-full w-full flex items-center flex-wrap gap-y-2 gap-x-4 sm:justify-between xl:flex-col ${
					tabsType === 'projects' ? 'xl:justify-start xl:gap-y-8' : 'xl:justify-evenly'
				} xl:items-start xl:mb-0`}
				role='tablist'>
				{tabs.map((tabName, index) => (
					<li key={`${tabName}-${index}`}>
						<button
							id={`${tabsType}-tab-${index}`}
							className={`${
								activeTab === tabName ? `${styles.tabButton_active} ` : ''
							}animatedUnderline text-2xl font-semibold bg-transparent text-dark-color`}
							onClick={(e) =>
								handleChangeTab((e.target as HTMLButtonElement).textContent)
							}
							role='tab'
							aria-selected={activeTab === tabName}
							aria-controls={`${tabsType}-tabpanel-${index}`}
							aria-label={`Set ${tabName} tab`}>
							{tabName}
						</button>
					</li>
				))}
			</ul>

			<div >
				{tabsType === 'services' && (
					<ServicesTypeContent
						tabsContent={tabsContent}
						activeTab={activeTab}
					/>
				)}
				{tabsType === 'projects' && (
					<ProjectsTypeContent
						tabsContent={tabsContent}
						activeTab={activeTab}
					/>
				)}
				{tabsType === 'team' && (
					<TeamTypeContent
						tabsContent={tabsContent}
						activeTab={activeTab}
					/>
				)}
			</div>
		</div>
	)
}

export default Tabs
