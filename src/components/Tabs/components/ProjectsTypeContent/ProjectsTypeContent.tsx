'use client'

import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import Link from 'next/link'

import AnimatedWrapper from '@/components/AnimatedWrapper'
import ProjectCard from '@/components/ProjectCard'
import { ITabContentProps, ProjectCase } from '@/const/const.types'

import styles from './ProjectsTypeContent.module.css'

const ProjectsTypeContent = ({ tabsContent, activeTab }: ITabContentProps) => (
	<div className='w-full'>
		<AnimatePresence
			initial={false}
			mode='wait'>
			{tabsContent.map((item, index) => {
				if (item.tabName !== activeTab) return null

				return (
					<motion.div
						key={`${item.tabName}-${index}`}
						id={`projects-tabpanel-${index}`}
						role='tabpanel'
						aria-labelledby={`projects-tab-${index}`}
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						style={{ overflow: 'hidden' }}
						className='w-full'>
						<div className={`${styles.grid} grid gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-12`}>
							{(item.content as ProjectCase[]).map((projectCase, projectCaseIndex) => (
								<Link
									key={`${projectCase.title}-${projectCaseIndex}`}
									href='/projects/case'
									className={clsx(
										styles.project,
										'transition-[outline-offset] duration-150 outline-dark-color hover:outline-offset-2 hover:outline hover:outline-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-2'
									)}>
									<AnimatedWrapper
										className='h-full'
										typeFade={false}>
										<ProjectCard {...projectCase} />
									</AnimatedWrapper>
								</Link>
							))}
						</div>
					</motion.div>
				)
			})}
		</AnimatePresence>
	</div>
)

export default ProjectsTypeContent
