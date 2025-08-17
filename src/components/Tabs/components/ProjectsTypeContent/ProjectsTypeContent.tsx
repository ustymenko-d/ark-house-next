'use client';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import Link from 'next/link';

import AnimatedWrapper from '@/components/AnimatedWrapper';
import ProjectCard from '@/components/ProjectCard';
import { ITabContentProps, ProjectCase } from '@/const/const.types';

import styles from './ProjectsTypeContent.module.css';

const ANIMATION = {
	initial: false,
	transition: { duration: 0.3 },
};

const ProjectsTypeContent = ({ tabsContent, activeTab }: ITabContentProps) => (
	<div className='w-full'>
		{tabsContent.map((item, index) => {
			const isActive = item.tabName === activeTab;

			return (
				<motion.div
					key={`${item.tabName}-${index}`}
					id={`projects-tabpanel-${index}`}
					role='tabpanel'
					aria-labelledby={`projects-tab-${index}`}
					aria-hidden={!isActive}
					initial={ANIMATION.initial}
					animate={{
						opacity: isActive ? 1 : 0,
						height: isActive ? 'auto' : 0,
					}}
					transition={ANIMATION.transition}
					className={clsx('w-full overflow-hidden', isActive && 'p-1.5')}>
					<div
						className={clsx(
							styles.grid,
							'grid gap-x-4 gap-y-6 md:grid-cols-2 xl:grid-cols-12'
						)}>
						{(item.content as ProjectCase[]).map(
							(projectCase, projectIndex) => (
								<Link
									key={`${projectCase.title}-${projectIndex}`}
									href='/projects/case'
									className={clsx(
										styles.project,
										'outline-dark-color transition-[outline-offset] duration-150 hover:outline hover:outline-2 hover:outline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
									)}>
									<AnimatedWrapper className='h-full' typeFade={false}>
										<ProjectCard {...projectCase} />
									</AnimatedWrapper>
								</Link>
							)
						)}
					</div>
				</motion.div>
			);
		})}
	</div>
);

export default ProjectsTypeContent;
