import React from 'react'
import { OneTabContent, ProjectCase } from '@/const/const.interfaces'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import Link from 'next/link'
import styles from './ProjectsTypeContent.module.css'

interface ProjectsTypeContentProps {
	tabsContent: OneTabContent[]
	activeTab: string
}

const ProjectsTypeContent: React.FC<ProjectsTypeContentProps> = ({
	tabsContent,
	activeTab,
}) => {
	console.log(tabsContent)
	console.log(activeTab)

	return tabsContent.map((item, index) => {
		const { tabName, content } = item

		return (
			<div
				key={`${tabName}-${index}`}
				className={
					activeTab === tabName
						? 'h-full'
						: 'overflow-hidden invisible opacity-0 h-0 w-0'
				}
				id={`projects-tabpanel-${index}`}
				role='tabpanel'
				aria-labelledby={`projects-tab-${index}`}>
				<div className={`${styles.grid} grid gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-12`}>
					{(content as ProjectCase[]).map(
						(projectCase: ProjectCase, projectCaseIndex: number) => (
							<Link
								className={styles.link}
								key={`${projectCase.title}-${projectCaseIndex}`}
								href='/projects/case'>
								<ProjectCard projectCase={projectCase} />
							</Link>
						)
					)}
				</div>
			</div>
		)
	})
}

export default ProjectsTypeContent
