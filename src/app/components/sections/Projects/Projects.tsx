import Link from 'next/link'

import { Banner2, Banner45 } from '@/assets/banner-icons'
import AnimatedWrapper from '@/components/AnimatedWrapper'
import Banner from '@/components/Banner'
import ProjectCard from '@/components/ProjectCard'
import Button from '@/components/UI/Button'
import { HOME_PROJECTS } from '@/const/const'

import styles from './Projects.module.css'

const Projects = () => {
	const firstProjectsGroup = HOME_PROJECTS.slice(0, 3)
	const secondProjectsGroup = HOME_PROJECTS.slice(3, 9)
	const lastProjectCase = HOME_PROJECTS[9]

	return (
		<section
			id='projects'
			className='px-4 mb-14'>
			<div className='container mx-auto topline mb-14 md:px-10 lg:px-20'>
				<h2 className='font-semibold leading-tight'>Recent Projects</h2>
				<Button to='/projects'>Discover&nbsp;All</Button>
			</div>

			<div className='container mx-auto md:px-10 lg:px-20'>
				<div
					className={`${styles.projectsGrid} mb-14 grid gap-y-12 lg:grid-cols-12 lg:gap-8 2xl:gap-16`}>
					{firstProjectsGroup.map((projectCase, index) => (
						<Link
							className={styles.projectLink}
							key={`${projectCase.title}-${index}`}
							href='/projects/case'>
							<AnimatedWrapper className='h-full'>
								<ProjectCard {...projectCase} />
							</AnimatedWrapper>
						</Link>
					))}

					<Banner
						className={styles.banner}
						svgImage={<Banner45 />}
						topLineText='Yeas of architecture,'
						bottomLineText='planning, design'
					/>

					{secondProjectsGroup.map((projectCase, index) => (
						<Link
							className={styles.projectLink}
							key={`${projectCase.title}-${index}`}
							href='/projects/case'>
							<AnimatedWrapper className='h-full'>
								<ProjectCard {...projectCase} />
							</AnimatedWrapper>
						</Link>
					))}

					<Banner
						className={styles.banner}
						svgImage={<Banner2 />}
						topLineText='With over 2.600'
						bottomLineText='projects completed'
					/>

					<Link
						className={styles.projectLink}
						href='/projects/case'>
						<AnimatedWrapper className='h-full'>
							<ProjectCard {...lastProjectCase} />
						</AnimatedWrapper>
					</Link>
				</div>

				<div className='text-center'>
					<p className={`${styles.title} mb-6`}>Start a Project?</p>
					<Button to='/contact'>Contact&nbsp;Us</Button>
				</div>
			</div>
		</section>
	)
}

export default Projects
