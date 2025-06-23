import clsx from 'clsx'
import Link from 'next/link'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { ITabContentProps, ProjectCase } from '@/const/const.types'

import styles from './ProjectsTypeContent.module.css'

const ProjectsTypeContent = ({ tabsContent, activeTab }: ITabContentProps) =>
	tabsContent.map((item, index) => (
		<div
			key={`${item.tabName}-${index}`}
			className={clsx({
				'h-full': activeTab === item.tabName,
				'overflow-hidden invisible opacity-0 h-0 w-0':
					activeTab !== item.tabName,
			})}
			id={`projects-tabpanel-${index}`}
			role='tabpanel'
			aria-labelledby={`projects-tab-${index}`}>
			<div
				className={`${styles.grid} grid gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-12`}>
				{(item.content as ProjectCase[]).map(
					(projectCase: ProjectCase, projectCaseIndex: number) => (
						<Link
							className={styles.link}
							key={`${projectCase.title}-${projectCaseIndex}`}
							href='/projects/case'>
							<AnimatedWrapper className='h-full'>
								<ProjectCard {...projectCase} />
							</AnimatedWrapper>
						</Link>
					)
				)}
			</div>
		</div>
	))

export default ProjectsTypeContent
