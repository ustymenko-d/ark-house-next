'use client'

import clsx from 'clsx'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import ProjectCard from '@/components/ProjectCard'
import { ITabContentProps, ProjectCase } from '@/const/const.types'

import styles from './ProjectsTypeContent.module.css'

const ProjectsTypeContent = ({ tabsContent, activeTab }: ITabContentProps) => (
	<AnimatePresence mode='wait'>
		{tabsContent.map((item, index) => {
			if (activeTab !== item.tabName) return null

			return (
				<AnimatedWrapper
					key={`${item.tabName}-${index}`}
					typeFade={false}
					duration={0.3}
					className='h-full'>
					<div
						id={`projects-tabpanel-${index}`}
						role='tabpanel'
						aria-labelledby={`projects-tab-${index}`}
						className={`${styles.grid} grid gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-12`}>
						{(item.content as ProjectCase[]).map(
							(projectCase: ProjectCase, projectCaseIndex: number) => (
								<Link
									key={`${projectCase.title}-${projectCaseIndex}`}
									href='/projects/case'
									className={clsx(
										styles.project,
										'transition-[outline-offset] duration-150 outline-dark-color hover:outline-offset-2 hover:outline hover:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-2'
									)}>
									<AnimatedWrapper className='h-full'>
										<ProjectCard {...projectCase} />
									</AnimatedWrapper>
								</Link>
							)
						)}
					</div>
				</AnimatedWrapper>
			)
		})}
	</AnimatePresence>
)

export default ProjectsTypeContent
